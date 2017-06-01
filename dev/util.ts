class Util {

    public static RectCircleColliding(gameObject1: GameObject, gameObject2: GameObject) {
        var distX = Math.abs(gameObject1.x - gameObject2.x - gameObject2.w / 2);
        var distY = Math.abs(gameObject1.y - gameObject2.y - gameObject2.h / 2);

        if (distX > (gameObject2.w / 2 + gameObject1.w)) { return false; }
        if (distY > (gameObject2.h / 2 + gameObject1.w)) { return false; }

        if (distX <= (gameObject2.w / 2)) { return true; }
        if (distY <= (gameObject2.h / 2)) { return true; }

        var dx = distX - gameObject2.w / 2;
        var dy = distY - gameObject2.h / 2;

        return (dx * dx + dy * dy <= (gameObject1.w * gameObject1.w));
    }

    public static squareNumber(number: number): number {
        return number * number;
    }
}