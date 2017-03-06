var buble = {
    x: 300,
    y: 200,
    display: function () {
        stroke(255);
        strokeWeight(4);
        fill(200, 100, 100);
        ellipse(this.x, this.y, 50, 50);

    },
    move: function () {
        buble.x = buble.x + random(-2, 2);
        buble.y = buble.y + random(-2, 2);
    }
};

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    buble.move();
    buble.display();
}
