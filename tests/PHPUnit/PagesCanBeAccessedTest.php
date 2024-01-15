<?php

declare(strict_types=1);

namespace PHPUnit;

use App\Entity\Addressing\Address;
use App\Entity\Order\Order;
use App\Entity\User\ShopUser;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Tests\BootstrapTheme\AbstractTest;

/**
 * @internal
 */
final class PagesCanBeAccessedTest extends AbstractTest
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        $this->client = self::createClient();
        $this->useBootstrapTheme();
    }

    /**
     * @dataProvider guestPagesProvider
     */
    public function testGuestPagesCanBeAccessed(string $routeName, array $params): void
    {
        /** @var UrlGeneratorInterface $urlGenerator */
        $urlGenerator = $this->getContainer()->get(UrlGeneratorInterface::class);
        $channel = $this->getChannel();
        $params = \array_merge(['_locale' => $channel->getDefaultLocale()->getCode()], $params);

        $url = $urlGenerator->generate($routeName, $params);
        $this->client->request('GET', $url);

        self::assertResponseIsSuccessful();
    }

    /**
     * @dataProvider accountPagesProvider
     */
    public function testAccountPagesCanBeAccessed(string $routeName, array $params): void
    {
        $user = $this->shopUserLogin();

        /** @var UrlGeneratorInterface $urlGenerator */
        $urlGenerator = $this->getContainer()->get(UrlGeneratorInterface::class);
        $channel = $this->getChannel();

        $params = \array_merge([
            '_locale' => $channel->getDefaultLocale()->getCode(), // for all
            'number' => $this->getOrderNumber($user), // for sylius_shop_account_order_show
            'id' => $this->getAddressId($user), // for sylius_shop_account_address_book_update
        ], $params);

        $url = $urlGenerator->generate($routeName, $params);
        $this->client->request('GET', $url);

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Fashion Web Store');
    }

    private function guestPagesProvider(): \Generator
    {
        yield 'sylius_shop_homepage' => ['sylius_shop_homepage', []];
        yield 'sylius_shop_contact_request' => ['sylius_shop_contact_request', []];

        yield 'sylius_shop_login' => ['sylius_shop_login', []];
        yield 'sylius_shop_register' => ['sylius_shop_register', []];
        yield 'sylius_shop_request_password_reset_token' => ['sylius_shop_request_password_reset_token', []];

        yield 'sylius_shop_product_index' => ['sylius_shop_product_index', ['slug' => 'category']];
        yield 'sylius_shop_product_show' => ['sylius_shop_product_show', ['slug' => 'everyday-white-basic-t-shirt']];
        yield 'sylius_shop_product_review_index' => ['sylius_shop_product_review_index', ['slug' => 'everyday-white-basic-t-shirt']];
        yield 'sylius_shop_product_review_create' => ['sylius_shop_product_review_create', ['slug' => 'everyday-white-basic-t-shirt']];

        yield 'sylius_shop_cart_summary' => ['sylius_shop_cart_summary', []];
    }

    private function accountPagesProvider(): \Generator
    {
        yield 'sylius_shop_account_dashboard' => ['sylius_shop_account_dashboard', []];
        yield 'sylius_shop_account_profile_update' => ['sylius_shop_account_profile_update', []];
        yield 'sylius_shop_account_change_password' => ['sylius_shop_account_change_password', []];

        yield 'sylius_shop_account_order_index' => ['sylius_shop_account_order_index', []];
        yield 'sylius_shop_account_order_show' => ['sylius_shop_account_order_show', []];

        yield 'sylius_shop_account_address_book_index' => ['sylius_shop_account_address_book_index', []];
        yield 'sylius_shop_account_address_book_create' => ['sylius_shop_account_address_book_create', []];
        yield 'sylius_shop_account_address_book_update' => ['sylius_shop_account_address_book_update', []];
    }


    private function shopUserLogin(): ShopUser
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();

        $user = $manager->getRepository(ShopUser::class)->findOneBy([]);
        $this->client->loginUser($user, 'shop');

        return $user;
    }

    private function getOrderNumber(ShopUser $user): string
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();

        /** @var Order $order */
        $order = $manager->getRepository(Order::class)->findByCustomer($user->getCustomer())[0];

        return $order->getNumber();
    }

    private function getAddressId(ShopUser $user): int
    {
        /** @var EntityManager $manager */
        $manager = $this->getContainer()->get('doctrine')->getManager();
        $address = $manager->getRepository(Address::class)->findByCustomer($user->getCustomer())[0];

        return $address->getId();
    }
}
