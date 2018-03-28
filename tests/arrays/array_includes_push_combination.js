/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting: 2 paths: initial path and a path where q initial doesn't contain 1 and then does after the pop
if (!q.includes(1)) {
  q.push(1);
	if (!q.includes(1)) {
		throw 'array_index_of_push_combination: Unreachable';
	} else {
		console.log('Array includes 1')
	}
}