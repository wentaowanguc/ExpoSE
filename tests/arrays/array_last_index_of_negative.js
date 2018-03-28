/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that last index of can never be lower than -1
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

if (q.lastIndexOf(1) < -1) {
  throw 'array_last_index_of_negative: Unreachable';
}