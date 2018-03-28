/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that pushing a value returns the value that was pushed
var q = symbolic UnderTest initial [0, 1];
var p = symbolic Value initial 5;

var v = q.push(p);
if (v === p) {
  console.log('Reached');
} else {
  throw 'array_push_returns: Unreachable - pushed value not equal to return of push';
}