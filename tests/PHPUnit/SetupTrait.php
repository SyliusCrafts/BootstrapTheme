<?php

declare(strict_types=1);

namespace Tests\BootstrapTheme;

use Doctrine\ORM\EntityManager;
use Sylius\Component\Core\Model\Channel;

/**
 * @internal
 */
trait SetupTrait
{
    public function getChannel(): Channel
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();

        return $manager->getRepository(Channel::class)->findOneBy([]);
    }

    public function useNoneTheme(): void
    {
        $this->switchTheme(null);
    }

    public function useBootstrapTheme(): void
    {
        $this->switchTheme('sylius/bootstrap-theme');
    }

    private function switchTheme(?string $theme): void
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();

        $channel = $manager->getRepository(Channel::class)->findOneBy([]);
        $channel->setThemeName($theme);
        $manager->flush();
    }
}
