/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that if an array contains an element that index of returns the correct index
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting a path where indexOf succeeds and a path where indexOf fails
if (q.length === 1 && q[0] === 5) {
	if (q.indexOf(5) !== 0) {
		throw 'Unreachable: array_index_of'
	}
}