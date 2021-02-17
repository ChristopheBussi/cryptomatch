<?php


namespace App\Command;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class ExampleCommand extends Command
{

    protected static $defaultName = 'app:Example';
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

        $User = new User();
        $User->setEmail("cron@cron.fr");
        $User->setUsername("cron");
        $User->setPassword($this->Encoder->encodePassword($User, "test") );
        $User->setUSDAmount(10000);
        $User->setRankValorisationAmount(0);
        $User->setCreatedAt(new \DateTime() );
        $User->setRoles(["ROLE_USER"]);

        $this->Em->persist($User);
        $this->Em->flush();

        $io->success("User bien ajouté dans la bdd..");
        return Command::SUCCESS;
    }
}