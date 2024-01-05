<?php

declare(strict_types=1);

namespace Tests\BootstrapTheme;

use Doctrine\ORM\EntityManager;
use Sylius\Component\Core\Model\Channel;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * @internal
 */
abstract class AbstractTest extends WebTestCase
{
    protected function useNoneTheme(): void
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();

        $channel = $manager->getRepository(Channel::class)->findOneBy([]);
        $channel->setThemeName(null);
        $manager->flush();
    }
}
