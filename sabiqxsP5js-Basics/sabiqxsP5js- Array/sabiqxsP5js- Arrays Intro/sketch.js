var nums = [100, 25, 46, 72];
var num = 23;
var words = ["rainbow", "heart", "purple", "friendship", "love"];
var index = 0;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    ellipse(300, 200, num, num);
    ellipse(200, 200, nums[2], nums[2]);

    fill(255);
    textSize(32);
    text(words[2], 12, 200);
    text(words[index], 350, 200);
}

function mousePressed() {
    // index = index +1;
    index = floor((random() * words.length));
    // if (index == words.length){
    //     index = 0;
    // }
    console.log(index);
}