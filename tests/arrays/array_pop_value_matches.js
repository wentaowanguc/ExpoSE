/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1];

// Test that the value popped from an array matches the value that was removed
if (q.length === 1 && q[0] === 3) {
  var poppedValue = q.pop();
  if (poppedValue === 3) {
    console.log('Reached');
  } else {
    throw 'Unreachable';
  }
} else {
  // uninteresting branch
}