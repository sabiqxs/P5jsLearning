/**
 * Created by sabiqxs on 05/03/2017.
 */

function Bubble(x, y) {
    this.x = x;
    this.y = y;

    this.display = function () {
        stroke(255);
        fill(random(255), random(20), random(200), 90);
        ellipse(this.x, this.y, 24, 24);
    };

    this.move = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}
