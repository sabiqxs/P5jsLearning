var canvas;
var bgColor;
var button1, button2, button3;
function setup() {
    canvas = createCanvas(200, 200);
    bgColor = color(200);
    button1 = createButton("Button 1");
    button2 = createButton("Button 2");
    button1.mousePressed(changeColor);
    button2.mousePressed(changeColor);
}

function changeColor() {
    bgColor = color(random(255));
}

// function mousePressed() {
//     changeColor();
//
// }

function draw() {
    // clear();
  background(bgColor);
  fill(255, 0, 0);
  rect(0, 100, 50, 50);

}