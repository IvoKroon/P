class Partical extends PIXI.Graphics{

    private graphics:PIXI.Graphics;
    private color:number;
    private opacity:number;
    public game:Game;
    private radius:number;

    constructor(x:number, y:number, r:number,color:number,opacity:number){
        super();
        this.game = Game.getInstance();

        this.x = x;
        this.y = y;
        this.radius = r;
        
        this.color = color;
        this.opacity = opacity;

        this.draw();
        // this.displyGr
    }
    remove(){
        this.game.app.stage.removeChild(this);
    }

    draw(){
        this.lineStyle(0);
        this.beginFill(this.color,this.opacity);
        this.drawCircle(this.x, this.y,this.radius);
        this.endFill();
        this.game.app.stage.addChild(this);
    }
}