
var q = symbolic UnderTest initial [0, 1];
var d = symbolic Value initial 5;

if (d === q[0]) {
  console.log('Match');
}
console.log('No match');