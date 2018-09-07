function createCircle(id, position, rad, color, alpha) {
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("id", id);
	circle.setAttribute("cx", position.x);
	circle.setAttribute("cy", position.y);
	circle.setAttribute("r", rad);
	circle.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	circle.setAttribute("fill-opacity", alpha);
	svg.appendChild(circle);
	return circle;
}

function updateCircle(id, position, rad, color, alpha) {
	var circle = document.getElementById(id);
	circle.setAttribute("cx", position.x);
	circle.setAttribute("cy", position.y);
	circle.setAttribute("r", rad);
	circle.setAttribute("fill", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	circle.setAttribute("fill-opacity", alpha);
}

function createLine(id, from, to, rad, color, alpha) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("id", id);
	line.setAttribute("x1", from.x);
	line.setAttribute("y1", from.y);
	line.setAttribute("x2", to.x);
	line.setAttribute("y2", to.y);
	line.setAttribute("stroke-width", rad);
	line.setAttribute("stroke", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	line.setAttribute("fill-opacity", alpha);
	svg.appendChild(line);
	return line;
}

function updateLine(id, from, to, rad, color, alpha) {
	var line = document.getElementById(id);
	line.setAttribute("x1", from.x);
	line.setAttribute("y1", from.y);
	line.setAttribute("x2", to.x);
	line.setAttribute("y2", to.y);
	line.setAttribute("stroke-width", rad);
	line.setAttribute("stroke", new String("rgb("+color.r+", "+color.g+", "+color.b+", "+alpha+")"));
	line.setAttribute("fill-opacity", alpha);
}