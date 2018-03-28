/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var q = symbolic UnderTest initial [0, 1];


// Test that ExpoSE generates paths with a non-symbolic index
// Expecting a case where q[0] is 19 and a the initial case where it isn't
if (q[0] === 19) {
	console.log('q[0] is 19');
} else {
	console.log('q[0] is not 19');
}