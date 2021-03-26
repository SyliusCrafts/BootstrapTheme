/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

import axios from 'axios';
import serialize from 'form-serialize';

const SyliusAddToCart = (el) => {
  const element = el;
  const url = element.getAttribute('action');
  const redirectUrl = element.getAttribute('data-redirect');
  const validationElement = element.querySelector('[data-js-add-to-cart="error"]');

  element.addEventListener('submit', (e) => {
    const request = axios.post(url, serialize(element));

    e.preventDefault();

    request.then(() => {
      validationElement.classList.add('d-none');
      window.location.href = redirectUrl;
    });

    request.catch((error) => {
      validationElement.classList.remove('d-none');
      let validationMessage = '';

      Object.entries(error.response.data).forEach(([, message]) => {
        validationMessage += message.errors;
      });

      validationElement.innerHTML = validationMessage;
      element.classList.remove('loading');
    });
  });
};

export default SyliusAddToCart;
