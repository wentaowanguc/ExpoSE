/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that ExpoSE generates a path based on array length
var q = symbolic UnderTest initial [0, 1];

if (q.length === 3) {
	console.log('Success');
}
