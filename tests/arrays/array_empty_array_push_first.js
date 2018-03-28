/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var p = symbolic UnderTest initial [];

// Test that from an empty array an array of type String can be created by pushing a value
// Expecting 3 paths, 2 from the outer if, else and a third produced due to the unreachable statement.
if (p.length === 0) {
  p.push('a');
  p[2] = 'b';
  if (p.length <= 0) {
      throw 'Unreachable';
  }
} 