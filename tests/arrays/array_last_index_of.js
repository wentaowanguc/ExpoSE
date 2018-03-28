/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that lastIndexOf does not return -1 if the elemetn is in the array
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting a path where lastIndexOf succeeds and a path where lastIndexOf fails
if (q.length === 1 && q[0] === 5) {
	if (q.lastIndexOf(5) !== -1) {
		console.log('lastIndexOf Success');
	} else {
		throw 'Unreachable: array_last_index_of.js';
	}
}