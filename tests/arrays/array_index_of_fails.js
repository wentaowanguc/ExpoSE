/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that indexOf returns -1 if the element is not in the array
var q = symbolic UnderTest initial [0, 1];

// Expecting three paths: an array of [0], an array of [0] where the if branch cannot be flipped, and any other array
if (q.length === 1 && q[0] === 1) {
  if (q.indexOf(2) === -1) {
    console.log('2 not found in array');
  } else {
    throw 'array_index_of_fails.js: Unreachable path';
  }
}
