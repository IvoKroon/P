class Vector{
    public x:number;
    public y:number;
    public game:Game;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
        this.game = Game.getInstance();
    }
}