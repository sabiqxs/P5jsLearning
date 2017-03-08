var paragraph;
function setup() {
    createCanvas(100, 100);
    background(0);
    // paragraph = select('#unicorn');
    // paragraph = select('p');
    // paragraph = selectAll('p');
    paragraph = selectAll('.rainbow');
    for (var i = 0; i < paragraph.length; i++){
        paragraph[i].style("font-size", "24pt");
    }


    button = select('#button');
    button.mousePressed(canvasBg);
}

function changeBackground() {
    paragraph.style("background-color", '#F0F')
}
function canvasBg() {
    background(random(255));

}