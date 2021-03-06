var _add = exports.add = function(a, b) {
	return a + b;
};

var _sub = exports.sub = function(a, b) {
	return a - b;
};

var _div = exports.div = function(a, b) {
	return a / b;
};

var _mult = exports.mult = function(a, b) {
	return a * b;
};

var _min = exports.min = function(a) {
	// return lowest number
	return a.reduce(function (b,c) {
		return ( b < c ? b : c);
	});
};

var _max = exports.max = function(a) {
	// return highest number
	return a.reduce(function (b,c) {
		return ( b > c ? b : c);
	});
};

var _mod = exports.mod = function(a, b) {
	return a % b;
};

var _pow = exports.pow = function(a, b) {
	return Math.pow(a, b);
};

var _sqr = exports.sqr = function(a) {
	return _mult(a,a);
}

var _sqrt = exports.sqrt = function(a) {
	return Math.sqrt(a);
}

var _perc = exports.perc = function(a, b) {
	return (b/a)*100;
};

var _slope = exports.slope = function(a, b) {
	return (b[1] - a[1])/(b[0] - a[0]);
};

var _mean = exports.mean = function(a, n) {
	if (typeof n != 'number') {
		n = a.length;
	}
	// add all values
	return a.reduce(function (c, d) {
		return c + d
	// divide by number of values
	}) / n;
}

var _mode = exports.mode = function(a) {
	var counts = {};
	var get_max = [];
	var result = [];
	// count the number of times each value occurs
	for (var i = 0; i < a.length; i++) {
		var index = a[i];
		if (!counts[index]) {
			counts[index] = 1;
		} else {
			counts[index] += 1;
		}
		get_max.push(counts[index]);
	}
	// select the number(s) that occurred the most
	var mode_max = _max(get_max);
	modes = Object.keys(counts).filter(function(key) {return counts[key] === mode_max});
	// cast to number
	for (i = 0; i < modes.length; i++) {
		result.push(Number(modes[i]));
	}

	return result;
}

var _med = exports.median = function(a) {
	var len = a.length;

	if (_mod(len, 2) == 0) {
		// if there are an even amount of numbers, return the middle two
		var mid = _div(len, 2);
		return [a[mid], a[mid - 1]];
	} else {
		// return the middle number
		var num = _div(len - 1, 2);
		return a[num];
	}
}

var _round = exports.round = function(a) {
	// 0.5 = 1;
	// 0.49 = 0;
	return Math.round(a);
};

var _variance = exports.variance = function(a, type) {
	// get the mean of values
	m = _mean(a);
	// subtract the mean from each value then square it
	a.forEach(function (elem, index, array) {
		array[index] = _sqr(_sub(elem, m));
	});

	if (type == 'standard') {
		// get the new mean
		return _mean(a, a.length - 1);	
	}

	return _mean(a);
};

var _population_standard_deviation = exports.psdeviation = function(a) {
	// take the square root of variance
	return _sqrt(_variance(a, 'population'));
};

var _standard_deviation = exports.sdeviation = function(a) {
	// take the square root of variance
	return _sqrt(_variance(a, 'standard'));
};

var _round_to = exports.roundTo = function(a, b) {
	// round a to b units after the decimal
	return Number(a.toFixed(b));
};

var _random = exports.random = function(min, max) {
	min = typeof min !== 'undefined' ? min : 1;
	max = typeof max !== 'undefined' ? max : 10;
	return Math.random() * (max - min) + min;
}
