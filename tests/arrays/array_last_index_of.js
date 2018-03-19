/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

// Expecting a path where lastIndexOf succeeds and a path where lastIndexOf fails
if (q.lastIndexOf(5)) {
	console.log('lastIndexOf Success');
} else {
	console.log('lastIndexOf Fail');
}