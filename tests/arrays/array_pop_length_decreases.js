/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Expected number of paths: TODO

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];
// copy the length
var length = q.length;

if (q.length >= 1) {
  // Non empty arrays should decrease the length
  q.pop();
  if (q.length === length - 1) {
    console.log('Success');
  } else {
    throw 'array_pop_length_decreases: This should be unreachable';
  }
} else {
  // Empty arrays should remain empty (no-negative lengths)
  if (q.length === 0) {
    q.pop();
    if (q.length === 0) {
      console.log('Success');
    } else {
      throw 'array_pop_length_decreases: This should be unreachable';
    }
  }
}