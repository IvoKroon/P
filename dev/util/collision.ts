namespace Util{
    export class Collision{
        public static collidingRects (g:GameObject,g2:GameObject){
        if (g.x < g2.x + g2.w &&
            g.x + g.w > g2.x &&
            g.y < g2.y + g2.h &&
            g.h + g.y > g2.y) {
                // collision detected!
                return true;
            }
            
        return false;
        }
        public static hitBottom(y:number, bottom:number){
            if(y >= bottom){
                return true
            }
            return false;
        }

        public static leftSide(game:Game, rocket:Rocket){
            if(rocket.x <= 0){
                return true;
            }
            return false;
        }

        public static rightSide(game:Game, rocket:Rocket){
            if(rocket.x >= game.app.screen.width - rocket.width){
                return true;
            }
            return false;
        }
    }
}