function Throbber(cx, cy, n, s, imgFile) {
	this.center = new p5.Vector(cx, cy);
	this.atoms = [];
	this.img = loadImage(imgFile);
	for(var i = 0; i < n; i++) {
		this.atoms.push(new p5.Vector(Math.sin((i/n) * TWO_PI), Math.cos((i/n) * TWO_PI)));
	}
	this.update = function(t) {
		// rotate((t / this.atoms.length) * 1);
		rotate(t);
		true;
	}
	this.display = function(t) {
		translate(this.center.x, this.center.y);
		this.update(t);
		for(var i in this.atoms) {
			image(this.img, this.atoms[i].x * s, this.atoms[i].y * s);
		}
	}
}

var throbber;
var time = 0;
var timeIncrement = 4;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	angleMode(DEGREES);
	imageMode(CENTER);
	throbber = new Throbber(window.innerWidth/2, window.innerHeight/2, 8, 30, "winnieSpin.png");
}

function draw() {
	background("white");
	throbber.display(time);
	if(time % 360 == 0) {
		console.log("🎩 ");
	}
	time = time + timeIncrement;
}
