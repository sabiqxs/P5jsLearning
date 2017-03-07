var canvas;
var bgColor;
var button;
var slider, input, nameP;
function setup() {
    canvas = createCanvas(200, 200);
    bgColor = color(200);
    nameP = createP('Your name!');
    button1 = createButton("Go");
    button1.mousePressed(changeColor);

    slider = createSlider(10, 100, 47);
    input = createInput('type your name');
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
  ellipse(100, 100, slider.value(), slider.value());
  nameP.html(input.value());
  text(input.value(), 10, 20);

}