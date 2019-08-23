
const expect = require('expect.js');
require('jsdom-global')()


// js 测试源文件
import { createIframe, isObject, objectToUrlQuery, isInQuickApp, isHuaweiPhone, isAddQuickAppScript, createQuickAppScript } from '../src/utils'


// ts 测试编译后文件
// var base = require('../src/index.ts');

describe('单元测试 开始测试工具函数', function() {
    this.timeout(1000);
});
