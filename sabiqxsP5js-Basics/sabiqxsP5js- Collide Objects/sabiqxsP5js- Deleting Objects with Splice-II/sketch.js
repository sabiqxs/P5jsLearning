var bubbles = [];
function setup() {
    createCanvas(600, 400);
    for (var i = 0; i<4; i++){
        bubbles[i]= new Bubble(random(width), random(height));
    }
}


function draw() {
    background(0);
    for (var i = 0; i<bubbles.length; i++){
        bubbles[i].update();
        bubbles[i].display();
        for (var j = 0; j < bubbles.length; j++){
            if (i != j && bubbles[i].intersects(bubbles[j])){
                bubbles[i].changeColor();
                bubbles[j].changeColor();

            }
        }
    }




    // var d = dist (b1.x, b1.y, b2.x, b2.y);
    // if(d < b1.r + b2.r){
    //     b1.changeColor();
    //     b2.changeColor();
    // }
}

