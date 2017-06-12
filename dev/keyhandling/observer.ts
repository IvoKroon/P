interface Observer{
    // notify(keyHit:Array<KeyBoard>):void;
    leftKeyHit(keyUp:boolean):void;
    rightKeyHit(keyUp:boolean):void;
    reloadKeyHit(keyUp:boolean):void;
}