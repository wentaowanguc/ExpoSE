/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that indexOf always returns the lowest index in the array containing the value
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];
// Expecting one path
if (q.indexOf(1) === 2 && (q[0] === 1 || q[1] === 1)) {
  throw 'array_index_of_lowest: Unreachable';
}