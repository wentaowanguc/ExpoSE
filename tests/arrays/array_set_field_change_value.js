/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that setting an index changes the value of the index
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

if (q.length === 3 && q[2] !== 12) {
  q[2] = 12;
  if (q[2] === 12) {
    console.log('Success');
  } else {
    throw 'array_set_field_change_value: This should be unreachable';
  }
}