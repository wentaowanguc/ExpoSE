"use strict";

function testPolyfill(testFunction, prototypeFunction, base, args) {
    console.log('Base ' + base + ', args ' + args);
  
    var result1;
    var result2;
  
    try {
      result1 = testFunction.apply(base, args);
    } catch(e) {
      // Empty catch
    }
  
    try {
      result2 = prototypeFunction.apply(base, args);
    } catch(e) {
      // Empty catch
    }
  
    result1 = JSON.stringify(result1);
    result2 = JSON.stringify(result2);

    if (result1 !== result2) {
      throw 'Alert -> Error: polyfill: \'' + result1 + '\' prototype: \'' +  result2 + '\'';
    } 
  };

var includes = require('includes');
testPolyfill(includes, Array.prototype.includes, symbolic thisArg, [symbolic Needle]);