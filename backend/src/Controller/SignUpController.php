<?php

namespace App\Controller;

use DateTime;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Validator\Constraints as Assert;


class SignUpController extends AbstractController
{
    /**
     * @Route("/signup", name="apiSignUp")
     */
    public function signup(Request $Request, UserPasswordEncoderInterface $Encoder, JWTTokenManagerInterface $JWTManager,
    ValidatorInterface $Validator): Response
    {
        $Response = new Response();

        if($Request->getContent() != null)
        {
                    //Get request data and convert in array...
                    $Data = (array) json_decode($Request->getContent());
            
                if(isset($Data['Email']) && isset($Data['Password']) && isset($Data['Username']) )
                {
                    $Date = new DateTime();
                    $User = new User();



                    //Vérification valid email...
                    $EmailConstraint = new Assert\Email();
                    $EmailConstraint->message = 'Adresse mail invalide.';
                    $Errors = $Validator->validate($Data['Email'], $EmailConstraint);

                    if(count($Errors) == 0)
                    {
                        //Setter user...
                        $User->setEmail($Data['Email']);

                        //Verification Username if exist.. 
                        $Em = $this->getDoctrine()->getManager();

                        $RepUser = $Em->getRepository(User::class);
                        $UserExist = $RepUser->findOneBy(['username' => $Data['Username'] ] );
                        if(!$UserExist)
                        {
                        
                            $User->setUsername($Data['Username']);
                            $Pass = $Encoder->encodePassword($User, $Data['Password']);
                            $User->setPassword($Pass);
                            $User->setCreatedAt($Date);
                            $User->setUSDAmount(0);
                            $User->setRankValorisationAmount(0);


                            $Em->persist($User);
                            $Em->flush();

                            $Response->setStatusCode("200");
                            $Response->setCOntent(json_encode(array(
                                'Message' => 'Inscription réussie'
                            )));
                        }
                        else
                        {
                            $Response->setStatusCode("500");
                            $Response->setCOntent(json_encode(array(
                                'Message' => 'User exist'
                            )));
                        }
                    }
                    else
                    {
                        $Response->setStatusCode("500");
                        $Response->setCOntent(json_encode(array(
                            'Message' => $Errors[0]->getMessage()
                        )));
                    }

                }
                else
                {
                    $Response->setStatusCode("500");
                    $Response->setCOntent(json_encode(array(
                        'Message' => 'Invalid Request'
                    )));
                }
    
        }
        else
        {
            $Response->setStatusCode("500");
            $Response->setCOntent(json_encode(array(
                'Message' => 'Request null'
            )));
        }
        
        return $Response;
    }

  
}
