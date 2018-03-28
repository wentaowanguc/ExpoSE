/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that the indexof a popped array element is -1 

var q = symbolic UnderTest initial [5];
// Expecting: 2 paths: initial path and a path where q initially doesn't contain 1 and then does after the push
if (q.indexOf(5) === 1 && q.length === 1) {
  q.pop(); // pop 5
	if (q.indexOf(5) !== -1) {
		throw 'array_pop_index_of_combination: Unreachable. indexOf found a value in the array';
  }
} 