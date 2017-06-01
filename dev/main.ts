class Game {
    public static instance: Game;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    private keyHandling: KeyHandling;

    private rocket: Rocket;
    private background: Background;

    private asteroid: Asteroid;


    //loader
    public loader() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = <any>this.canvas.getContext('2d');
        this.rocket = new Flying(200, 300, this.context);
        this.asteroid = new Falling(this.context);

        this.background = new Background("BLA", 2, this.context);
        this.background.load();

        this.keyHandling = new KeyHandling(this.rocket);

        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.loader();
        }
        return Game.instance;
    }

    gameLoop() {
        this.context.clearRect(0, 0, 400, 400);
        this.background.render();
        this.asteroid.move();

        this.rocket.render();
        this.rocket.checkCollision(this.asteroid);
        this.keyHandling.doAction();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// load
window.addEventListener("load", function () {
    Game.getInstance();
});