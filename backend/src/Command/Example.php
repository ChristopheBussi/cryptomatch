<?php


namespace App\Command;


use App\Repository\CryptoRepository;
use App\Service\CallApiService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Serializer\SerializerInterface;

class Example extends Command
{
    private $Em;
    private $Encoder;

    public function __construct(EntityManagerInterface $em )
    {
        $this->em = $em;
        parent::__construct();
    }

    protected function configure()
    {
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {

    }
}