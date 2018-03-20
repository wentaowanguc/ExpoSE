/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

//

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Clone the length
var length = q.length;
if (q.length === 3) {
  q.length = 42;
  if (q.length === 42) {
    console.log('Success');
  } else {
    throw 'array_set_length: This should be unreachable';
  }
}