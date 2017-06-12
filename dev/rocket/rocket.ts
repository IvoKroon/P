/// <reference path="../imageObject.ts" />

abstract class Rocket extends ImageObject{
    public hitBox:GameObject;
    public graphics:PIXI.Graphics;
    
    constructor(x:number, y:number,sprite:PIXI.Texture){
        super(sprite,x,y,40,60);
        let padding = this.width / 2;
        this.hitBox = new GameObject(this.x + padding / 2 , this.y, this.width - padding, this.height);
    }

    abstract move():void;
}
