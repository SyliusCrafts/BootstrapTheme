/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../assets/js/index.js":
/*!********************************!*\
  !*** ../../assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'glightbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _sylius_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sylius-rating */ "../../assets/js/sylius-rating.js");
/* harmony import */ var _sylius_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sylius-toggle */ "../../assets/js/sylius-toggle.js");
/* harmony import */ var _sylius_add_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sylius-add-to-cart */ "../../assets/js/sylius-add-to-cart.js");
/* harmony import */ var _sylius_remove_from_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sylius-remove-from-cart */ "../../assets/js/sylius-remove-from-cart.js");
/* harmony import */ var _sylius_api_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sylius-api-toggle */ "../../assets/js/sylius-api-toggle.js");
/* harmony import */ var _sylius_api_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sylius-api-login */ "../../assets/js/sylius-api-login.js");
/* harmony import */ var _sylius_variants_prices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sylius-variants-prices */ "../../assets/js/sylius-variants-prices.js");
/* harmony import */ var _sylius_variant_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sylius-variant-images */ "../../assets/js/sylius-variant-images.js");
/* harmony import */ var _sylius_province_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sylius-province-field */ "../../assets/js/sylius-province-field.js");
/* harmony import */ var _sylius_address_book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sylius-address-book */ "../../assets/js/sylius-address-book.js");
/* harmony import */ var _sylius_loadable_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sylius-loadable-forms */ "../../assets/js/sylius-loadable-forms.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */
















// Global axios settings
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).headers.post.accept = 'application/json, text/javascript, */*; q=0.01';
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).headers.post['X-Requested-With'] = 'XMLHttpRequest';
document.addEventListener('DOMContentLoaded', function () {
  // Lightbox
  var glightbox = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'glightbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    selector: '.glightbox'
  });

  // Add to cart
  document.querySelectorAll('[data-js-add-to-cart="form"]').forEach(function (el) {
    return (0,_sylius_add_to_cart__WEBPACK_IMPORTED_MODULE_3__["default"])(el);
  });

  // Remove from cart
  document.querySelectorAll('[data-js-remove-from-cart-button]').forEach(function (el) {
    return (0,_sylius_remove_from_cart__WEBPACK_IMPORTED_MODULE_4__["default"])(el);
  });

  // Province field
  (0,_sylius_province_field__WEBPACK_IMPORTED_MODULE_9__["default"])();

  // Address book
  var syliusShippingAddress = document.querySelector('[data-js-address-book="sylius-shipping-address"]');
  if (syliusShippingAddress && syliusShippingAddress.querySelector('.dropdown')) {
    (0,_sylius_address_book__WEBPACK_IMPORTED_MODULE_10__["default"])(syliusShippingAddress);
  }
  var syliusBillingAddress = document.querySelector('[data-js-address-book="sylius-billing-address"]');
  if (syliusBillingAddress && syliusBillingAddress.querySelector('.dropdown')) {
    (0,_sylius_address_book__WEBPACK_IMPORTED_MODULE_10__["default"])(syliusBillingAddress);
  }

  // Variant prices
  (0,_sylius_variants_prices__WEBPACK_IMPORTED_MODULE_7__["default"])();

  // Star rating
  document.querySelectorAll('[data-js-rating]').forEach(function (elem) {
    new _sylius_rating__WEBPACK_IMPORTED_MODULE_1__["default"](elem, {
      onRate: function onRate(value) {
        document.querySelector("#sylius_product_review_rating_".concat(value - 1)).checked = true;
      }
    });
  });

  // Toggle and login from checkout
  if (document.querySelector('[data-js-login]')) {
    (0,_sylius_api_toggle__WEBPACK_IMPORTED_MODULE_5__["default"])(document.querySelector('[data-js-login="email"]'));
    (0,_sylius_api_login__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('[data-js-login]'));
  }

  // Toggle billing address on the checkout page
  document.querySelectorAll('[data-js-toggle]').forEach(function (elem) {
    return new _sylius_toggle__WEBPACK_IMPORTED_MODULE_2__["default"](elem);
  });

  // Product images for variants
  if (document.querySelector('[data-variant-options], [data-variant-code]')) {
    new _sylius_variant_images__WEBPACK_IMPORTED_MODULE_8__["default"]();
  }

  // Loadable forms
  (0,_sylius_loadable_forms__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "../../assets/js/sylius-add-to-cart.js":
/*!*********************************************!*\
  !*** ../../assets/js/sylius-add-to-cart.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */


var SyliusAddToCart = function SyliusAddToCart(el) {
  var element = el;
  var url = element.getAttribute('action');
  var redirectUrl = element.getAttribute('data-redirect');
  var validationElement = element.querySelector('[data-js-add-to-cart="error"]');
  element.addEventListener('submit', function (e) {
    var request = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url, new FormData(element));
    e.preventDefault();
    request.then(function () {
      validationElement.classList.add('d-none');
      window.location.href = redirectUrl;
    });
    request["catch"](function (error) {
      validationElement.classList.remove('d-none');
      var validationMessage = '';
      Object.entries(error.response.data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          message = _ref2[1];
        validationMessage += message.errors;
      });
      validationElement.innerHTML = validationMessage;
      element.classList.remove('loading');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusAddToCart);

/***/ }),

/***/ "../../assets/js/sylius-address-book.js":
/*!**********************************************!*\
  !*** ../../assets/js/sylius-address-book.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

var parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, function (words) {
    return words[1].toUpperCase();
  });
};
var SyliusAddressBook = function SyliusAddressBook(el) {
  var element = el;
  var select = element.querySelector('.dropdown');
  var findByName = function findByName(name) {
    return element.querySelector("[name*=".concat(parseKey(name), "]"));
  };
  var changeEvent = new Event('change');
  select.querySelectorAll('.dropdown-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      var choice = e.currentTarget;
      var choiceData = {};
      _toConsumableArray(choice.attributes).forEach(function (attr) {
        if (attr.name.startsWith('data-')) {
          var camelCased = attr.name.replace('data-', '').replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          });
          choiceData[camelCased] = attr.value;
        }
      });
      var provinceCode = choiceData.provinceCode,
        provinceName = choiceData.provinceName;
      var provinceContainer = select.closest('[data-js-address-book]').querySelector('.province-container');
      element.querySelectorAll('input, select').forEach(function (input) {
        input.value = '';
      });
      Object.entries(choiceData).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          property = _ref2[0],
          value = _ref2[1];
        var field = findByName(property);
        if (property.indexOf('countryCode') !== -1) {
          field.value = value;
          field.dispatchEvent(changeEvent);
          var exists = setInterval(function () {
            var provinceCodeField = findByName('provinceCode');
            var provinceNameField = findByName('provinceName');
            if (!provinceContainer.hasAttribute('data-loading')) {
              if (provinceCodeField && provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                provinceCodeField.value = provinceCode;
                clearInterval(exists);
              } else if (provinceNameField && provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                provinceNameField.value = provinceName;
                clearInterval(exists);
              }
            }
          }, 100);
        } else if (field) {
          field.value = value;
        }
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusAddressBook);

/***/ }),

