/// <reference path="rocket.ts" />

class Explode extends Rocket{
    constructor(x:number,y:number){
        //Build a small hack for showing animation
        //the Texture is empty and will show nothing
        super(x,y,null);
        //instead we load the animation
        this.showAnimation();

    }

    // Build the spritesheet animation.
    showAnimation(){
        var explosionTextures = [],i;
        //Get all the different pictures from the sprite sheet and push them in the array.
        for (i = 0; i < 6; i++) {
            console.log(i);
            var texture = PIXI.Texture.fromFrame('sprites_0' + (i + 1 ) + '.png');
            explosionTextures.push(texture);
        }
        // build the animated sprite
        var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);
        explosion.loop = false;
        explosion.animationSpeed = 0.3;

        explosion.x = this.x + 15;
        explosion.y = this.y + 15;

        explosion.anchor.set(0.5);
        explosion.scale.set(2);
        //Start at the beginning
        explosion.gotoAndPlay(0);

        //When completed just remove it
        explosion.onComplete = ()=>{
            this.game.app.stage.removeChild(explosion);
        }

        this.game.app.stage.addChild(explosion);

    }

    move(){}
}