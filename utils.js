function normalize(v) {
	var sum = 0;
	for (var i = 0; i < Object.keys(v).length; i++) {
		sum += Object.values(v)[i] * Object.values(v)[i];
	}
	var length = Math.sqrt(sum);
	
	switch (Object.keys(v).length) {
		case 2:
			return {x: v.x / length, y: v.y / length};
			break;
		case 3:
			return {x: v.x / length, y: v.y / length, z: v.z / length};
			break;
	}
}

//optimization
function lengthSquared(v) {
	var sum = 0;
	for (var i = 0; i < Object.keys(v).length; i++) {
		sum += Object.values(v)[i] * Object.values(v)[i];
	}
	return sum;
}

function length(v) {
	var sum = 0;
	for (var i = 0; i < Object.keys(v).length; i++) {
		sum += Object.values(v)[i] * Object.values(v)[i];
	}
	return Math.sqrt(sum);
}

function dot(u, v) {
	if (Object.keys(u).length != Object.keys(v).length)
		throw "Diff len";
	var sum = 0;
	for (var i = 0; i < Object.keys(v).length; i++) {
		sum += Object.values(u)[i] * Object.values(v)[i];
	}
	return sum;
}

function angleBetween(u, v) {
	return Math.acos(dot(u, v) / (length(u)*length(v)));
}

function cross2d(v) {
	return {x: -v.y, y: v.x};
}

function slope(f, x) {
	var dx = 1e-6;
	return (f(x+dx)-f(x))/dx;
}