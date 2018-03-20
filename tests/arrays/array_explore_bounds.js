/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";
 
/* 
The only way that the else case is reachable is with an empty array but no condition in the previous branches would generate this without exploring alternate bounds.
Expecting three paths, one for each case.
*/
var q = symbolic UnderTest initial ['a'];

if (q[0] === 'a') {
	// Empty
} else if (typeof q[0] === 'string') {
	console.log('Another string value');
} else {
	throw 'Out of bounds!';
}