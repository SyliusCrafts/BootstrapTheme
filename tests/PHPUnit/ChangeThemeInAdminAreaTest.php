<?php

declare(strict_types=1);

namespace Tests\BootstrapTheme;

use App\Entity\User\AdminUser;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @internal
 */
final class ChangeThemeInAdminAreaTest extends AbstractTest
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        $this->client = self::createClient();
        $this->client->followRedirects();
        $this->useNoneTheme();
    }

    public function testAccessToAdminArea(): void
    {
        $this->client->request('GET', '/admin/login');

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Sylius | Administration panel login');

        $this->adminLogin();
        $this->client->request('GET', '/admin/');

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Dashboard | Sylius');
    }

    public function testChangeThemeAffectFront(): void
    {
        /** @var UrlGeneratorInterface $urlGenerator */
        $urlGenerator = $this->getContainer()->get(UrlGeneratorInterface::class);
        $channel = $this->getChannel();

        $crawler = $this->client->request('GET', '/');
        $semanticBodyClass = $crawler->filter('body')->attr('class');

        $this->adminLogin();
        $url = $urlGenerator->generate('sylius_admin_channel_update', ['id' => $channel->getId()]);
        $this->client->request('GET', $url);
        self::assertSelectorTextContains('h1', 'Edit channel');

        $crawler = $this->client->submitForm('Save changes', ['sylius_channel[themeName]' => 'sylius/bootstrap-theme',]);

        $crawler = $this->client->request('GET', '/');
        $bootstrapBodyClass = $crawler->filter('body')->attr('class');

        self::assertNotSame($semanticBodyClass, $bootstrapBodyClass);
        self::assertStringContainsString('pushable', $semanticBodyClass);
        self::assertStringContainsString('d-flex', $bootstrapBodyClass);
    }

    private function adminLogin(): void
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();

        $user = $manager->getRepository(AdminUser::class)->findOneBy(['username' => 'sylius']);
        $this->client->loginUser($user, 'admin');
    }
}
