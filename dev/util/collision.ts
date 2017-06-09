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
    }
}