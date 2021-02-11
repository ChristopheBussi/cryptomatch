<?php

namespace App\Controller;

use DateTime;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class SignUpController extends AbstractController
{
    /**
     * @Route("/signup", name="apiSignUp")
     */
    public function signup(Request $Request, UserPasswordEncoderInterface $Encoder, JWTTokenManagerInterface $JWTManager): Response
    {

        $Date = new DateTime();

        $User = new User();

        $Data = (array) json_decode($Request->getContent());


        $User->setEmail($Data['Email'] );
        $User->setUsername($Data['Username'] );
        
        $Pass = $Encoder->encodePassword($User, $Data['Password']);
        $User->setPassword($Pass);
        
        $User->setCreatedAt($Date);
        $User->setUSDAmount(0);
        $User->setRankValorisationAmount(0);

        $Em = $this->getDoctrine()->getManager();

        $Em->persist($User);
        $Em->flush();

        return new JsonResponse(json_encode( ['token' => $JWTManager->create($User)]) );

    }

    public function getTokenUser(UserInterface $user, JWTTokenManagerInterface $JWTManager)
    {
        // ...

        return new JsonResponse(['token' => $JWTManager->create($user)]);
    }
}