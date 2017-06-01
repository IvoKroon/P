/// <reference path="gameObject.ts" />


class Background extends GameObject {
    private imageLink: String;
    private image: any;
    private speed: number;
    private game: Game;

    constructor(image: String, speed: number, context: CanvasRenderingContext2D) {
        super(0, 0, 400, 400, context);
        this.imageLink = image;
        this.speed = speed;
        this.game = Game.getInstance();
    }

    load() {
        this.image = <any>new Image();
        this.image.src = 'images/backgroundStar.png';

        this.image.onload = () => {
            this.render();
        };

    }

    move() {
        //reset 
        if (this.y >= 400) {
            this.y = 0;
        } else {
            this.y += this.speed;
        }
    }

    render() {
        this.move();
        this.context.drawImage(this.image, 0, this.y);
        this.context.drawImage(this.image, 0, this.y - 400);
    }

    setSpeed(newSpeed: number) {
        this.speed = newSpeed;
    }

}