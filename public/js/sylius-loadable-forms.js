/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

const SyliusLoadableForms = function SyliusLoadableForms() {
  const overlay = document.querySelector('[data-js-loading-overlay]');

  document.querySelectorAll('form.loadable').forEach((form) => {
    form.appendChild(overlay.cloneNode(true));
    form.addEventListener('submit', () => {
      form.classList.add('loading');
    });
    window.addEventListener('pageshow', () => {
      if (event.persisted) {
        form.classList.remove('loading');
      }
    });
  });
};

export default SyliusLoadableForms;
