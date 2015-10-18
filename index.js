var _add = exports.add = function(a, b) {
	return Number(a) + Number(b);
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
	return a.reduce(function (b,c) {
		return ( b < c ? b : c);
	});
};

var _max = exports.max = function(a) {
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

var _perc = exports.perc = function(a, b) {
	return (b/a)*100;
};

var _slope = exports.slope = function(a, b) {
	return (b[1] - a[1])/(b[0] - a[0]);
};

var _mean = exports.mean = function(a) {
	return a.reduce(function (c, d) {
		return c + d
	}) / a.length;
}

var _mode = exports.mode = function(a) {
	counts = {};
	get_max = [];

	for (i = 0; i < a.length; i++) {
		var index = a[i];
		if (!counts[index]) {
			counts[index] = 1;
		} else {
			counts[index] += 1;
		}
		get_max.push(counts[index]);
	}

	var mode_max = _max(get_max);
	modes = Object.keys(counts).filter(function(key) {return counts[key] === mode_max});
	result = [];

	for (i = 0; i < modes.length; i++) {
		result.push(Number(modes[i]));
	}

	return result;
}

var _med = exports.median = function(a) {
	var len = a.length;

	if (_mod(len, 2) == 0) {
		var mid = _div(len, 2);
		return [a[mid], a[mid - 1]];
	} else {
		var num = _div(len - 1, 2);
		return a[num];
	}
}

var _round = exports.round = function(a) {
	return Math.round(a);
}
