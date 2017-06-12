class TextHandler extends Vector{
    private style:PIXI.TextStyle;
    private text:PIXI.Text;
    private fontSize:number;
    private color:string;
    private textString:string;

    constructor(text:string, fontSize:number, color:string, x:number, y:number){
        super(x,y);
        this.color = color;
        this.fontSize = fontSize;
        this.textString = text;
        this.init();
        this.game = Game.getInstance();
        this.render();
    }

    private init(){
         this.text = new PIXI.Text(this.textString, {
            fontWeight: 'bold',
            fontSize: this.fontSize,
            fontFamily: 'Arial',
            fill: '#FFFFFF',
            align: 'center',
        });
        this.text.anchor.set(0.5);
        this.text.x = this.x;
        this.text.y = this.y;

    }
    private remove(){
        this.game.app.stage.removeChild(this.text); 
    }

    private render(){
       this.game.app.stage.addChild(this.text); 
    }

    public reRender(){
        this.remove();
        this.render();
    }
    public setText(text:string):void{
        this.text.text = text;
    }
}