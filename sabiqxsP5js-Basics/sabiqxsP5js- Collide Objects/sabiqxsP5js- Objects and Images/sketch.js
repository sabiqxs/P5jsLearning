var bubbles = [];
var balls = [];
function setup() {
    createCanvas(600, 400);
}
function preload() {
    for(var i = 0; i < 3; i++){
        balls[i] = loadImage('images/ball-' + i + '.jpg');
    }

}

function mousePressed() {
    var r = floor(random(0, balls.length));
    var b = new Bubble(mouseX, mouseY, balls[r]);
    bubbles.push(b);
}

function draw() {
    background(255);
    for(var i = bubbles.length - 1; i>=0; i--){
        bubbles[i].update();
        bubbles[i].display();
    }
}

