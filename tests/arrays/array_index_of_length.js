/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that index of is always less than array length
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting: A single path
if (q.indexOf(1) >= q.length) {
  throw 'array_index_of_length: Unreachable index is greater than length';
}