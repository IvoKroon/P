/// <reference path="vector.ts" />

class GameObject extends Vector{
    public w:number;
    public h:number;

    constructor(x:number, y:number, w:number, h:number){
        super(x,y);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}