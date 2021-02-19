<?php

namespace App\Controller\API;

use App\Entity\Crypto;
use App\Entity\Portfolio;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class PortfolioController extends AbstractController
{
    private $Em;
    private $Security;
    private $Response;
    private $Serializer;
    private $RepPortfolio;


    public function __construct(EntityManagerInterface $Em, Security $Security,
                                SerializerInterface $Serializer)
    {
        $this->Em = $Em;
        $this->Security = $Security;
        $this->Serializer = $Serializer;
        $this->Response = new Response();
        $this->Response->headers->set('Content-Type', 'application/json');

        $this->RepPortfolio = $this->Em->getRepository(Portfolio::class);

    }

    /**
     * @Route("/api/v1/portfolio/{username}", name="apiPortfolio")
     */
    public function getPortfolio($username): Response
    {
        $RepUser = $this->Em->getRepository(User::class);
        $User = $RepUser->findOneBy(['username' => $username]);

        if($User)
        {
            $Portfolio = $this->RepPortfolio->findBy(['user' => $User]);
            $cryptoslist = null;
            foreach ($Portfolio as $currentPortfolio) {
                $Crypto = $this->Serializer->normalize($currentPortfolio, null, ['groups' => 'normal']); //For circular reference..
                $cryptoslist[] = [
                    "actualQuantity" => $Crypto['actualQuantity'],
                    "averagePrice" => $Crypto['averagePrice'],
                    "cryptoName" => $Crypto['cryptoname'],
                    "imageUrl" => $Crypto['pairName'][0]['imageUrl']
                ];
            }

            $jsonCryptolist = json_encode($cryptoslist, JSON_UNESCAPED_SLASHES);
            $this->Response->setContent($jsonCryptolist);
        }
        else
        {
            $this->Response->setContent(json_encode(array(
                "Message" => "User not found"
            )));
        }

        return $this->Response;
    }

    /**
     * @Route("/api/v1/portfolio/{crypto}", name="apiPortfolio_By_PairName")
     */
    public function getQuantityCrypto($crypto): Response
    {
        $currentCrypto = $this->RepPortfolio->findOneBy(['cryptoname' => $crypto]);
        $this->Response->setContent(json_encode(array(
            'actualQuantity' => $currentCrypto->getActualQuantity()
        )));


        return $this->Response;
    }
}
