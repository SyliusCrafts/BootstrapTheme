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

const SyliusApiToggle = (el) => {
  const element = el;
  const url = element.getAttribute('data-js-login-check-email-url');
  const toggleableElement = document.querySelector('[data-js-login="form"]');

  const debounce = (callback, duration) => {
    // eslint-disable-next-line
    let timeout = null;

    return (...args) => {
      timeout = setTimeout(() => {
        callback.apply(this, args);
        timeout = null;
      }, duration);
    }
  }

  element.addEventListener('input', debounce((e) => {
    toggleableElement.classList.add('d-none');

    if (e.target.value.length > 3) {
      axios.get(url, { params: { email: e.target.value } })
        .then(() => { toggleableElement.classList.remove('d-none'); })
        .catch(() => { toggleableElement.classList.add('d-none'); });
    }
  }, 1500));
};

export default SyliusApiToggle;
