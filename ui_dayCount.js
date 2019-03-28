class ui_dayCount{
    constructor(context, x, y, initDay){
        this.game = context;
        this.xLoc = x;
        this.yLoc = y;
        this.curDay = initDay;
        
        this.phaserText = null;
    }
    
    spawn(){
        this.phaserText = this.game.add.text(this.xLoc, this.yLoc, "Day " + this.curDay.toString(), {fontFamily: "lores-9-narrow, Calibri, Arial, Times New Roman", color: "#000000", fontSize: 48});
        this.phaserText.depth = 52;
    }
    
    despawn(){
        this.phaserText.destroy();
    }
    
    updateText(){
        this.phaserText.text = "Day " + this.curDay.toString();
    }
    
    adjustDay(amt){
        this.curDay = this.curDay + amt;
        this.updateText();
    }
}