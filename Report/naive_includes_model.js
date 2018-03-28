function includes(needle) {
	var array = this;
	for (var i = 0; i < array.length; i ++) {
		if (array[i] === needle) {
			return true;
		}
	}
	return false;
}