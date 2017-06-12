class KeyHandling implements Observable{
    public observers:Array<Observer>;

    constructor(){
        window.addEventListener("keydown", (e)=>this.keyDown(e));
        window.addEventListener("keyup", (e)=>this.keyUp(e));
        this.observers = new Array<Observer>();
    }

    public subscribe(o:Observer){
        this.observers.push(o);
    }

    public unsubscribe(o:Observer){
        for(let i = 0; i<this.observers.length; i++){
            if(this.observers[i] == o){
                this.observers.splice(i,1);
            }
        }
    }
    //fire this if left Key is hit
    public leftKey(keyUp:boolean){
         for(let o of this.observers){
            o.leftKeyHit(keyUp);
        }
    }
    //fire this if right Key is hit
    public rightKey(keyUp:boolean){
         for(let o of this.observers){
            o.rightKeyHit(keyUp);
        }
    }
    //fire this if the reload key is hit
    public reloadKey(keyUp:boolean){
        for(let o of this.observers){
            o.reloadKeyHit(keyUp);
        }
    }
    //Check what key there has been hitten
    //and fire that function
    private checkKey(e:KeyboardEvent,keyUp:boolean):void{
        switch(e.keyCode){
                case KeyBoard.LEFT:
                    this.leftKey(keyUp);
                    break;
                case KeyBoard.RIGHT:
                    this.rightKey(keyUp);
                    break;
                case KeyBoard.A:
                    this.leftKey(keyUp);
                    break;
                case KeyBoard.D:
                    this.rightKey(keyUp);
                   break;
                case KeyBoard.UP:
                    break;
                 case KeyBoard.W:
                    break;
                case KeyBoard.R:
                    this.reloadKey(keyUp);
                    break;
                default:
                    console.log("OTHER KEY" + e.keyCode);
                    break;
            }
        return null;
    }
    
    private keyDown(e:KeyboardEvent){
        this.checkKey(e,false);
    }

    private keyUp(e:KeyboardEvent){
        this.checkKey(e,true);
    }
}