/***/ "../../assets/js/sylius-api-login.js":
/*!*******************************************!*\
  !*** ../../assets/js/sylius-api-login.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */


var SyliusApiLogin = function SyliusApiLogin(el) {
  var element = el;
  var signInButton = element.querySelector('.btn');
  var validationField = element.querySelector('.alert');
  var url = signInButton.getAttribute('data-js-login-url');
  var emailField = element.querySelector('input[type="email"]');
  var passwordField = element.querySelector('input[type="password"]');
  var csrfTokenField = element.querySelector('input[type="hidden"]');
  var csrfTokenName = csrfTokenField.getAttribute('name');
  signInButton.addEventListener('click', function (e) {
    e.preventDefault();
    var params = new URLSearchParams();
    params.append('_username', emailField.value);
    params.append('_password', passwordField.value);
    params.append([csrfTokenName], csrfTokenField.value);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url, params).then(function () {
      window.location.reload();
    })["catch"](function (error) {
      validationField.classList.remove('d-none');
      validationField.innerHTML = error.response.data.message;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusApiLogin);

/***/ }),

/***/ "../../assets/js/sylius-api-toggle.js":
/*!********************************************!*\
  !*** ../../assets/js/sylius-api-toggle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _this = undefined;
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */


var SyliusApiToggle = function SyliusApiToggle(el) {
  var element = el;
  var url = element.getAttribute('data-js-login-check-email-url');
  var toggleableElement = document.querySelector('[data-js-login="form"]');
  var debounce = function debounce(callback, duration) {
    var timeout = null;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      timeout = setTimeout(function () {
        callback.apply(_this, args);
        timeout = null;
      }, duration);
    };
  };
  element.addEventListener('input', debounce(function (e) {
    toggleableElement.classList.add('d-none');
    if (e.target.value.length > 3) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url, {
        params: {
          email: e.target.value
        }
      }).then(function () {
        toggleableElement.classList.remove('d-none');
      })["catch"](function () {
        toggleableElement.classList.add('d-none');
      });
    }
  }, 1500));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusApiToggle);

/***/ }),

/***/ "../../assets/js/sylius-loadable-forms.js":
/*!************************************************!*\
  !*** ../../assets/js/sylius-loadable-forms.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

var SyliusLoadableForms = function SyliusLoadableForms() {
  var overlay = document.querySelector('[data-js-loading-overlay]');
  document.querySelectorAll('form.loadable').forEach(function (form) {
    form.appendChild(overlay.cloneNode(true));
    form.addEventListener('submit', function () {
      form.classList.add('loading');
    });
    window.addEventListener('pageshow', function () {
      if (event.persisted) {
        form.classList.remove('loading');
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusLoadableForms);

/***/ }),

/***/ "../../assets/js/sylius-province-field.js":
/*!************************************************!*\
  !*** ../../assets/js/sylius-province-field.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */


var getProvinceInputValue = function getProvinceInputValue(valueSelector) {
  var val = valueSelector ? valueSelector.value : null;
  return !val || val == undefined ? '' : "value=\"".concat(val, "\"");
};
var SyliusProvinceField = function SyliusProvinceField() {
  var countrySelect = document.querySelectorAll('select[name$="[countryCode]"]');
  var changeEvent = new Event('change');
  countrySelect.forEach(function (countrySelectItem) {
    countrySelectItem.addEventListener('change', function (event) {
      var select = event.currentTarget;
      var provinceContainer = document.querySelector('[data-parent="' + select.id + '"]');
      var provinceSelectFieldName = select.getAttribute('name').replace('country', 'province');
      var provinceInputFieldName = select.getAttribute('name').replace('countryCode', 'provinceName');
      var provinceSelectFieldId = select.getAttribute('id').replace('country', 'province');
      var provinceInputFieldId = select.getAttribute('id').replace('countryCode', 'provinceName');
      if (select.value === '' || select.value == undefined) {
        provinceContainer.innerHTML = '';
        return;
      }
      provinceContainer.setAttribute('data-loading', '');
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(provinceContainer.getAttribute('data-url'), {
        params: {
          countryCode: select.value
        }
      }).then(function (response) {
        if (!response.data.content) {
          provinceContainer.removeAttribute('data-loading');
          provinceContainer.innerHTML = '';
        } else if (response.data.content.indexOf('select') !== -1) {
          var provinceSelectValue = getProvinceInputValue(provinceContainer.querySelector('select > option[selected$="selected"]'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', "name=\"".concat(provinceSelectFieldName, "\"").concat(provinceSelectValue)).replace('id="sylius_address_province"', "id=\"".concat(provinceSelectFieldId, "\"")).replace('option value="" selected="selected"', 'option value=""').replace("option ".concat(provinceSelectValue), "option ".concat(provinceSelectValue, "\" selected=\"selected\""));
          provinceContainer.querySelector('select').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        } else {
          var provinceInputValue = getProvinceInputValue(provinceContainer.querySelector('input'));
          provinceContainer.innerHTML = response.data.content.replace('name="sylius_address_province"', "name=\"".concat(provinceInputFieldName, "\"").concat(provinceInputValue)).replace('id="sylius_address_province"', "id=\"".concat(provinceInputFieldId, "\""));
          provinceContainer.querySelector('input').classList.add('form-control');
          provinceContainer.removeAttribute('data-loading');
        }
      });
    });
    if (countrySelectItem.value !== '') {
      countrySelectItem.dispatchEvent(changeEvent);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusProvinceField);

/***/ }),

/***/ "../../assets/js/sylius-rating.js":
/*!****************************************!*\
  !*** ../../assets/js/sylius-rating.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var SyliusRating = /*#__PURE__*/function () {
  function SyliusRating(container, settings) {
    _classCallCheck(this, SyliusRating);
    this.container = container;
    this.settings = settings;
    if (this.container) {
      this.ratingMax = Number(this.container.dataset.jsRatingMax) || 5;
      this.ratingAverage = Number(this.container.dataset.jsRatingAverage) || 0;
      this.viewOnly = this.container.dataset.jsRatingViewonly !== 'false';
      this.btnOnElement = this.container.querySelector('[data-js-rating-btn-on]');
      this.btnOffElement = this.container.querySelector('[data-js-rating-btn-off]');
      this.render();
    }
  }
  _createClass(SyliusRating, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = '';
      var renderElement = document.createElement('div');
      for (var i = 1; i <= this.ratingMax; i++) {
        var element = document.createElement('span');
        element.dataset.jsRatingValue = i;
        if (this.viewOnly === false) {
          element.addEventListener('click', this.changeInputValue.bind(this));
        }
        if (i <= this.ratingAverage) {
          element.innerHTML = this.btnOnElement.innerHTML;
        } else {
          element.innerHTML = this.btnOffElement.innerHTML;
        }
        renderElement.appendChild(element);
      }
      this.container.appendChild(renderElement);
    }
  }, {
    key: "changeInputValue",
    value: function changeInputValue(e) {
      var value = Number(e.currentTarget.dataset.jsRatingValue);
      this.ratingAverage = value;
      this.container.dataset.jsRatingAverage = value;
      this.render();
      this.settings.onRate(value);
    }
  }]);
  return SyliusRating;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusRating);

