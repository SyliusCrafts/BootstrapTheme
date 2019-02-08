/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$.fn.extend({
  apiLogin() {
    const element = this;
    const passwordField = element.find('input[type="password"]');
    const emailField = element.find('input[type="email"]');
    const csrfTokenField = element.find('input[type="hidden"]');
    const signInButton = element.find('.btn');
    const validationField = element.find('.alert');
    const url = signInButton.attr('data-js-login-url');

    signInButton.on('click', (e) => {

      const request = $.ajax({
        url,
        method: 'POST',
        data: {
          _username: emailField.val(),
          _password: passwordField.val(),
          [csrfTokenField.attr('name')]: csrfTokenField.val(),
        },
      });

      request.done(() => {
        element.remove();
        window.location.reload();
      });

      request.fail((response) => {
        validationField.removeClass('d-none');
        validationField.html(response.responseJSON.message);
      });
    });
  },
});
