/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

// Tests that setting to an index results means that the value is in the array and that includes can find it
var q = symbolic UnderTest initial [0, 1, 1, 4, 4, 1];

if (!q.includes(5) && q.length === 1) {
  q[0] = 5;
	if (!q.includes(5)) {
		throw 'array_set_field_includes_combination: Unreachable. includes hasn\'t found value in array';
  }
  
  if (q[0] !== 5) {
		throw 'array_set_field_includes_combination: Unreachable. Index has incorrect value';
  }
}