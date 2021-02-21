<?php

namespace App\Controller\API;

use App\Classes\Mail;
use App\Entity\ResetPassword;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\VarDumper\Cloner\Data;

class PasswordResetController extends AbstractController
{

    private $Response;
    private $Em;

    public function __construct(EntityManagerInterface $Em)
    {
        $this->Em = $Em;
        $this->Response = new Response();

        $this->Response->headers->set('Content-Type', 'application/json');
    }

    /**
     * @Route("/api/v1/password-reset/{username}", name="password_reset")
     */
    public function CheckUsername($username, MailerInterface $Mailer): Response //Est appelé quand l'user met son username pour changer de mot de passe..
    {
        //On vérifie si l'user existe, si c'est le cas on appelle la SendToken...
        $Doc = $this->getDoctrine()->getManager();
        $RepUser = $Doc->getRepository(User::class);

        $User = $RepUser->findOneBy(['username' => $username] );

        if($User && !empty($username))
        {
            //On envoie le mail..
            $Mail = new Mail("rootem21@gmail.com", "TEST...", $Mailer);
            $Mail->sendMail();

            //On génère un Token et on l'insert dans la table ResetPassword..
            $ResetPassword = new ResetPassword();
            $ResetPassword->setUserId($User->getId() );
            $ResetPassword->setToken(uniqid() );
            $ResetPassword->setCreatedAt(new \DateTime());

            $Doc->persist($ResetPassword);
            $Doc->flush();

            $this->Response->setStatusCode(201);
            $this->Response->setContent(json_encode(array('message' => 'OK') ));
        }
       else
       {
           $this->Response->setStatusCode(404);
           $this->Response->setContent(json_encode(array('message' => 'User not found') ));
       }


       return $this->Response;
    }

}
