/// <reference path="gameObject.ts" />

abstract class Asteroid extends GameObject {
    abstract speed: number;
    private rotate: number;

    constructor(x: number, y: number, w: number, h: number, context: CanvasRenderingContext2D) {
        super(x, y, w, h, context);
        this.rotate = 10;
    }

    protected draw() {
        let centerX = this.w / 2 + this.x;
        let centerY = this.w / 2 + this.y;

        this.context.beginPath();
        this.context.arc(centerX, centerY, this.w, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'green';
        this.context.fill();
    }

    abstract move();

    //rotating
    drawRect() {
        this.incrementAngle();
        this.context.save();
        this.context.translate(this.w * 4, this.h * 4);
        this.context.rotate(this.convertToRadians(this.rotate));
        this.context.fillStyle = 'yellow';
        this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        this.context.restore();
    }
    //needed for rotating
    private incrementAngle() {
        this.rotate++;
        if (this.rotate > 360) {
            this.rotate = 0;
        }
    }
    //needed for rotating 
    //defrees to radians
    private convertToRadians(degree: number) {
        return degree * (Math.PI / 180);
    }

}