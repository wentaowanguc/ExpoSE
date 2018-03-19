/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1];

if (q.length === 1 && q[0] === 3) {
  if (q.pop() === 3) {
    console.log('Reached');
  } else {
    throw 'Unreachable';
  }
} else {
  // uninteresting branch
}