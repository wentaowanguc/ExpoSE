/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting: A single path where the last index of 1 is less than -1
if (q.lastIndexOf(1) < -1) {
  throw 'array_last_index_of_negative: Unreachable';
} else {
  // Initial path
}