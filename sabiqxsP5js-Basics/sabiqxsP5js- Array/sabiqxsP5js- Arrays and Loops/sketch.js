var nums = [100, 25, 46, 72];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    // fill(255);

    for (var i = 0; i < 4; i++){
        stroke(255);
        fill(50);
        // noFill();
        ellipse(i * 100 + 100, 200, nums[i], nums[i]);
    }
    // ellipse(100, 200, nums[0], nums[0]);
    // ellipse(200, 200, nums[1], nums[1]);
    // ellipse(300, 200, nums[2], nums[2]);
    // ellipse(400, 200, nums[3], nums[3]);

}
