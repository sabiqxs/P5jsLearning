var paragraph, textbox, slider;

function setup() {
    noCanvas();
    paragraph = createP('starting text');
    textbox = createInput('Enter Text');
    slider = createSlider(10, 64, 16);
    slider.input(updateSize);
    textbox.input(updateText);
}

function updateText() {
    paragraph.html(textbox.value());
}

function updateSize() {

    paragraph.style("font-size", slider.value() + "pt");

}