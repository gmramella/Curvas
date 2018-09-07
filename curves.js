//https://elepa.files.wordpress.com/2013/11/fifty-famous-curves.pdf
//http://www-history.mcs.st-and.ac.uk/Curves/Curves.html

//Parametric curves
function astroid(t) {
	var a = 1;
	return {x: a*Math.pow(Math.cos(t),3), y: a*Math.pow(Math.sin(t),3)}
}

function cardioid(t) {
	var a = 1;
	return {x: a*(2*Math.cos(t)-Math.cos(2*t)), y: a*(2*Math.sin(t)-Math.sin(2*t))}
}

function circle(t) {
	var a = 1;
	return {x: a*Math.cos(t), y: a*Math.sin(t)}
}

function conchoid(t) {//feia
	var a = 0.1;
	return {x: a+Math.cos(t), y: a*Math.tan(t)+Math.sin(t)}
}

function cycloid(t) {
	var a = 1, b = 1;
	return {x: a*t-b*Math.sin(t), y: a-b*Math.cos(t)}
}

function ellipse(t) {
	var a = 2, b = 1;
	return {x: a*Math.cos(t), y: b*Math.sin(t)}
}

function epicycloid(t) {
	var a = 1.6, b = 1;
	return {x: (a+b)*Math.cos(t)-b*Math.cos((a/b+1)*t), y: (a+b)*Math.sin(t)-b*Math.sin((a/b+1)*t)}
}

function epitrochoid(t) {
	var a = 5/3, b = 1, c = 5/3;
	return {x: (a+b)*Math.cos(t)-c*Math.cos((a/b+t)*t), y: (a+b)*Math.sin(t)-c*Math.sin((a/b+t)*t)}
}

function heartCurve(t) {
	var a = 1/8;
	return {x: 16*a*Math.pow(Math.sin(t),3), y: 13*a*Math.cos(t)-5*a*Math.cos(2*t)-2*a*Math.cos(3*t)-a*Math.cos(4*t)}
}

function hyperbola(t) {//inconstante
	var a = 1, b = 1;
	return {x: a/Math.cos(t), y: b*Math.tan(t)}
}

function hypocycloid(t) {
	var a = 5, b = 3;
	return {x: (a-b)*Math.cos(t)+b*Math.cos((a/b-1)*t), y: (a-b)*Math.sin(t)-b*Math.sin((a/b-1)*t)}
}

function hypotrochoid(t) {
	var a = 5, b = 7, c = 2.2;
	return {x: (a-b)*Math.cos(t)+c*Math.cos((a/b-1)*t), y: (a-b)*Math.sin(t)-c*Math.sin((a/b-1)*t)}
}

function involuteOfACircle(t) {
	var a = 1;
	return {x: a*(Math.cos(t)+t*Math.sin(t)), y: a*(Math.sin(t)-t*Math.cos(t))}
}

function lissajousCurves(t) {
	var a = 2, b = 2, c = 2, n = 5;
	return {x: a*Math.sin(n*t+c), y: b*Math.sin(t)}
}

function nephroid(t) {
	var a = 1;
	return {x: a*(3*Math.cos(t)-Math.cos(3*t)), y: a*(3*Math.sin(t)-Math.sin(3*t))}
}

function plateauCurves(t) {
	var a = 1, m = 5, n = 3;
	return {x: a*Math.sin((m+n)*t)/(Math.sin((m-n)*t)), y: 2*a*Math.sin(m*t)*Math.sin(n*t)/(Math.sin((m-n)*t))}
}

function straightLine(t) {
	var a = 1, b = 1, c = 1, d = 1;
	return {x: a*t+b, y: c*t+d}
}

function talbotsCurve(t) {
	var a = 2, b = 1, f = 2;
	return {x: (a*a+f*f*Math.sin(t)*Math.sin(t))*Math.cos(t)/a, y: (a*a-2*f*f+f*f*Math.sin(t)*Math.sin(t))*Math.sin(t)/b}
}

function tricuspoid(t) {
	var a = 1;
	return {x: a*(2*Math.cos(t)+Math.cos(2*t)), y: a*(2*Math.sin(t)-Math.sin(2*t))}
}

function butterflyCurve(t) {
	return {x: Math.sin(t)*(Math.exp(Math.cos(t))-2*Math.cos(4*t)-Math.pow(Math.sin(t/12),5)), y: Math.cos(t)*(Math.exp(Math.cos(t))-2*Math.cos(4*t)-Math.pow(Math.sin(t/12),5))}
}

