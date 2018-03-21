/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Tests a slice 0 produces a new array with the same array elements
var q = symbolic UnderTest initial ['a', 'b'];

if (q.length === 2 && q[0] === 'a' && q[1] === 'b') {
  var r = q.slice(0);
  if (r.length === 2 && q[0] === 'a' && q[1] === 'b') {
    console.log('Reached');
  } else {
    throw 'Unreachable';
  }
}