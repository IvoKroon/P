class KeyHandling {
    // private goLeft:Function;
    // private goRight:Function; 
    private rocket: Rocket;
    private holdingKeys
    private left: Boolean;
    private right: Boolean;

    constructor(rocket: Rocket) {
        this.rocket = rocket;

        document.addEventListener("keydown", (e) => this.keyDown(e));
        document.addEventListener("keyup", (e) => this.keyUp(e));
    }

    doAction() {
        if (this.left) {
            this.rocket.goLeft();
        }

        if (this.right) {
            this.rocket.goRight();
        }
    }

    keyDown(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 37:
                this.left = true;
                break;
            case 65:
                this.left = true;
                break;
            case 39:
                this.right = true;
                break;
            case 68:
                this.right = true;
                break;

            default:
                console.log("OTHER KEY" + e.keyCode);
                break;
        }
    }

    keyUp(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 37:
                this.left = false;
                break;
            case 65:
                this.left = false;
                break;
            case 39:
                this.right = false;
                break;
            case 68:
                this.right = false;
                break;

            default:
                console.log("OTHER KEY" + e.keyCode);
                break;
        }
    }

}