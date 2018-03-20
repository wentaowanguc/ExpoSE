/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";
 
// Expecting three paths
var q = symbolic UnderTest initial [false];

if (q[0] === true) {
	console.log('If');
} else if (typeof q[0] === 'boolean') {
	console.log('Another boolean value');
} else {
  console.log('Not a boolean value')
}