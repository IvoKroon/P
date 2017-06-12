/// <reference path="rocket.ts" />
/// <reference path="../keyhandling/keyboard.ts" />

class Flying extends Rocket implements Observer{
    private movingLeft:boolean = false;
    private movingRight:boolean = false;

    private sideSpeed:number;

    constructor(x:number,y:number){
        super(x,y,PIXI.loader.resources.rocket.texture);
        this.sideSpeed = 5;
    }

    leftKeyHit(keyUp:boolean){
        if(keyUp){
            this.movingLeft = false;
        }else{
            this.movingLeft = true;
        }
    }

    rightKeyHit(keyUp:Boolean){
        if(keyUp){
            this.movingRight = false;
        }else{
            this.movingRight = true;
        }
    }

    reloadKeyHit(){}
    
    goLeft(){
        this.x -= this.sideSpeed;
        this.hitBox.x -= this.sideSpeed;
    }
    goRight(){
        this.x += this.sideSpeed;
        this.hitBox.x += this.sideSpeed;
    }

    move(){
        this.reRender();

        if(this.movingLeft){
            this.goLeft();
        }else if(this.movingRight){
            this.goRight();
        }
    }
}
