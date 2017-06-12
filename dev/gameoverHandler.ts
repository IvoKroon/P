class GameOverHandler implements Observer{
    private game:Game;

    constructor(){
        this.game = Game.getInstance();
    }

    reloadKeyHit(hitKey:boolean){
        if(hitKey){
            this.game.setup();
        }
    }
    
    leftKeyHit(hitKey:boolean){}
    rightKeyHit(hitKey:boolean){}
}