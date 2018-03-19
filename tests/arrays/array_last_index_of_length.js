/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting: A single path
if (q.lastIndexOf(1) > q.length) {
  throw 'array_last_index_of_length: Unreachable index is greater than length';
} else {
  // Initial path
}