/***/ }),

/***/ "../../assets/js/sylius-remove-from-cart.js":
/*!**************************************************!*\
  !*** ../../assets/js/sylius-remove-from-cart.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */


var SyliusRemoveFromCart = function SyliusRemoveFromCart(el) {
  var element = el;
  var redirectUrl = element.getAttribute('data-js-remove-from-cart-redirect-url');
  var csrfToken = element.getAttribute('data-js-remove-from-cart-csrf-token');
  var url = element.getAttribute('data-js-remove-from-cart-api-url');
  element.addEventListener('click', function (e) {
    e.preventDefault();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url, {
      data: {
        _csrf_token: csrfToken
      }
    }).then(function () {
      window.location.replace(redirectUrl);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusRemoveFromCart);

/***/ }),

/***/ "../../assets/js/sylius-toggle.js":
/*!****************************************!*\
  !*** ../../assets/js/sylius-toggle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var SyliusToggle = /*#__PURE__*/function () {
  function SyliusToggle(trigger) {
    _classCallCheck(this, SyliusToggle);
    this.trigger = trigger;
    this.trigger.addEventListener('change', this.toggle.bind(this));
    this.toggleElement = document.querySelector(this.trigger.dataset.jsToggle);
    this.toggle();
  }
  _createClass(SyliusToggle, [{
    key: "toggle",
    value: function toggle() {
      if (this.trigger.checked) {
        this.toggleElement.style.display = '';
      } else {
        this.toggleElement.style.display = 'none';
      }
    }
  }]);
  return SyliusToggle;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusToggle);

/***/ }),

/***/ "../../assets/js/sylius-variant-images.js":
/*!************************************************!*\
  !*** ../../assets/js/sylius-variant-images.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/* eslint-env browser */
var SyliusVariantImages = /*#__PURE__*/function () {
  function SyliusVariantImages() {
    var _this = this;
    _classCallCheck(this, SyliusVariantImages);
    this.mainImageLink = document.querySelector('[data-js-product-image]');
    this.mainImage = this.mainImageLink.querySelector('img');
    this.defaultImageLink = this.mainImageLink.getAttribute('href');
    this.defaultImageSrc = this.mainImage.getAttribute('src');
    document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(function (item) {
      item.addEventListener('change', function () {
        return _this.setImage();
      });
    });
    this.setImage();
  }
  _createClass(SyliusVariantImages, [{
    key: "getActiveVariant",
    value: function getActiveVariant() {
      var items = document.querySelectorAll("\n      input[name=\"sylius_add_to_cart[cartItem][variant]\"]:checked, \n      select[name*=\"sylius_add_to_cart[cartItem][variant]\"] option:checked\n    ");
      return _toConsumableArray(items).map(function (el) {
        return el.value;
      }).join(' ');
    }
  }, {
    key: "getActiveImageSrc",
    value: function getActiveImageSrc(variant) {
      var imageLink = this.defaultImageLink;
      var imageSrc = this.defaultImageSrc;
      var item = document.querySelector("\n      .sylius-image-variants [data-variant-code=\"".concat(variant, "\"], \n      .sylius-image-variants [data-variant-options=\"").concat(variant, " \"]\n    "));
      if (item) {
        var parent = item.closest('[data-js-product-thumbnail]');
        imageLink = parent.querySelector('a').getAttribute('href');
        imageSrc = parent.querySelector('img').getAttribute('data-large-thumbnail');
      }
      return {
        imageLink: imageLink,
        imageSrc: imageSrc
      };
    }
  }, {
    key: "setImage",
    value: function setImage() {
      var img = this.getActiveImageSrc(this.getActiveVariant());
      this.mainImageLink.setAttribute('href', img.imageLink);
      this.mainImage.setAttribute('src', img.imageSrc);
    }
  }]);
  return SyliusVariantImages;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusVariantImages);

/***/ }),

/***/ "../../assets/js/sylius-variants-prices.js":
/*!*************************************************!*\
  !*** ../../assets/js/sylius-variants-prices.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* eslint-env browser */

var handleProductOptionsChange = function handleProductOptionsChange() {
  document.querySelectorAll('[name*="sylius_add_to_cart[cartItem][variant]"]').forEach(function (item) {
    item.addEventListener('change', function () {
      var selector = '';
      document.querySelectorAll('#sylius-product-adding-to-cart select[data-option]').forEach(function (element) {
        var select = element;
        var option = select[select.selectedIndex].value;
        selector += "[data-".concat(select.getAttribute('data-option'), "=\"").concat(option, "\"]");
      });
      var priceElement = document.querySelector('#sylius-variants-pricing').querySelector(selector);
      var price = '';
      if (priceElement !== null) {
        price = priceElement.getAttribute('data-value');
      }
      if (price !== '') {
        document.querySelector('[data-js-product-price]').innerHTML = price;
        document.querySelector('button[type=submit]').removeAttribute('disabled');
      } else {
        document.querySelector('[data-js-product-price]').innerHTML = document.querySelector('#sylius-variants-pricing').getAttribute('data-unavailable-text');
        document.querySelector('button[type=submit]').setAttribute('disabled', 'disabled');
      }
    });
  });
};
var handleProductVariantsChange = function handleProductVariantsChange() {
  document.querySelectorAll('[name="sylius_add_to_cart[cartItem][variant]"]').forEach(function (item) {
    item.addEventListener('change', function (e) {
      var priceElement = item.closest('tr').querySelector('[data-js-product-variant-price]');
      var price = priceElement.innerHTML;
      document.querySelector('[data-js-product-price]').innerHTML = price;
      if (priceElement.hasAttribute('data-original-price')) {
        document.querySelector('#product-original-price').innerHTML = "<del>".concat(priceElement.dataset.originalPrice, "</del>");
      } else {
        document.querySelector('#product-original-price').innerHTML = '';
      }
    });
  });
};
var SyliusVariantsPrices = function SyliusVariantsPrices() {
  var syliusVariantsPricing = document.getElementById('sylius-variants-pricing') || null;
  var syliusProductVariants = document.getElementById('sylius-product-variants') || null;
  if (syliusVariantsPricing) {
    handleProductOptionsChange();
  } else if (syliusProductVariants) {
    handleProductVariantsChange();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyliusVariantsPrices);

/***/ }),

