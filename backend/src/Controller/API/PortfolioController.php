<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/api/v1/portfolio/{pairname}", name="apiPortfolio")
     */
    public function getQuantityCrypto($pairname): Response
    {
        return $this->json([
            'message' => 'Welcome to your Portfolio controller!',
            'path' => 'src/Controller/API/PortfolioController.php',
        ]);
    }
}
