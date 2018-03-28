"use strict";

// Polyfill sourced from https://github.com/inexorabletash/polyfill

function isSymbol(s) {
  return (typeof s === 'symbol') || ('Symbol' in global && s instanceof global.Symbol);
}


// Snapshot intrinsic functions
var $isNaN = global.isNaN;

var abs = Math.abs,
    floor = Math.floor,
    max = Math.max,
    min = Math.min;

//----------------------------------------
// 7 Abstract Operations
//----------------------------------------

// 7.1.4
function ToInteger(n) {
  n = Number(n);
  if ($isNaN(n)) return 0;
  if (n === 0 || n === Infinity || n === -Infinity) return n;
  return ((n < 0) ? -1 : 1) * floor(abs(n));
}

// 7.1.13 ToObject
function ToObject(v) {
  if (v === null || v === undefined) throw TypeError();
  return Object(v);
}

// 7.1.15 ToLength ( argument )
function ToLength(v) {
  var len = ToInteger(v);
  if (len <= 0) {
    return 0;
  }
  return min(len, 0x20000000000000 - 1); // 2^53-1
}

//----------------------------------------
// 7.2 Testing and Comparison Operations
//----------------------------------------

// 7.2.10 SameValueZero(x, y)
function SameValueZero(x, y) {
  if (typeof x !== typeof y) return false;
  switch (typeof x) {
  case 'undefined':
    return true;
  case 'number':
    if (x !== x && y !== y) return true;
    return x === y;
  case 'boolean':
  case 'string':
  case 'object':
  default:
    return x === y;
  }
}

//----------------------------------------------------------------------
//
// ECMAScript 2016
//
//----------------------------------------------------------------------

// https://github.com/tc39/Array.prototype.includes/

  function includes(target) {
    var fromIndex = arguments[1];

    var o = ToObject(this);
    var len = ToLength(o["length"]);
    if (len === 0) return false;
    var n = ToInteger(fromIndex);
    if (n >= 0) {
      var k = n;
    } else {
      k = len + n;
      if (k < 0) k = 0;
    }
    while (k < len) {
      var elementK = o[k];
      if (SameValueZero(o[k], target))
        return true;
      k += 1;
    }
    return false;
  }

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


testPolyfill(includes, Array.prototype.includes,, symbolic thisArg, [symbolic Needle]);