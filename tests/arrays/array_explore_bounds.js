/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

/* Expecting a test case for if, a test case for else, and a test case for outside array bounds */  
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];
var i = symbolic I initial 1;
if (q[i]) {
	console.log('If');
}
console.log('Else');
