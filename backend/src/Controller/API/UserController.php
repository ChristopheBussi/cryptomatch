<?php

namespace App\Controller\API;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    //...
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
     * @Route("/ranking", name="apiRanking")
     */
    public function ranking(EntityManagerInterface $em, SerializerInterface $serializer): Response
    {
        $query = $em->createQuery(
            'SELECT u
            FROM App\Entity\User u
            WHERE u.rankValorisationAmount > 0
            ORDER BY u.rankValorisationAmount DESC'
        );

        $results = $query->getResult();

        $rank = 0;

        $ranking = [];

        foreach ($results as $currentUser) {

            $userEntityAsArray = $serializer->normalize($currentUser, null, ['groups' => 'normal']);
            
            $rank++;

            $ranking[] = [
                "rank" => $rank,
                "username" => $userEntityAsArray['username'],
                "accountValorization" => $userEntityAsArray['rankValorisationAmount']
            ];
        }
        
        $response = new Response();

        
        if (count($ranking) > 0) {
            $jsonRanking = json_encode($ranking);
            $response->setContent($jsonRanking);
            $response->setStatusCode(Response::HTTP_OK);
        } else {
            $response->setStatusCode(404);
        }

        return $response;
    }
}