/***/ "../../assets/scss/main.scss":
/*!***********************************!*\
  !*** ../../assets/scss/main.scss ***!
  \***********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nCan't find stylesheet to import.\n  ╷\n1 │ @import \"~bootstrap/scss/functions\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  ../../assets/scss/sass-utils/main.scss 1:9  @import\n  ../../assets/scss/main.scss 8:9             root stylesheet\n    at tryRunOrWebpackError (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5067:12)\n    at __webpack_require__ (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5024:18)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5095:20\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5002:43\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3463:5)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4967:16\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3463:5)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4935:15\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3527:9)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4882:8\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:3361:32\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:3361:11\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:91:34\n    at Array.<anonymous> (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:91:19\n    at Hook.eval [as callAsync] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:3331:9)\n    at codeGen (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4870:11)\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3463:5)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4900:14\n    at processQueue (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nCan't find stylesheet to import.\n  ╷\n1 │ @import \"~bootstrap/scss/functions\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  ../../assets/scss/sass-utils/main.scss 1:9  @import\n  ../../assets/scss/main.scss 8:9             root stylesheet\n    at Object.<anonymous> (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/Users/radnok/Developer/8lines/SyliusBootstrapTheme/assets/scss/main.scss:1:7)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/Hook.js:14:14)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5069:39\n    at tryRunOrWebpackError (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5067:12)\n    at __webpack_require__ (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5024:18)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5095:20\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/Hook.js:18:14)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:5002:43\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3463:5)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4967:16\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3463:5)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4935:15\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3527:9)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4882:8\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:3361:32\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:3361:11\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:91:34\n    at Array.<anonymous> (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:91:19\n    at Hook.eval [as callAsync] (eval at create (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:3331:9)\n    at codeGen (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4870:11)\n    at symbolIterator (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/neo-async/async.js:3463:5)\n    at /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/Compilation.js:4900:14\n    at processQueue (/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\n\nGenerated code for /Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/Users/radnok/Developer/8lines/SyliusBootstrapTheme/tests/Application/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/Users/radnok/Developer/8lines/SyliusBootstrapTheme/assets/scss/main.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nCan't find stylesheet to import.\\n  ╷\\n1 │ @import \\\"~bootstrap/scss/functions\\\";\\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\\n  ╵\\n  ../../assets/scss/sass-utils/main.scss 1:9  @import\\n  ../../assets/scss/main.scss 8:9             root stylesheet\");");

/***/ }),

/***/ "../../assets/media/sylius-logo.png":
/*!******************************************!*\
  !*** ../../assets/media/sylius-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/sylius-logo.72a9465e.png";

/***/ }),

/***/ "../../assets/media/sylius-plus.png":
/*!******************************************!*\
  !*** ../../assets/media/sylius-plus.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/sylius-plus.fff4fe72.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/bootstrap-theme/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ../../assets/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ "../../assets/js/index.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ "../../assets/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_sylius_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/sylius-logo.png */ "../../assets/media/sylius-logo.png");
/* harmony import */ var _media_sylius_plus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/sylius-plus.png */ "../../assets/media/sylius-plus.png");


// Main scripts file


// Main styles file


