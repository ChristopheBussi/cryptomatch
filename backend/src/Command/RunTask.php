<?php


namespace App\Command;


use App\Service\CronExample;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RunTask extends Command
{

    protected static $defaultName = 'app:run:task';
    private $Em = null;
    private $Encoder = null;

    public function __construct(EntityManagerInterface $Em, UserPasswordEncoderInterface $Encoder )
    {
        $this->Em = $Em;
        $this->Encoder = $Encoder;
        parent::__construct();
    }

    protected function configure()
    {

    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $Task = new CronExample($this->Em, $this->Encoder);
        $Task->run();

        $io->success("Task start..");


        return Command::SUCCESS;
    }

}