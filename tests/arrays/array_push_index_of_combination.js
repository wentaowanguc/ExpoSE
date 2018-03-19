/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting: 2 paths: initial path and a path where q initially doesn't contain 1 and then does after the push
if (q.indexOf(5) === -1 && q.length === 2) {
  q.push(5);
	if (q.indexOf(5) === -1) {
		throw 'array_push_index_of_combination: Unreachable. indexOf hasn\'t found value in array';
  }
  
  if (q[2] !== 5) {
		throw 'array_push_index_of_combination: Unreachable. Index has incorrect value';
  }
} else {
  // Initial path
}