//Polar curves
function cayleysSextic(t) {
	var a = 1;
	return {r: 4*a*Math.pow(Math.cos(t/3),3)};
}

function cissoidOfDiocles(t) {
	var a = 1;
	return {r: 2*a*Math.tan(t)*Math.sin(t)};
}

function cochleoid(t) {
	var a = 10;
	return {r: a*Math.sin(t)/t};
}

function conchoidOfDeSluze(t) {
	var a = -3;
	return {r: 1/Math.cos(t)+a*Math.cos(t)};
}

function devilsCurve(t) {//inconstante
	var a = 1;
	return {r: Math.sqrt((25-24*Math.pow(Math.tan(t),2))/(1-Math.pow(Math.tan(t),2)))};
}

function doubleFolium(t) {//outra curva consegue reproduzir
	var a = 1;
	return {r: 4*a*Math.cos(t)*Math.sin(t)*Math.sin(t)};
}

function eightCurve(t) {//inconstante
	var a = 2;
	return {r: Math.sqrt(a*a*Math.cos(2*t)*Math.pow(1/Math.cos(t),4))};
}

function equiangularSpiral(t) {//pouco utilizável
	var a = 1, b = 1;
	return {r: a*Math.exp(t/Math.tan(b))};
}

function folium(t) {
	var a = 1, b = 0;//4a=simple,0=double,a=triple
	return {r: -b*Math.cos(t)+4*a*Math.cos(t)*Math.pow(Math.sin(t),2)};
}

function foliumOfDescartes(t) {
	var a = 2;
	return {r: 3*a*Math.sin(t)*Math.cos(t)/(Math.pow(Math.sin(t),3)+Math.pow(Math.cos(t),3))}
}

function freethsNephroid(t) {
	var a = 2;
	return {r: a*(1+2*Math.sin(t/2))};
}

function gearCurve(t) {
	var a = 4, b = 4, n = 12;
	return {r: a+(1/b)*Math.tanh(b*Math.sin(n*t))};
}

function hyperbolicSpiral(t) {//pouco utilizável
	var a = 1;
	return {r: a/t};
}

function kampyleOfEudoxus(t) {
	var a = 1, b = 1;
	return {r: b*b/(a*Math.cos(t)*Math.cos(t))};
}

function kappaCurve(t) {
	var a = 1;
	return {r: a/Math.tan(t)};
}

function lemniscateOfBernoulli(t) {//inconstante
	var a = 4;
	return {r: Math.sqrt(a*a*Math.cos(2*t))};
}

function limaconOfPascal(t) {
	var a = 1, b = 1;
	return {r: b+2*a*Math.cos(t)}
}

function quadrifolium(t) {//outra curva consegue reproduzir
	var a = 1;
	return {r: a*Math.sin(9*t)};
}

function rhodoneaCurves(t) {
	var a = 2, k = 5;
	return {r: a*Math.sin(k*t)};
}

function rightStrophoid(t) {//inconstante
	var a = 1;
	return {r: a*Math.cos(2*t)/Math.cos(t)};
}

function sinusoidalSpirals(t) {//inconstante
	var a = 2, p = 4;
	return {r: Math.pow((Math.pow(a,p)*Math.cos(p*t)),1/p)};
}

function spiralOfArchimedes(t) {
	var a = 1;
	return {r: a*t};
}

function trifolium(t) {//outra curva consegue reproduzir
	var a = 1;
	return {r: a*Math.cos(t)*(4*Math.sin(t)*Math.sin(t)-1)};
}

function trisectrixOfMaclaurin(t) {//inconstante
	var a = 1;
	return {r: 2*a*Math.sin(3*t)/Math.sin(2*t)};
}

//Explicit curves
function pursuitCurve(t) {
	var a = 1;
	return {x: t, y: a*t*t-Math.log(t)}
}

//Two curves
function catenary(t) {
	var a = 1;
	return {x1: -t, x2: t, y1: a*Math.cosh(t/a), y2: a*Math.cosh(t/a)};
}

function frequencyCurve(t) {
	var a = 1;
	return {x1: -t, x2: t, y1: Math.sqrt(2*Math.PI)*Math.exp(-t*t/2), y2: Math.sqrt(2*Math.PI)*Math.exp(-t*t/2)}
}

function kilroyCurve(t) {
	return {x1: -t, x2: t, y1: Math.log(Math.abs(Math.sin(-t)/-t)), y2: Math.log(Math.abs(Math.sin(t)/t))}
}

