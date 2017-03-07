var canvas;
var bgColor;
var button;
var slider, nameP;
var nameInput;
function setup() {
    canvas = createCanvas(200, 200);
    canvas.mouseOver(overpara);
    canvas.mouseOut(outpara);
    canvas.mousePressed(changeColor);

    bgColor = color(200);
    nameP = createP('Your name!');
    button1 = createButton("Go");
    button1.mousePressed(changeColor);

    slider = createSlider(10, 100, 47);
    nameInput = createInput('type your name');
    
    nameP.mouseOver(overpara);
    nameP.mouseOut(outpara);
    
    nameInput.changed(updateText);
    // nameInput.input(updateText);
}

function updateText() {
    nameP.html(nameInput.value());
    
}
function overpara() {
    nameP.html('your mouse is over me');

}
function outpara() {
    nameP.html('your mouse is out');

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
  // nameP.html(input.value());
  text(nameInput.value(), 10, 20);

}