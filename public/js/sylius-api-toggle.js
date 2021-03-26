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
import throttle from 'lodash.throttle';

const SyliusApiToggle = (el) => {
  const element = el;
  const url = element.getAttribute('data-js-login-check-email-url');
  const toggleableElement = document.querySelector('[data-js-login="form"]');

  element.addEventListener('input', throttle((e) => {
    toggleableElement.classList.add('d-none');

    if (e.target.value.length > 3) {
      axios.get(url, { params: { email: e.target.value } })
        .then(() => { toggleableElement.classList.remove('d-none'); })
        .catch(() => { toggleableElement.classList.add('d-none'); });
    }
  }, 1500));
};

export default SyliusApiToggle;
