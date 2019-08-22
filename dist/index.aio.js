/*!
 * nq-jslib-base 0.1.2 (https://github.com/nianqin/nq-jslib-base)
 * API https://github.com/nianqin/nq-jslib-base/blob/master/doc/api.md
 * Copyright 2017-2019 nianqin. All Rights Reserved
 * Licensed under MIT (https://github.com/nianqin/nq-jslib-base/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['nq-jslib-base'] = factory());
}(this, function () { 'use strict';

  function helloworld() {
      console.log('hell world');
  }

  return helloworld;

}));