// Images


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNbkQsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBQSxFQUFTO0VBQ2pDLElBQU00TCxxQkFBcUIsR0FBR25MLFFBQVEsQ0FBQ29MLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLElBQUk7RUFDeEYsSUFBTUMscUJBQXFCLEdBQUdyTCxRQUFRLENBQUNvTCxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBSSxJQUFJO0VBRXhGLElBQUlELHFCQUFxQixFQUFFO0lBQ3pCUCwwQkFBMEIsQ0FBQyxDQUFDO0VBQzlCLENBQUMsTUFBTSxJQUFJUyxxQkFBcUIsRUFBRTtJQUNoQ0osMkJBQTJCLENBQUMsQ0FBQztFQUMvQjtBQUNGLENBQUM7QUFFRCxpRUFBZTFMLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRW5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUI7O0FBRW5CO0FBQ29COztBQUVwQjtBQUMwQjs7QUFFMUI7QUFDaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9hc3NldHMvanMvc3lsaXVzLWFkZC10by1jYXJ0LmpzIiwid2VicGFjazovLy8uLi8uLi9hc3NldHMvanMvc3lsaXVzLWFkZHJlc3MtYm9vay5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYXNzZXRzL2pzL3N5bGl1cy1hcGktbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Fzc2V0cy9qcy9zeWxpdXMtYXBpLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYXNzZXRzL2pzL3N5bGl1cy1sb2FkYWJsZS1mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYXNzZXRzL2pzL3N5bGl1cy1wcm92aW5jZS1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYXNzZXRzL2pzL3N5bGl1cy1yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Fzc2V0cy9qcy9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYXNzZXRzL2pzL3N5bGl1cy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Fzc2V0cy9qcy9zeWxpdXMtdmFyaWFudHMtcHJpY2VzLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Fzc2V0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IEdMaWdodGJveCBmcm9tICdnbGlnaHRib3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFN5bGl1c1JhdGluZyBmcm9tICcuL3N5bGl1cy1yYXRpbmcnO1xuaW1wb3J0IFN5bGl1c1RvZ2dsZSBmcm9tICcuL3N5bGl1cy10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FkZFRvQ2FydCBmcm9tICcuL3N5bGl1cy1hZGQtdG8tY2FydCc7XG5pbXBvcnQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi9zeWxpdXMtcmVtb3ZlLWZyb20tY2FydCc7XG5pbXBvcnQgU3lsaXVzQXBpVG9nZ2xlIGZyb20gJy4vc3lsaXVzLWFwaS10b2dnbGUnO1xuaW1wb3J0IFN5bGl1c0FwaUxvZ2luIGZyb20gJy4vc3lsaXVzLWFwaS1sb2dpbic7XG5pbXBvcnQgU3lsaXVzVmFyaWFudHNQcmljZXMgZnJvbSAnLi9zeWxpdXMtdmFyaWFudHMtcHJpY2VzJztcbmltcG9ydCBTeWxpdXNWYXJpYW50SW1hZ2VzIGZyb20gJy4vc3lsaXVzLXZhcmlhbnQtaW1hZ2VzJztcbmltcG9ydCBTeWxpdXNQcm92aW5jZUZpZWxkIGZyb20gJy4vc3lsaXVzLXByb3ZpbmNlLWZpZWxkJztcbmltcG9ydCBTeWxpdXNBZGRyZXNzQm9vayBmcm9tICcuL3N5bGl1cy1hZGRyZXNzLWJvb2snO1xuaW1wb3J0IFN5bGl1c0xvYWRhYmxlRm9ybXMgZnJvbSAnLi9zeWxpdXMtbG9hZGFibGUtZm9ybXMnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBHbG9iYWwgYXhpb3Mgc2V0dGluZ3NcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdC5hY2NlcHQgPSAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIExpZ2h0Ym94XG4gIGNvbnN0IGdsaWdodGJveCA9IEdMaWdodGJveCh7IHNlbGVjdG9yOiAnLmdsaWdodGJveCcgfSk7XG5cbiAgLy8gQWRkIHRvIGNhcnRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtYWRkLXRvLWNhcnQ9XCJmb3JtXCJdJylcbiAgICAuZm9yRWFjaChlbCA9PiBTeWxpdXNBZGRUb0NhcnQoZWwpKTtcblxuICAvLyBSZW1vdmUgZnJvbSBjYXJ0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtYnV0dG9uXScpXG4gICAgLmZvckVhY2goZWwgPT4gU3lsaXVzUmVtb3ZlRnJvbUNhcnQoZWwpKTtcblxuICAvLyBQcm92aW5jZSBmaWVsZFxuICBTeWxpdXNQcm92aW5jZUZpZWxkKCk7XG5cbiAgLy8gQWRkcmVzcyBib29rXG4gIGNvbnN0IHN5bGl1c1NoaXBwaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1zaGlwcGluZy1hZGRyZXNzXCJdJyk7XG4gIGlmIChzeWxpdXNTaGlwcGluZ0FkZHJlc3MgJiYgc3lsaXVzU2hpcHBpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzU2hpcHBpbmdBZGRyZXNzKTtcbiAgfVxuICBjb25zdCBzeWxpdXNCaWxsaW5nQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWFkZHJlc3MtYm9vaz1cInN5bGl1cy1iaWxsaW5nLWFkZHJlc3NcIl0nKTtcbiAgaWYgKHN5bGl1c0JpbGxpbmdBZGRyZXNzICYmIHN5bGl1c0JpbGxpbmdBZGRyZXNzLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpKSB7XG4gICAgU3lsaXVzQWRkcmVzc0Jvb2soc3lsaXVzQmlsbGluZ0FkZHJlc3MpO1xuICB9XG5cbiAgLy8gVmFyaWFudCBwcmljZXNcbiAgU3lsaXVzVmFyaWFudHNQcmljZXMoKTtcblxuICAvLyBTdGFyIHJhdGluZ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1yYXRpbmddJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIG5ldyBTeWxpdXNSYXRpbmcoZWxlbSwge1xuICAgICAgb25SYXRlKHZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzeWxpdXNfcHJvZHVjdF9yZXZpZXdfcmF0aW5nXyR7dmFsdWUgLSAxfWApLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlIGFuZCBsb2dpbiBmcm9tIGNoZWNrb3V0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbl0nKSkge1xuICAgIFN5bGl1c0FwaVRvZ2dsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2dpbj1cImVtYWlsXCJdJykpO1xuICAgIFN5bGl1c0FwaUxvZ2luKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxvZ2luXScpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanMtdG9nZ2xlXScpLmZvckVhY2goZWxlbSA9PiBuZXcgU3lsaXVzVG9nZ2xlKGVsZW0pKTtcblxuICAvLyBQcm9kdWN0IGltYWdlcyBmb3IgdmFyaWFudHNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXZhcmlhbnQtb3B0aW9uc10sIFtkYXRhLXZhcmlhbnQtY29kZV0nKSkgeyBuZXcgU3lsaXVzVmFyaWFudEltYWdlcygpOyB9XG5cbiAgLy8gTG9hZGFibGUgZm9ybXNcbiAgU3lsaXVzTG9hZGFibGVGb3JtcygpO1xufSk7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQWRkVG9DYXJ0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZGlyZWN0Jyk7XG4gIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1hZGQtdG8tY2FydD1cImVycm9yXCJdJyk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KHVybCwgbmV3IEZvcm1EYXRhKGVsZW1lbnQpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlcXVlc3QudGhlbigoKSA9PiB7XG4gICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICBsZXQgdmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3IucmVzcG9uc2UuZGF0YSkuZm9yRWFjaCgoWywgbWVzc2FnZV0pID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgKz0gbWVzc2FnZS5lcnJvcnM7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBZGRUb0NhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcGFyc2VLZXkgPSBmdW5jdGlvbiBwYXJzZUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG5jb25zdCBTeWxpdXNBZGRyZXNzQm9vayA9IGZ1bmN0aW9uIFN5bGl1c0FkZHJlc3NCb29rKGVsKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgY29uc3QgZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lKj0ke3BhcnNlS2V5KG5hbWUpfV1gKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXG4gIHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNob2ljZURhdGEgPSB7fTtcblxuICAgICAgWy4uLmNob2ljZS5hdHRyaWJ1dGVzXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZWQgPSBhdHRyLm5hbWUucmVwbGFjZSgnZGF0YS0nLCAnJykucmVwbGFjZSgvLShbYS16XSkvZywgZyA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgIGNob2ljZURhdGFbY2FtZWxDYXNlZF0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlRGF0YTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlQ29udGFpbmVyID0gc2VsZWN0LmNsb3Nlc3QoJ1tkYXRhLWpzLWFkZHJlc3MtYm9va10nKS5xdWVyeVNlbGVjdG9yKCcucHJvdmluY2UtY29udGFpbmVyJyk7XG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCcpLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlRGF0YSkuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaW5kQnlOYW1lKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignY291bnRyeUNvZGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG4gICAgICAgICAgY29uc3QgZXhpc3RzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlTmFtZUZpZWxkID0gZmluZEJ5TmFtZSgncHJvdmluY2VOYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvdmluY2VDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICBpZiAocHJvdmluY2VDb2RlRmllbGQgJiYgcHJvdmluY2VDb2RlRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZUNvZGUgIT09ICcnIHx8IHByb3ZpbmNlQ29kZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsdWUgPSBwcm92aW5jZUNvZGU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmluY2VOYW1lRmllbGQgJiYgcHJvdmluY2VOYW1lRmllbGQubGVuZ3RoICE9PSAwICYmIChwcm92aW5jZU5hbWUgIT09ICcnIHx8IHByb3ZpbmNlTmFtZSAhPSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvdmluY2VOYW1lRmllbGQudmFsdWUgPSBwcm92aW5jZU5hbWU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQWRkcmVzc0Jvb2s7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpTG9naW4gPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCBzaWduSW5CdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbiAgY29uc3QgdmFsaWRhdGlvbkZpZWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKTtcbiAgY29uc3QgdXJsID0gc2lnbkluQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1sb2dpbi11cmwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5GaWVsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpO1xuICBjb25zdCBjc3JmVG9rZW5OYW1lID0gY3NyZlRva2VuRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3VzZXJuYW1lJywgZW1haWxGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnX3Bhc3N3b3JkJywgcGFzc3dvcmRGaWVsZC52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZChbY3NyZlRva2VuTmFtZV0sIGNzcmZUb2tlbkZpZWxkLnZhbHVlKTtcblxuICAgIGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbkZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB2YWxpZGF0aW9uRmllbGQuaW5uZXJIVE1MID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzQXBpTG9naW47XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzQXBpVG9nZ2xlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgY29uc3QgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtbG9naW4tY2hlY2stZW1haWwtdXJsJyk7XG4gIGNvbnN0IHRvZ2dsZWFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtbG9naW49XCJmb3JtXCJdJyk7XG5cbiAgY29uc3QgZGVib3VuY2UgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGVib3VuY2UoKGUpID0+IHtcbiAgICB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAzKSB7XG4gICAgICBheGlvcy5nZXQodXJsLCB7IHBhcmFtczogeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSB9KVxuICAgICAgICAudGhlbigoKSA9PiB7IHRvZ2dsZWFibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpOyB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB0b2dnbGVhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTsgfSk7XG4gICAgfVxuICB9LCAxNTAwKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNBcGlUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgU3lsaXVzTG9hZGFibGVGb3JtcyA9IGZ1bmN0aW9uIFN5bGl1c0xvYWRhYmxlRm9ybXMoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1sb2FkaW5nLW92ZXJsYXldJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5sb2FkYWJsZScpLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXkuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsICgpID0+IHtcbiAgICAgIGlmIChldmVudC5wZXJzaXN0ZWQpIHtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzTG9hZGFibGVGb3JtcztcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBnZXRQcm92aW5jZUlucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm92aW5jZUlucHV0VmFsdWUodmFsdWVTZWxlY3Rvcikge1xuICBjb25zdCB2YWwgPSB2YWx1ZVNlbGVjdG9yID8gdmFsdWVTZWxlY3Rvci52YWx1ZSA6IG51bGw7XG4gIHJldHVybiAhdmFsIHx8IHZhbCA9PSB1bmRlZmluZWQgPyAnJyA6IGB2YWx1ZT1cIiR7dmFsfVwiYDtcbn07XG5cblxuY29uc3QgU3lsaXVzUHJvdmluY2VGaWVsZCA9IGZ1bmN0aW9uIFN5bGl1c1Byb3ZpbmNlRmllbGQoKSB7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZSQ9XCJbY291bnRyeUNvZGVdXCJdJyk7XG4gIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblxuICBjb3VudHJ5U2VsZWN0LmZvckVhY2goKGNvdW50cnlTZWxlY3RJdGVtKSA9PiB7XG4gICAgY291bnRyeVNlbGVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcHJvdmluY2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wYXJlbnQ9XCInICsgc2VsZWN0LmlkICsgJ1wiXScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkTmFtZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKCdjb3VudHJ5JywgJ3Byb3ZpbmNlJyk7XG4gICAgICBjb25zdCBwcm92aW5jZUlucHV0RmllbGROYW1lID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnbmFtZScpLnJlcGxhY2UoJ2NvdW50cnlDb2RlJywgJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICBjb25zdCBwcm92aW5jZVNlbGVjdEZpZWxkSWQgPSBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2NvdW50cnknLCAncHJvdmluY2UnKTtcbiAgICAgIGNvbnN0IHByb3ZpbmNlSW5wdXRGaWVsZElkID0gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdjb3VudHJ5Q29kZScsICdwcm92aW5jZU5hbWUnKTtcblxuICAgICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJycgfHwgc2VsZWN0LnZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcm92aW5jZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICcnKTtcblxuICAgICAgYXhpb3MuZ2V0KHByb3ZpbmNlQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgeyBwYXJhbXM6IHsgY291bnRyeUNvZGU6IHNlbGVjdC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmNvbnRlbnQuaW5kZXhPZignc2VsZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZVNlbGVjdFZhbHVlID0gZ2V0UHJvdmluY2VJbnB1dFZhbHVlKChcbiAgICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0ID4gb3B0aW9uW3NlbGVjdGVkJD1cInNlbGVjdGVkXCJdJylcbiAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ25hbWU9XCJzeWxpdXNfYWRkcmVzc19wcm92aW5jZVwiJywgYG5hbWU9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGROYW1lfVwiJHtwcm92aW5jZVNlbGVjdFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlU2VsZWN0RmllbGRJZH1cImApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCInLCAnb3B0aW9uIHZhbHVlPVwiXCInKVxuICAgICAgICAgICAgICAucmVwbGFjZShgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1gLCBgb3B0aW9uICR7cHJvdmluY2VTZWxlY3RWYWx1ZX1cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCJgKTtcblxuICAgICAgICAgICAgcHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZUlucHV0VmFsdWUgPSBnZXRQcm92aW5jZUlucHV0VmFsdWUocHJvdmluY2VDb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKSk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmRhdGEuY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgnbmFtZT1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgbmFtZT1cIiR7cHJvdmluY2VJbnB1dEZpZWxkTmFtZX1cIiR7cHJvdmluY2VJbnB1dFZhbHVlfWApXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdpZD1cInN5bGl1c19hZGRyZXNzX3Byb3ZpbmNlXCInLCBgaWQ9XCIke3Byb3ZpbmNlSW5wdXRGaWVsZElkfVwiYCk7XG5cbiAgICAgICAgICAgIHByb3ZpbmNlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgICAgICAgICBwcm92aW5jZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY291bnRyeVNlbGVjdEl0ZW0udmFsdWUgIT09ICcnKSB7XG4gICAgICBjb3VudHJ5U2VsZWN0SXRlbS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUHJvdmluY2VGaWVsZDtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgU3lsaXVzIHBhY2thZ2UuXG4gKlxuICogKGMpIFBhd2XFgiBKxJlkcnplamV3c2tpXG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmNsYXNzIFN5bGl1c1JhdGluZyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmF0aW5nTWF4ID0gTnVtYmVyKHRoaXMuY29udGFpbmVyLmRhdGFzZXQuanNSYXRpbmdNYXgpIHx8IDU7XG4gICAgICB0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBOdW1iZXIodGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UpIHx8IDA7XG4gICAgICB0aGlzLnZpZXdPbmx5ID0gdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ1ZpZXdvbmx5ICE9PSAnZmFsc2UnO1xuICAgICAgdGhpcy5idG5PbkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1yYXRpbmctYnRuLW9uXScpO1xuICAgICAgdGhpcy5idG5PZmZFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcmF0aW5nLWJ0bi1vZmZdJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucmF0aW5nTWF4OyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSA9IGk7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPbmx5ID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VJbnB1dFZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8PSB0aGlzLnJhdGluZ0F2ZXJhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmJ0bk9uRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuYnRuT2ZmRWxlbWVudC5pbm5lckhUTUw7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVsZW1lbnQpO1xuICB9XG5cbiAgY2hhbmdlSW5wdXRWYWx1ZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuanNSYXRpbmdWYWx1ZSk7XG4gICAgdGhpcy5yYXRpbmdBdmVyYWdlID0gdmFsdWU7XG4gICAgdGhpcy5jb250YWluZXIuZGF0YXNldC5qc1JhdGluZ0F2ZXJhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuc2V0dGluZ3Mub25SYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNSYXRpbmc7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgU3lsaXVzUmVtb3ZlRnJvbUNhcnQgPSAoZWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGVsO1xuICBjb25zdCByZWRpcmVjdFVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtcmVkaXJlY3QtdXJsJyk7XG4gIGNvbnN0IGNzcmZUb2tlbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLXJlbW92ZS1mcm9tLWNhcnQtY3NyZi10b2tlbicpO1xuICBjb25zdCB1cmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1yZW1vdmUtZnJvbS1jYXJ0LWFwaS11cmwnKTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5kZWxldGUodXJsLCB7IGRhdGE6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9IH0pXG4gICAgICAudGhlbigoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0VXJsKTsgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3lsaXVzUmVtb3ZlRnJvbUNhcnQ7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5jbGFzcyBTeWxpdXNUb2dnbGUge1xuICBjb25zdHJ1Y3Rvcih0cmlnZ2VyKSB7XG4gICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRyaWdnZXIuZGF0YXNldC5qc1RvZ2dsZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNUb2dnbGU7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY2xhc3MgU3lsaXVzVmFyaWFudEltYWdlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbkltYWdlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtaW1hZ2VdJyk7XG4gICAgdGhpcy5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZUxpbmsucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgdGhpcy5kZWZhdWx0SW1hZ2VMaW5rID0gdGhpcy5tYWluSW1hZ2VMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIHRoaXMuZGVmYXVsdEltYWdlU3JjID0gdGhpcy5tYWluSW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0SW1hZ2UoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICBpbnB1dFtuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXTpjaGVja2VkLCBcbiAgICAgIHNlbGVjdFtuYW1lKj1cInN5bGl1c19hZGRfdG9fY2FydFtjYXJ0SXRlbV1bdmFyaWFudF1cIl0gb3B0aW9uOmNoZWNrZWRcbiAgICBgKTtcblxuICAgIHJldHVybiBbLi4uaXRlbXNdLm1hcChlbCA9PiBlbC52YWx1ZSkuam9pbignICcpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW1hZ2VTcmModmFyaWFudCkge1xuICAgIGxldCBpbWFnZUxpbmsgPSB0aGlzLmRlZmF1bHRJbWFnZUxpbms7XG4gICAgbGV0IGltYWdlU3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VTcmM7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFxuICAgICAgLnN5bGl1cy1pbWFnZS12YXJpYW50cyBbZGF0YS12YXJpYW50LWNvZGU9XCIke3ZhcmlhbnR9XCJdLCBcbiAgICAgIC5zeWxpdXMtaW1hZ2UtdmFyaWFudHMgW2RhdGEtdmFyaWFudC1vcHRpb25zPVwiJHt2YXJpYW50fSBcIl1cbiAgICBgKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJ1tkYXRhLWpzLXByb2R1Y3QtdGh1bWJuYWlsXScpO1xuICAgICAgaW1hZ2VMaW5rID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGltYWdlU3JjID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXJnZS10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbWFnZUxpbmssIGltYWdlU3JjIH07XG4gIH1cblxuICBzZXRJbWFnZSgpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmdldEFjdGl2ZUltYWdlU3JjKHRoaXMuZ2V0QWN0aXZlVmFyaWFudCgpKTtcbiAgICB0aGlzLm1haW5JbWFnZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW1nLmltYWdlTGluayk7XG4gICAgdGhpcy5tYWluSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuaW1hZ2VTcmMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bGl1c1ZhcmlhbnRJbWFnZXM7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIFN5bGl1cyBwYWNrYWdlLlxuICpcbiAqIChjKSBQYXdlxYIgSsSZZHJ6ZWpld3NraVxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWUqPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RvciA9ICcnO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3lsaXVzLXByb2R1Y3QtYWRkaW5nLXRvLWNhcnQgc2VsZWN0W2RhdGEtb3B0aW9uXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0W3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgICAgc2VsZWN0b3IgKz0gYFtkYXRhLSR7c2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKX09XCIke29wdGlvbn1cIl1gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzeWxpdXMtdmFyaWFudHMtcHJpY2luZycpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgbGV0IHByaWNlID0gJyc7XG5cbiAgICAgIGlmIChwcmljZUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJpY2UgPSBwcmljZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmljZSAhPT0gJycpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC1wcmljZV0nKS5pbm5lckhUTUwgPSBwcmljZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXByb2R1Y3QtcHJpY2VdJykuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N5bGl1cy12YXJpYW50cy1wcmljaW5nJykuZ2V0QXR0cmlidXRlKCdkYXRhLXVuYXZhaWxhYmxlLXRleHQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwic3lsaXVzX2FkZF90b19jYXJ0W2NhcnRJdGVtXVt2YXJpYW50XVwiXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBpdGVtLmNsb3Nlc3QoJ3RyJykucXVlcnlTZWxlY3RvcignW2RhdGEtanMtcHJvZHVjdC12YXJpYW50LXByaWNlXScpO1xuICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1wcm9kdWN0LXByaWNlXScpLmlubmVySFRNTCA9IHByaWNlO1xuXG4gICAgICBpZiAocHJpY2VFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC1wcmljZScpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LW9yaWdpbmFsLXByaWNlJykuaW5uZXJIVE1MID0gYDxkZWw+JHtwcmljZUVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbFByaWNlfTwvZGVsPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1vcmlnaW5hbC1wcmljZScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFN5bGl1c1ZhcmlhbnRzUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBzeWxpdXNWYXJpYW50c1ByaWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXZhcmlhbnRzLXByaWNpbmcnKSB8fCBudWxsO1xuICBjb25zdCBzeWxpdXNQcm9kdWN0VmFyaWFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3lsaXVzLXByb2R1Y3QtdmFyaWFudHMnKSB8fCBudWxsO1xuXG4gIGlmIChzeWxpdXNWYXJpYW50c1ByaWNpbmcpIHtcbiAgICBoYW5kbGVQcm9kdWN0T3B0aW9uc0NoYW5nZSgpO1xuICB9IGVsc2UgaWYgKHN5bGl1c1Byb2R1Y3RWYXJpYW50cykge1xuICAgIGhhbmRsZVByb2R1Y3RWYXJpYW50c0NoYW5nZSgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTeWxpdXNWYXJpYW50c1ByaWNlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9ib290c3RyYXAtdGhlbWUvXCI7IiwiaW1wb3J0ICdib290c3RyYXAnO1xuXG4vLyBNYWluIHNjcmlwdHMgZmlsZVxuaW1wb3J0ICcuL2pzL2luZGV4JztcblxuLy8gTWFpbiBzdHlsZXMgZmlsZVxuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gSW1hZ2VzXG5pbXBvcnQgJy4vbWVkaWEvc3lsaXVzLWxvZ28ucG5nJztcbmltcG9ydCAnLi9tZWRpYS9zeWxpdXMtcGx1cy5wbmcnO1xuXG4iXSwibmFtZXMiOlsiR0xpZ2h0Ym94IiwiYXhpb3MiLCJTeWxpdXNSYXRpbmciLCJTeWxpdXNUb2dnbGUiLCJTeWxpdXNBZGRUb0NhcnQiLCJTeWxpdXNSZW1vdmVGcm9tQ2FydCIsIlN5bGl1c0FwaVRvZ2dsZSIsIlN5bGl1c0FwaUxvZ2luIiwiU3lsaXVzVmFyaWFudHNQcmljZXMiLCJTeWxpdXNWYXJpYW50SW1hZ2VzIiwiU3lsaXVzUHJvdmluY2VGaWVsZCIsIlN5bGl1c0FkZHJlc3NCb29rIiwiU3lsaXVzTG9hZGFibGVGb3JtcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJhY2NlcHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnbGlnaHRib3giLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzeWxpdXNTaGlwcGluZ0FkZHJlc3MiLCJxdWVyeVNlbGVjdG9yIiwic3lsaXVzQmlsbGluZ0FkZHJlc3MiLCJlbGVtIiwib25SYXRlIiwidmFsdWUiLCJjb25jYXQiLCJjaGVja2VkIiwiZWxlbWVudCIsInVybCIsImdldEF0dHJpYnV0ZSIsInJlZGlyZWN0VXJsIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJlIiwicmVxdWVzdCIsIkZvcm1EYXRhIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJyZW1vdmUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJpbm5lckhUTUwiLCJwYXJzZUtleSIsImtleSIsInJlcGxhY2UiLCJ3b3JkcyIsInRvVXBwZXJDYXNlIiwic2VsZWN0IiwiZmluZEJ5TmFtZSIsIm5hbWUiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiaXRlbSIsImNob2ljZSIsImN1cnJlbnRUYXJnZXQiLCJjaG9pY2VEYXRhIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXR0cmlidXRlcyIsImF0dHIiLCJzdGFydHNXaXRoIiwiY2FtZWxDYXNlZCIsImciLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsImNsb3Nlc3QiLCJpbnB1dCIsInByb3BlcnR5IiwiZmllbGQiLCJpbmRleE9mIiwiZGlzcGF0Y2hFdmVudCIsImV4aXN0cyIsInNldEludGVydmFsIiwicHJvdmluY2VDb2RlRmllbGQiLCJwcm92aW5jZU5hbWVGaWVsZCIsImhhc0F0dHJpYnV0ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJzaWduSW5CdXR0b24iLCJ2YWxpZGF0aW9uRmllbGQiLCJlbWFpbEZpZWxkIiwicGFzc3dvcmRGaWVsZCIsImNzcmZUb2tlbkZpZWxkIiwiY3NyZlRva2VuTmFtZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInJlbG9hZCIsInRvZ2dsZWFibGVFbGVtZW50IiwiZGVib3VuY2UiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGltZW91dCIsIl9sZW4iLCJhcmd1bWVudHMiLCJhcmdzIiwiQXJyYXkiLCJfa2V5Iiwic2V0VGltZW91dCIsImFwcGx5IiwiX3RoaXMiLCJ0YXJnZXQiLCJnZXQiLCJlbWFpbCIsIm92ZXJsYXkiLCJmb3JtIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJldmVudCIsInBlcnNpc3RlZCIsImdldFByb3ZpbmNlSW5wdXRWYWx1ZSIsInZhbHVlU2VsZWN0b3IiLCJ2YWwiLCJjb3VudHJ5U2VsZWN0IiwiY291bnRyeVNlbGVjdEl0ZW0iLCJpZCIsInByb3ZpbmNlU2VsZWN0RmllbGROYW1lIiwicHJvdmluY2VJbnB1dEZpZWxkTmFtZSIsInByb3ZpbmNlU2VsZWN0RmllbGRJZCIsInByb3ZpbmNlSW5wdXRGaWVsZElkIiwic2V0QXR0cmlidXRlIiwiY291bnRyeUNvZGUiLCJjb250ZW50IiwicmVtb3ZlQXR0cmlidXRlIiwicHJvdmluY2VTZWxlY3RWYWx1ZSIsInByb3ZpbmNlSW5wdXRWYWx1ZSIsImNvbnRhaW5lciIsInNldHRpbmdzIiwiX2NsYXNzQ2FsbENoZWNrIiwicmF0aW5nTWF4IiwiTnVtYmVyIiwiZGF0YXNldCIsImpzUmF0aW5nTWF4IiwicmF0aW5nQXZlcmFnZSIsImpzUmF0aW5nQXZlcmFnZSIsInZpZXdPbmx5IiwianNSYXRpbmdWaWV3b25seSIsImJ0bk9uRWxlbWVudCIsImJ0bk9mZkVsZW1lbnQiLCJyZW5kZXIiLCJfY3JlYXRlQ2xhc3MiLCJyZW5kZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImkiLCJqc1JhdGluZ1ZhbHVlIiwiY2hhbmdlSW5wdXRWYWx1ZSIsImJpbmQiLCJjc3JmVG9rZW4iLCJfY3NyZl90b2tlbiIsInRyaWdnZXIiLCJ0b2dnbGUiLCJ0b2dnbGVFbGVtZW50IiwianNUb2dnbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJtYWluSW1hZ2VMaW5rIiwibWFpbkltYWdlIiwiZGVmYXVsdEltYWdlTGluayIsImRlZmF1bHRJbWFnZVNyYyIsInNldEltYWdlIiwiZ2V0QWN0aXZlVmFyaWFudCIsIml0ZW1zIiwibWFwIiwiam9pbiIsImdldEFjdGl2ZUltYWdlU3JjIiwidmFyaWFudCIsImltYWdlTGluayIsImltYWdlU3JjIiwicGFyZW50IiwiaW1nIiwiaGFuZGxlUHJvZHVjdE9wdGlvbnNDaGFuZ2UiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicHJpY2VFbGVtZW50IiwicHJpY2UiLCJoYW5kbGVQcm9kdWN0VmFyaWFudHNDaGFuZ2UiLCJvcmlnaW5hbFByaWNlIiwic3lsaXVzVmFyaWFudHNQcmljaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzeWxpdXNQcm9kdWN0VmFyaWFudHMiXSwic291cmNlUm9vdCI6IiJ9