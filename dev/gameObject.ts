class GameObject {
    public x: number;
    public y: number;
    public w: number;
    public h: number;
    public context: CanvasRenderingContext2D;

    constructor(x: number, y: number, w: number, h: number, context: CanvasRenderingContext2D) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.context = context;
    }
}