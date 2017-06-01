class Falling extends Asteroid {
    public speed;

    constructor(context: CanvasRenderingContext2D) {
        super(100, 100, 20, 20, context);
        this.speed = 2;
    }

    move() {
        this.y++;
        this.draw();
    }
}