/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";
 
// Test that arrays are only homogeneous
// Expecting three paths
var q = symbolic UnderTest initial ['a', 'b'];

if (q.length === 2 && typeof q[0] === 'string') {
  if (typeof q[1] === 'boolean') {
    throw 'Unreachable - A boolean value';
  } else if (typeof q[1] === 'number') {
    throw 'Unreachable - A number value';
  }
}