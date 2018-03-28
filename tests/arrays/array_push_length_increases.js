/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that pushing to the array increases its length
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Clone the length
var length = q.length;
q.push(99);

if (q.length === length+1) {
	console.log('Success');
} else {
	throw 'array_push_length_increases: This should be unreachable';
}