function neilesParabola(t) {
	var a = 1;
	return {x1: -t, x2: t, y1: Math.pow((a*t*t),1/3), y2: Math.pow((a*t*t),1/3)}
}

function newtonsDivergingParabolas(t) {
	var a = 1, b = 2, c = 2;
	return {x1: t, x2: t, y1: Math.sqrt(t*(t*t-2*b*t+c)/a), y2: -Math.sqrt(t*(t*t-2*b*t+c)/a)};
}

function parabola(t) {
	var a = 1, b = 0, c = 1;
	return {x1: -t, x2: t, y1: a*t*t+b*-t+c, y2: a*t*t+b*t+c}
}

function pearShapedQuartic(t) {
	var a = 1, b = 1;
	return {x1: t, x2: t, y1: Math.sqrt(t*t*t*(a-t)/(b*b)), y2: -Math.sqrt(t*t*t*(a-t)/(b*b))};
}

function quadratrixOfHippias(t) {
	var a = 1;
	return {x1: t, x2: -t, y1: t/Math.tan(Math.PI*t/(2*a)), y2: t/Math.tan(Math.PI*t/(2*a))}
}

function serpentine(t) {
	var a = 1, b = 1;
	return {x1: -t, x2: t, y1: -t*a*a/(t*t+a*b), y2: t*a*a/(t*t+a*b)};
}

function tractrix(t) {
	var a = 1;
	return {x1: 1/Math.cosh(t), x2: 1/Math.cosh(t), y1: t-Math.tanh(t), y2: -t+Math.tanh(t)}
}

function tridentOfNewton(t) {
	var a = 1, b = 1, c = 1, d = 1;
	return {x1: -t, x2: t, y1: a*t*t+b*-t+c+d/-t, y2: a*t*t+b*t+c+d/t}
}

function tschirnhaussCubic(t) {
	var a = 1;
	return {x1: t, x2: t, y1: Math.sqrt(t*(t-a)*(t-a)/(3*a)), y2: -Math.sqrt(t*(t-a)*(t-a)/(3*a))};
}

function witchOfAgnesi(t) {
	var a = 1;
	return {x1: a*t, x2: -a*t, y1: a/(1+t*t), y2: a/(1+t*t)}
}

//Two polars
function fermatsSpiral(t) {
	var a = 1;
	return {r1: Math.sqrt(a*a*t), r2: -Math.sqrt(a*a*t)};
}

function lituus(t) {
	var a = 1;
	return {r1: Math.sqrt(a*a/t), r2: -Math.sqrt(a*a/t)};
}

function wattsCurve(t) {
	var a = 1, b = 1, c = 1;
	return {r1: Math.sqrt(b*b-(a*Math.sin(t)+Math.sqrt(c*c-a*a*Math.pow(Math.cos(t),2)))), r2: -Math.sqrt(b*b-(a*Math.sin(t)+Math.sqrt(c*c-a*a*Math.pow(Math.cos(t),2))))}
}

//Four curves
function atriphtaloid(t) {
	var a = 3, b = 2;
	return {x1: t, x2: t, y1: Math.sqrt(Math.pow((a*t*t-b),2)/Math.pow(t,4)-t*t), y2: -Math.sqrt(Math.pow((a*t*t-b),2)/Math.pow(t,4)-t*t)};
}

function bicorn(t) {
	var a = 1;
	return {x1: t, x2: t, y1: (2-2*t*t-Math.sqrt(1-3*t*t+3*Math.pow(t,4)-Math.pow(t,6)))/(3+t*t), y2: (2-2*t*t+Math.sqrt(1-3*t*t+3*Math.pow(t,4)-Math.pow(t,6)))/(3+t*t)};
}

function pearlsOfSluze(t) {
	var a = 4, k = 2, m = 2, n = 4, p = 3;
	return {x1: t, x2: t, y1: -Math.pow((k*Math.pow(a-t,p)*Math.pow(t,m)),1/n), y2: Math.pow((k*Math.pow(a-t,p)*Math.pow(t,m)),1/n)};
}

function spiricSections(t) {
	var a = 0.9, c = 1, r = 2;//a=1 é símbolo de infinito
	return {x1: t, x2: t, y1: Math.sqrt(-r*r+a*a-c*c-t*t+Math.sqrt(4*r*r*(t*t+c*c))), y2: -Math.sqrt(-r*r+a*a-c*c-t*t+Math.sqrt(4*r*r*(t*t+c*c)))};
}