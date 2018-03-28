/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

/* 
  This test is to ensure that ExpoSE's array implementation doesn't break the underlying behaviour of arrays
*/

var q = [0, 1, 2, 3];
var i = 0;
if (q[0] !== 0) {
  throw "array_concrete_beahviour: Unreachable";
}

if (q[i] !== 0) {
  throw "array_concrete_beahviour: Unreachable";
}

if (q.length !== 4) {
  throw "array_concrete_beahviour: Unreachable";
}

if (!q.includes(3)) {
  throw "array_concrete_beahviour: Unreachable";
}

if (q.indexOf(5) !== -1) {
  throw "array_concrete_beahviour: Unreachable";
}

if (q.indexOf(2) !== 2) {
  throw "array_concrete_beahviour: Unreachable";
}

q.push(4);

if (q.length !== 5) {
  throw "array_concrete_beahviour: Unreachable";
}
if (q[4] !== 4) {
  throw "array_concrete_beahviour: Unreachable";
}

q.pop();

if (q.length !== 4) {
  throw "array_concrete_beahviour: Unreachable";
}
if (q[4] !== undefined) {
  throw "array_concrete_beahviour: Unreachable";
}
