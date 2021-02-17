<?php

namespace App\Controller\API;

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

    public function __construct(EntityManagerInterface $Em, Security $Security)
    {
        $this->Em = $Em;
        $this->Security = $Security;

    }

    /**
     * @Route("/api/v1/portfolio", name="apiPortfolio")
     */
    public function getQuantityCrypto(SerializerInterface $serializer): Response
    {
        $Response = new Response();
        $Response->headers->set('Content-Type', 'application/json');

        $RepPortfilio = $this->Em->getRepository(Portfolio::class);
        $Portfolios = $RepPortfilio->findBy(['user' => $this->Security->getUser()]);

        dd($Portfolios);

        $PortfolioList[] = null;
        foreach($Portfolios as $currentPortfolio)
        {
            $P = $serializer->normalize($currentPortfolio, 'json', [
                'groups' => 'normal']
            );

            $PortfolioList[] = $P;
        }

        $Response->setStatusCode(200);
        $Response->setContent(json_encode(array(
            'portfolio' => $PortfolioList
        )));

        return $Response;
    }
}
