class Spawner{
    private game:Game;

    private startSpeed:number;
    private MAXMULTIPLIER:number = 3;

    constructor(){
        this.game = Game.getInstance();
        this.startSpeed = this.game.gameSpeed;
    }

    public spawn(){
        let spawnRateTimer = 1 / this.game.multiplier;
        if(Util.Timer.timer(this.game.timer,0.3)){
            // let rate = 1;
            let rate = Util.Random.random(1,this.game.multiplier);
            for(let i = 0; i < rate; i++){
                this.addAsteroid();
            }
        }
        //make the multiplier go Up.
        if(Util.Timer.timer(this.game.timer,1)){

            if(this.game.multiplier <= this.MAXMULTIPLIER - 0.1){
                this.game.multiplier = Number((this.game.multiplier += 0.1).toFixed(2));
            }

            this.game.gameSpeed = this.startSpeed * this.game.multiplier;
        }
    }

    private addAsteroid(){
        this.game.asteroids.push(new Falling(Util.Random.random(0,this.game.app.screen.width), -200));
    }
}