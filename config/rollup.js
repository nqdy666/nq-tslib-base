var typescript = require('rollup-plugin-typescript2');
var babel = require('rollup-plugin-babel');
var pkg = require('../package.json');

// compatible with nq-tslib-base and @nqdy666/nq-tslib-base
// @nqdy666/nq-tslib-base -> nq-tslib-base
var name = pkg.name.split('/').pop();
// @nqdy666/nq-tslib-base -> nqdy666_nq-tslib-base
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner =
  `/*!
 * ${pkg.name} ${version} (https://github.com/nqdy666/nq-tslib-base)
 * API https://github.com/nqdy666/nq-tslib-base/blob/master/doc/api.md
 * Copyright 2019-${(new Date).getFullYear()} nqdy666. All Rights Reserved
 * Licensed under MIT (https://github.com/nqdy666/nq-tslib-base/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
  opt = opt || {
    tsconfigOverride: {
      compilerOptions: {
        module: 'ES2015'
      }
    }
  }

  return typescript(opt);
}

exports.type = 'ts';
exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
