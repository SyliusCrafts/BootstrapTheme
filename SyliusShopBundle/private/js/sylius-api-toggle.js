/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import throttle from 'lodash.throttle';

$.fn.extend({
  apiLoginToggle() {
    const element = $(this);
    const url = element.attr('data-js-login-check-email-url');
    const toggleableElement = $('[data-js-login="form"]');

    element.on('keyup', throttle((e) => {
      toggleableElement.addClass('d-none');

      if (e.target.value.length > 3) {
        const request = $.ajax({
          url,
          method: 'GET',
          data: { email: e.target.value },
        });

        request.done((response) => {
          toggleableElement.removeClass('d-none');
        });

        request.fail((response) => {
          toggleableElement.addClass('d-none');
        });
      }
    }, 1500));
  },
});
