/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting two paths: q[0] and q[1] are not 5, followed by a single path where q[0] or q[1] is 5
if (q[0] === 5 || q[1] == 5) {
	console.log('q[0] or q[1] is 5');
} else {
	console.log('q[0] and q[1] are not 5');
}