<?php

namespace App\Controller\API;

use App\Entity\Portfolio;
use App\Entity\User;
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
