/// <reference path="../imageObject.ts" />

class Background{
    private speed:number;
    private stars:Array<Star> = [];
    private game:Game;
    // private timer:number;

    constructor(speed:number, appWidth:number, appHeight:number){
        // super(0,0,appWidth,appHeight);
        //spawn 20 stars
        this.game = Game.getInstance();

        for(let i = 0; i < 40; i ++){
            this.addStars(
                Util.Random.random(10,this.game.app.renderer.width),
                Util.Random.random(10,this.game.app.renderer.height -10)
            );
        }
        console.log("loaded");
    }

    private addStars(x:number, y:number){
        let z = Util.Random.randomDecimal(0.1,0.6);
        let r = 5;
        this.stars.push(new Star(x,y,z,r));
    }

    private starSpawner(){
        //add star after every quarter of a second.
        if(Util.Timer.timer(this.game.timer,0.2)){
            this.addStars( Util.Random.random(-10,this.game.app.screen.width),
            0);
        }
    }

    move(){
        this.starSpawner();
        for(let i = 0; i < this.stars.length; i++){

            let star = this.stars[i];

            if(Util.Collision.hitBottom(star.y,this.game.app.renderer.height)){
                this.stars[i].remove();
                this.stars.splice(i,1);
            }
            star.move();
        }
    }
}
