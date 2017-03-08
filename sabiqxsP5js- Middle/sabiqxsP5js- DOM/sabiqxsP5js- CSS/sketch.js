var canvas;
var bgColor;
var button1, button2;
var slider, nameP;
function setup() {
    canvas = createCanvas(200, 200);
    canvas.mousePressed(changeColor);

    bgColor = color(200);
    nameP = createP('Your name!');
    nameP.style("background-color", "pink");
    button1 = createButton("Change Color");
    button2 = createButton("Change Style");
    button1.mousePressed(changeColor);
    button2.mousePressed(changeStyle);

    slider = createSlider(10, 100, 47);
}

function updateText() {
    nameP.html(nameInput.value());
    
}

function changeColor() {
    bgColor = color(random(255));

}function changeStyle() {
    nameP.style("background-color", "purple");
    nameP.style("padding", "24px");
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

}