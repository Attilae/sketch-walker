let x;
let y;

let r;
let g;
let b;

let loadedImage;

var cps = [];
let howMany = 15;

function preload() {
	loadedImage = loadImage('./img.jpeg');
}

function setup() {
	createCanvas(400, 500);

	reset();
}

function reset() {
	x = width / 2;
	y = height / 2;

	r = random(255);
	g = random(255);
	b = random(255);

	background(loadedImage);
}

function draw() {
	drawLine();
}

function drawLine() {
	let nextX = x + random(-20, 20);
	let nextY = y + random(-20, 20);
	nextX = constrain(nextX, 0, width);
	nextY = constrain(nextY, 0, height);

	color = get(parseInt(nextX), parseInt(nextY));

	fill(color);

	strokeWeight(random(1, 10));

	stroke(color, 0.5);
	line(x, y, nextX, nextY);
	scale(5);

	x = nextX;
	y = nextY;
}

function keyPressed() {
	reset();
}
