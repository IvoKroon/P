/// <reference path="gameObject.ts" />


abstract class Rocket extends GameObject {
    protected speed: number;
    protected sideSpeed: number;

    constructor(x: number, y: number, context: CanvasRenderingContext2D) {
        super(x, y, 30, 60, context);
        this.context = context;
    }

    private draw(): void {
        this.context.fillRect(this.x, this.y, this.w, this.h);
        this.context.fillStyle = 'yellow';
        this.context.fill();
    }

    public checkCollision(asteroid: Asteroid) {
        if (Util.RectCircleColliding(this, asteroid)) {
            console.log("COLLIDING!!!");
        }
    }

    public render(): void {
        this.draw();
    }

    abstract goLeft();
    abstract goRight();
    abstract actionKey();

    abstract move(): void;
}