/// <reference path="rocket.ts" />


class Standing extends Rocket {
    constructor(x: number, y: number, context: CanvasRenderingContext2D) {
        super(x, y, context);
        this.sideSpeed = 0;
        this.speed = 0;
    }

    goLeft() { console.log("GO LEFT") };
    goRight() { console.log("GO RIGHT") };
    actionKey() { };


    render() {
        super.render();
    }

    move() { }
}