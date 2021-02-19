<?php

namespace App\Service;

use Rewieer\TaskSchedulerBundle\Task\AbstractScheduledTask;
use Rewieer\TaskSchedulerBundle\Task\Schedule;

class CronTest extends AbstractScheduledTask
{

    protected function initialize(Schedule $schedule)
    {
        // TODO: Implement initialize() method.
        $schedule->everyMinutes(2);
    }

    public function run()
    {
        // TODO: Implement run() method.

    }
}