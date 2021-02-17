<?php


namespace App\Service;


use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Rewieer\TaskSchedulerBundle\Task\AbstractScheduledTask;
use Rewieer\TaskSchedulerBundle\Task\Schedule;
use Symfony\Component\Process\Process;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CronExample extends AbstractScheduledTask
{
    private $Em = null;
    private $Encoder = null;


    protected function initialize(Schedule $schedule)
    {
        // TODO: Implement initialize() method.
        $schedule->everyMinutes(2);
    }

    public function run()
    {
        // TODO: Implement run() method.

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
    }
}
