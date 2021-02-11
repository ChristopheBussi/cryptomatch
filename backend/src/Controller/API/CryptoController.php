<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CryptoController extends AbstractController
{
    /**
     * @Route("/api/v1/cryptos", name="apiCryptos")
     */
    public function list(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controlle!',
            'path' => 'src/Controller/API/CryptoController.php',
        ]);
    }
}
