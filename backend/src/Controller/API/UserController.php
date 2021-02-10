<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/api/v1/user", name="apiUser")
     */
    public function getUser(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/API/UserController.php',
        ]);
    }

     /**
     * @Route("/api/v1/user", name="apiUser")
     */
    public function ranking()  //Return user rank by portfolio..
    {

    }
}
