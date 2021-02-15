<?php

namespace App\Controller\API;

use App\Classes\CheckOrder;
use App\Entity\Crypto;
use App\Entity\Order;
use App\Entity\Portfolio;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class OrderController extends AbstractController
{
    private $Em;
    private $Response;
    private $Security;

    public function __construct(EntityManagerInterface $Em, Security $Security)
    {
        $this->Em = $Em;
        $this->Security = $Security; //for getUser()..
        $this->Response = new Response();

        $this->Response->headers->set('Content-Type', 'application/json');
    }

    /**
     * @Route("/api/v1/order", name="apiOrder")
     */
    public function postOrder(Request $Request): Response
    {

       //check the conformity of the request sent by the Front
        $RepCrypto = $this->Em->getRepository(Crypto::class);
        $Data = $Request->toArray();

        //We check if the crypto exists
        $CryptoByPairName = $RepCrypto->findOneBy(['pairName' => $Data['pair_name']]);

        if(!$CryptoByPairName)
            $this->ResponseFormate('Crypto not exists', '404');
        else
        {
            //Vérifie si l'ordre est conforme.. avec OrderIsValid()..
            $OrderCheck = new CheckOrder($this->Em, $Data['quantity'], $Data['ordertype'],
                $Data['quotation'], $this->Security->getUser(), $Data['pair_name']);


            $TotalPrice = $Data['quantity'] * $Data['quotation'];

            if($OrderCheck->OrderIsValid()['value'])
            {
                $NewUSDAmount = 0;
                $NewQuantity = 0;

                //Insert Order...
                $Order = new Order();

                $Order->setCreatedAt(new \DateTime());
                $Order->setUser($this->Security->getUser() );
                $Order->setCrypto($CryptoByPairName);
                $Order->setOrderType($Data['ordertype'] );
                $Order->setQuantity($Data['quantity'] );
                $Order->setQuotation($Data['quotation'] );
                $Order->setAmount($TotalPrice);
                $this->Em->persist($Order);


                //Insert Portfolio....
                $Portfolio = new Portfolio();

                $RepPortfolio = $this->Em->getRepository(Portfolio::class);
                $CheckPortfolio = $RepPortfolio->findOneBy([
                    'user' => $this->Security->getUser(),
                    'cryptoname' => $Data['pair_name']
                ]);

                //Si le portfolio avec cette crypto et cet user n'existe pas alors on l'ajoute
                if(!$CheckPortfolio)
                {
                    $Portfolio->setUser($this->Security->getUser() );
                    $Portfolio->setActualQuantity($Data['quantity'] );
                    $Portfolio->setCryptoName($Data['pair_name'] );
                    $Portfolio->addPairName($CryptoByPairName);
                    $Portfolio->setAveragePrice("0");
                    $this->Em->persist($Portfolio);

                }
                //Sinon, on le modifie..uniquement la quantity et le averageprice..
                else
                {
                    if($Data['ordertype'] == 'Buy' )
                        $NewQuantity = $Data['quantity'] + $CheckPortfolio->getActualQuantity();
                    if($Data['ordertype'] == 'Sell')
                        $NewQuantity = $CheckPortfolio->getActualQuantity() - $Data['quantity'];

                    $CheckPortfolio->setActualQuantity($NewQuantity);
                    $CheckPortfolio->setAveragePrice("0");
                }

                //Update Amount User...
                $User = $this->Em->getRepository(User::class)->find($this->Security->getUser());
                $USDAmount = $User->getUSDAmount();

                if($Data['ordertype'] == 'Buy' )
                    $NewUSDAmount = ($USDAmount - $TotalPrice);
                if($Data['ordertype'] == 'Sell' )
                    $NewUSDAmount = ($USDAmount + $TotalPrice);

                $User->setUSDAmount($NewUSDAmount);
                $this->Em->flush();

                $this->ResponseFormateOrderSuccess($OrderCheck->OrderIsValid()['message'], $NewUSDAmount, $NewQuantity, '200');
            }
            else
            {
                //Order is not valid, message possible : "Quantity insuffisantes", "Fonds insuffisants",
                //ou "invalid order"..
                $this->ResponseFormate($OrderCheck->OrderIsValid()['message'], 500);
            }

        }


        return $this->Response;
    }

    /**
     * @Route("/api/v1/orders/{username}", name="apiOrders")
     */
    public function listOrders($username)
    {

    }

    public function ResponseFormate($Message,  $Code)
    {
        $this->Response->setStatusCode($Code);
        $this->Response->setContent(json_encode(array(
            'message' => $Message
        )));
    }

    public function ResponseFormateOrderSuccess($Message, $NewAmount, $NewQuantity,  $Code)
    {
        $this->Response->setStatusCode($Code);
        $this->Response->setContent(json_encode(array(
            'message' => $Message,
            'new_amount' => $NewAmount,
            'new_quantity' => $NewQuantity
        )));
    }
}
