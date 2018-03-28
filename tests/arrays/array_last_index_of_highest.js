/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that lastIndexOf is always the highest value in the array
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting one path
if (q.length === 3 && q.lastIndexOf(5) === 0 && (q[1] === 5 || q[2] === 5)) {
  throw 'array_last_index_of: Unreachable';
}