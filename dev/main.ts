/// <reference path="keyhandling/keyboard.ts" />


class Game {
    public static instance:Game;
    public app:PIXI.Application;
    public timer:number = 1;

    private background:Background;

    private rocket:Rocket;
    private spawner:Spawner;
    public asteroids:Array<Asteroid>;

    private keyHandling:KeyHandling;

    public gameSpeed:number = 4;
    private scoreText:TextHandler;

    public multiplier:number;
    private score:number = 0;

    private gameOver:Boolean = false;

    private gameOverHandler:GameOverHandler;

    private gameOverText:TextHandler;
    private extraInfo:TextHandler;


    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
            Game.instance.preloader();
        }
        return Game.instance;
    }
    //preloading the images
    //after that load the game.
    private preloader():void{
        PIXI.loader.add('astroid', 'images/astroid.png')
                    .add('rocket', 'images/rocket.png')
                    .add('rocketexplode', 'images/explosion.png')
                    .add('explode', 'images/sprites.json');
        PIXI.loader.load(() => this.loader());
    }

    //loader - load the other stuff.
    public loader(){
        this.app = new PIXI.Application(800, 600, {backgroundColor : 0x000000});
        document.body.appendChild(this.app.view);

        this.setup();

        this.spawner = new Spawner();
        requestAnimationFrame(() => this.gameLoop());
    }

    //we need this setup function for reloading the game.
    setup(){
        //remove all the childs
        if(this.gameOver){
            for (var i = this.app.stage.children.length - 1; i >= 0; i--) {	this.app.stage.removeChild(this.app.stage.children[i]);};
            this.gameOver = false;
            this.keyHandling.unsubscribe(this.gameOverHandler);
        }
        this.multiplier = 1;
        this.score = 0;
        this.background = new Background(2,this.app.screen.width,this.app.screen.height);
        // We need some Astroids to fall at the beginning.
        this.asteroids = new Array<Asteroid>();
        //spawn the astroids.
        for(let i = 0; i<3;i++){
            this.asteroids.push(new Falling(Util.Random.random(0, this.app.screen.width),-50));
        }
        //This is th player
        this.rocket = new Flying(this.app.screen.width / 2,this.app.screen.height - 100);
   
        //The Player needs keyhandeling so we subscibe to it!
        this.keyHandling = new KeyHandling();
        this.keyHandling.subscribe(<Flying>this.rocket);

        //Show Score
        this.scoreText = new TextHandler("Score : 1",20,"#000000",this.app.screen.width/2,20);
    }

    scoreHandler(){
        if(Util.Timer.timer(this.timer,1)){
            this.score += this.multiplier;
        }
        this.scoreText.setText("Score : " + Number(this.score).toFixed(0));
    }

    gameLoop(){
        if(!this.gameOver){
            this.background.move();
            this.spawner.spawn();

            for(let asteroid of this.asteroids){
                if(Util.Collision.collidingRects(asteroid.hitBox, this.rocket.hitBox)){
                    this.loadGameOver();
                }
                asteroid.move();
            }
            this.rocket.move();

            this.scoreHandler();
            this.scoreText.reRender();
            
            this.app.renderer.render(this.app.stage);
            this.timer++;
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    private loadGameOver(){
        this.gameSpeed = 0;
        this.rocket.remove();
        //load the new keyHandling
        this.keyHandling.unsubscribe(<Flying>this.rocket);
        this.gameOverHandler = new GameOverHandler();
        this.keyHandling.subscribe(this.gameOverHandler);

        this.rocket = new Explode(this.rocket.x, this.rocket.y);
        this.gameOver = true;
        this.gameOverText = new TextHandler("GAME OVER",40,"#000000",this.app.screen.width/2,this.app.screen.height/2);
        this.extraInfo = new TextHandler("Press R to restart",20,"#000000",this.app.screen.width/2,this.app.screen.height/2 + 50);
        
    }
}

// load
window.addEventListener("load", function() {
    Game.getInstance();
});
