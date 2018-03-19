/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var d = symbolic Integer initial 5;
var q = symbolic UnderTest initial [0, 1];

// Expecting the initial case where q[d] is not 0 and a case where q[d] is 0
if (q[d] === 0) {
	console.log('q[d] === 0')
} else {
	console.log('q[d] !== 0')
}