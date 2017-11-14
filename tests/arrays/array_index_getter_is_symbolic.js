var d = symbolic Integer initial 5;
var q = symbolic UnderTest initial [0, 1];

if (q[d] === 0) {
	console.log('HOORAY')
}