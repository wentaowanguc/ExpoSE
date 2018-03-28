/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Test that creating an array with the constructor produces a symbolic array of with the same length
// Expecting 2 paths
var size = symbolic Size initial 0;
var a = new Array(size);

if (a.length === size) {
	console.log('Success');
} else {
	throw 'Unreachable';
}