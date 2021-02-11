<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    /**
     * @Route("/api/v1/order", name="apiOrder")
     */
    public function postOrder(): Response
    {
        return $this->json([
            'message' => 'Welcome to your Order controller!',
            'path' => 'src/Controller/API/OrderController.php',
        ]);
    }

    /**
     * @Route("/api/v1/orders/{username}", name="apiOrders")
     */
    public function listOrders($username)
    {

    }
}
