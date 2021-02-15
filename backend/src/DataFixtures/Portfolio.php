<?php

namespace App\DataFixtures;

use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Security;

class Portfolio extends Fixture
{
    public function load(ObjectManager $manager)
    {

        // $product = new Product();
        // $manager->persist($product);


        $manager->flush();
    }
}
