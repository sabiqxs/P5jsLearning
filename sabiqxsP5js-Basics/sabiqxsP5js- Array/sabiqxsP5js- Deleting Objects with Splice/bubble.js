/**
 * Created by sabiqxs on 05/03/2017.
 */

function Bubble(x, y) {
    this.x = x;
    this.y = y;
    this.lifespan = 255;

    this.display = function () {
        // stroke(255);
        noStroke();
        fill(255, this.lifespan);
        ellipse(this.x, this.y, 24, 24);
    };

    this.isFinished = function () {
        return this.lifespan < 0;
        //--atau
        // if(this.lifespan < 0){
        //     return true;
        // }else{
        //     return false;
        // }
    };

    this.update = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        //this.lifespan--;
        this.lifespan = this.lifespan - 1;
    };

}
