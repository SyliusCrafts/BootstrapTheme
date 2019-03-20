/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

import GLightbox from 'glightbox';
import axios from 'axios';

import './sylius-api-login';
import './sylius-api-toggle';
import './sylius-address-book';
import './sylius-province-field';
import './sylius-variant-images';
import './sylius-variants-prices';

import SyliusRating from './sylius-rating';
import SyliusToggle from './sylius-toggle';
import SyliusAddToCart from './sylius-add-to-cart';
import SyliusRemoveFromCart from './sylius-remove-from-cart';

// Global axios settings
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
axios.defaults.headers.post.accept = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

$(document).ready(() => {
  // Lightbox
  const glightbox = GLightbox({ selector: 'glightbox' });

  // Add to cart
  document.querySelectorAll('[data-js-add-to-cart="form"]')
    .forEach(el => SyliusAddToCart(el));

  // Remove from cart
  document.querySelectorAll('[data-js-remove-from-cart-button]')
    .forEach(el => SyliusRemoveFromCart(el));

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

  // Loadable forms
  $('form.loadable').append($('[data-js-loading-overlay]'));
  $('form.loadable button[type=submit]').on('click', (event) => {
    $(event.currentTarget).closest('form').addClass('loading');
  });
});
