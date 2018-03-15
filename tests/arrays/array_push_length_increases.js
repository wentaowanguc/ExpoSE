/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

//

var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];
// Clone the length
var length = parseInt(JSON.stringify(JSON.parse(q.length)));
q.push(99);

if (q.length === length+1) {
	throw 'Success';
}
throw 'array_push_length_increases: This should never been thrown'