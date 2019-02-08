/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import './sylius-api-login';
import './sylius-api-toggle';
import './sylius-add-to-cart';
import './sylius-address-book';
import './sylius-province-field';
import './sylius-remove-from-cart';
import './sylius-variant-images';
import './sylius-variants-prices';

import SyliusRating from './sylius-rating';
import SyliusToggle from './sylius-toggle';

$(document).ready(() => {
  // Add to cart
  $('[data-js-add-to-cart="form"]').addToCart();

  // Remove from cart
  $('[data-js-remove-from-cart-button]').removeFromCart();

  // Province field
  $(document).provinceField();

  // Address book
  $('[data-js-address-book="sylius-shipping-address"]').addressBook();
  $('[data-js-address-book="sylius-billing-address"]').addressBook();

  // Variant prices
  $(document).variantPrices();

  // Star rating
  document.querySelectorAll('[data-js-rating]').forEach((elem) => {
    new SyliusRating(elem, {
      onRate(value) {
        document.querySelector(`#sylius_product_review_rating_${value - 1}`).checked = true;
      },
    });
  });

  // API login from checkout
  $('[data-js-login]').apiLogin();

  // Toggle billing address on the checkout page
  document.querySelectorAll('[data-js-toggle]').forEach(elem => new SyliusToggle(elem));

  // Toggle login from checkout
  $('[data-js-login="email"]').apiLoginToggle();

  // Product images for variants
  $(document).variantImages();
});
