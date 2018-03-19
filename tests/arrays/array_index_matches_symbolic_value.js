/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var q = symbolic UnderTest initial [0, 1];
var d = symbolic Value initial 5;

// Expecting a path where the symbolic values match, a path where they don't, and two diverting erronoeus paths due to _bound issues.
if (d === q[0]) {
  console.log('Value matches UnderTest');
} else {
  console.log('Value does not match UnderTest');
}