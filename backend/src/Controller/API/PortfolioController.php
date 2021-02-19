<?php

namespace App\Controller\API;

use App\Entity\Portfolio;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PortfolioController extends AbstractController
{
    private $Em;
    private $Security;
    private $Response;
    private $Serializer;
    private $RepPortfolio;

    public function __construct(EntityManagerInterface $Em, Security $Security, SerializerInterface $Serializer)
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

        $cryptoslist = [];

        foreach ($Portfolio as $currentPortfolio) {
            $Crypto = $this->Serializer->normalize($currentPortfolio, null, ['groups' => 'normal']); //For circular reference..
            $cryptoslist[] = [
                "logoUrl" => $Crypto['pairName'][0]['imageUrl'],
                "pairName" => $Crypto['cryptoname'],
                "actualQuantity" => $Crypto['actualQuantity'],
                "averagePrice" => $Crypto['averagePrice']
            ];
        }

        $jsonCryptolist = json_encode($cryptoslist, JSON_UNESCAPED_SLASHES);

        $this->Response->setContent($jsonCryptolist);

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
