/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Expecting three paths: a test case where array includes 9, case where it doesn't, and one where the length > 1
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

if (q.length === 1) {
	if (q[0] === 9) {
		if (q.includes(9)) {
			console.log('Includes 9');
		} else {
			throw 'Unreachable. array_includes.js'
		}
	} else {
		if (q.includes(9)) {
			throw 'Unreachable. array_includes.js'
		} else {
			console.log('Doesn\'t Include 9');
		}
	}
}

