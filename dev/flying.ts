/// <reference path="rocket.ts" />


class Flying extends Rocket {

    constructor(x: number, y: number, context: CanvasRenderingContext2D) {
        super(x, y, context);

        this.speed = 2;
        this.sideSpeed = 3;
    }
    render() {
        super.render();
    }
    goLeft() {
        this.x -= this.sideSpeed;
    }
    goRight() {
        this.x += this.sideSpeed;
    }
    actionKey() { }
    move() { }
}