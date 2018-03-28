/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that slicing an array to remove an element results in index of not finding it
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];
// Expecting four paths: q.indexOf(1) is -1 and not -1, plus the two negations on includes which produce repeated array cases.
if (q.indexOf(52) === 0 && q[1] !== 52) {
  var r = q.slice(1);
  if (r.indexOf(52) === 0) {
    throw 'Unreachable';
  }
} 