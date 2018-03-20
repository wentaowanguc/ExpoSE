/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

var size = symbolic Size initial 0;
var a = new Array(size);
// Expecting a path where the length is 2 and a path where it isn't 
if (a.length === size) {
	console.log('Success');
} else {
	throw 'Unreachable';
}