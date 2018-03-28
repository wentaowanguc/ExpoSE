function array_manipulation() {
	var a = ['a']; // Constraint: Length0 >= 0
	a[0]; // Constraint: Length0 > 0
	a.push('b'); // Constraint: Length1 = Length0 + 1
	a[5]; // Constraint: Length1 = Length0 + 1 ^ Length0 < 5
	a[20] = 'c'; // Constraint: Length2 > 20
	a.pop(); // Constraint: Length3 = Length2 - 1
}