var headshot;
function preload() {
	headshot = loadImage('headshot.png');
}
function setup() {
	createCanvas(400, 600);
	headshot.resize(200,0);
}

function draw() {
	noStroke();
	fill(241,213,204);
	rect(0,120,500,480);
	image(headshot,105,0,200,200);
}
