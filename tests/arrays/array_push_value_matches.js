/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that pushing a value adds it to the array
var q = symbolic UnderTest initial [0, 1];

if (q.length === 1) {
  q.push(12);
  if (q[1] === 12) {
    console.log('Reached');
  } else {
    throw 'Unreachable';
  }
}
console.log('Length not satisfiable');