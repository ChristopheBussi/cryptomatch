<?php

namespace App\Controller\API;

use App\Entity\Crypto;
use App\Entity\Portfolio;
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
     * @Route("/api/v1/portfolio", name="apiPortfolio")
     */
    public function getPortfolio(): Response
    {
        $Portfolio = $this->RepPortfolio->findBy(['user' => $this->Security->getUser()]);

        foreach ($Portfolio as $currentPortfolio)
        {
            $Crypto = $this->Serializer->normalize($currentPortfolio, null, ['groups' => 'normal']); //For circular reference..
            $cryptoslist[] = [
                "actualQuantity" => $Crypto['actualQuantity'],
                "averagePrice" => $Crypto['averagePrice'],
                "cryptoName" => $Crypto['cryptoname'],
                "imageUrl" => $Crypto['pairName'][0]['imageUrl']
            ];
        }

        $this->Response->setContent(json_encode(array(
            'Portfolio' => $cryptoslist
        )));

        return $this->Response;
    }

    /**
     * @Route("/api/v1/portfolio/{crypto}", name="apiPortfolio_By_PairName")
     */
    public function getQuantityCrypto($crypto): Response
    {
        $currentCrypto = $this->RepPortfolio->findOneBy(['cryptoname' => $crypto]);

        $this->Response->setContent(json_encode(array(
            'Crypto' => $this->Serializer->normalize($currentCrypto, 'json', ['groups' => 'normal'])
        )));

        return $this->Response;
    }
}
