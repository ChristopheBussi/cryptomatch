<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SingUpController extends AbstractController
{
    /**
     * @Route("/api/v1/signup", name="apiSignUp")
     */
    public function signup(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new contr!',
            'path' => 'src/Controller/SingUpController.php',
        ]);
    }
}
