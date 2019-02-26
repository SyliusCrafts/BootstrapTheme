/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$.fn.extend({
  removeFromCart() {
    this.each((index, elem) => {
      const element = $(elem);
      const redirectUrl = element.attr('data-js-remove-from-cart-redirect-url');
      const csrfToken = element.attr('data-js-remove-from-cart-csrf-token');
      const url = element.attr('data-js-remove-from-cart-api-url');

      element.on('click', (e) => {
        e.preventDefault();

        const request = $.ajax({
          url,
          method: 'DELETE',
          data: { _csrf_token: csrfToken },
        });

        request.done(() => {
          window.location.replace(redirectUrl);
        });
      });
    });
  },
});
