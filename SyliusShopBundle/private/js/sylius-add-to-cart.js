/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$.fn.extend({
  addToCart() {
    const element = this;
    const url = $(element).attr('action');
    const redirectUrl = $(element).attr('data-redirect');
    const validationElement = $('[data-js-add-to-cart="error"]');

    element.on('submit', (e) => {
      e.preventDefault();

      const request = $.ajax({
        url,
        method: 'POST',
        data: element.serialize(),
      });

      request.done(() => {
        validationElement.addClass('d-none');
        window.location.href = redirectUrl;
      });

      request.fail((response) => {
        validationElement.removeClass('d-none');
        let validationMessage = '';

        Object.entries(response.responseJSON).forEach(([, message]) => {
          validationMessage += message;
        });

        validationElement.html(validationMessage);
        $(element).removeClass('loading');
      });
    });
  },
});
