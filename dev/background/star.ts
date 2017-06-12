/// <reference path="partical.ts" />

class Star extends Partical{
    private z:number;
    constructor(x:number,y:number,z:number, r:number){
        super(x,y,r,0xFFFFFF,z);
        this.z = z;

    }

    move(){
        //calc the speed
        //far stars 0.1 are slower then near stars 0.5
        this.y += this.z * this.game.gameSpeed;
        // this.draw();
    }

}