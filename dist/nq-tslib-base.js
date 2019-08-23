/*!
 * nq-tslib-base 0.0.2 (https://github.com/nqdy666/nq-tslib-base)
 * API https://github.com/nqdy666/nq-tslib-base/blob/master/doc/api.md
 * Copyright 2019-2019 nqdy666. All Rights Reserved
 * Licensed under MIT (https://github.com/nqdy666/nq-tslib-base/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.nqTslibBase = {}));
}(this, function (exports) { 'use strict';

  // plus a + b
  function add(a, b) {
      return a + b;
  }

  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
