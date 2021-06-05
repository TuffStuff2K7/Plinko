class Particle {
    constructor(x,y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    calc() {
        var x = this.body.position.x;

        if(x > 10 && x < 80){
            score+=scores[0];
        }
        else if(x > 90 && x < 160){
            score+=scores[1];
        }
        else if(x > 170 && x < 240){
            score+=scores[2];
        }
        else if(x > 250 && x < 320){
            score+=scores[3];
        }
        else if(x > 330 && x < 400){
            score+=scores[4];
        }
        else if(x > 410 && x < 480){
            score+=scores[5];
        }
        else if(x > 490 && x < 560){
            score+=scores[6];
        }
        else if(x > 570 && x < 640){
            score+=scores[7];
        }
        else if(x > 650 && x < 720){
            score+=scores[8];
        }
        else if(x > 730 && x < 800){
            score+=scores[9];
        }
    }

};