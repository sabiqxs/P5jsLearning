var bubbles = [];
function setup() {
    createCanvas(600, 400);
    for (var i= 0; i< 400; i++){
        bubbles[i] = new Bubble();


    }

}

function draw() {
    background(0);
    for(var i = 0; i < bubbles.length; i++){
        bubbles[i].move();
        bubbles[i].display();
    }

}

function Bubble() {
    this.x = random(0, width);
    this.y = random(0, height);

    this.display = function () {
        stroke(255);
        fill(random(255), random(20), random(200), 90);
        ellipse(this.x, this.y, 24, 24);
    };

    this.move = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}
