class ui_viewers{
    constructor(context, xLoc, yLoc, initView = 0){
        this.game = context;
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.curViewers = initView;
        this.targetViewers = this.curViewers;
        this.rngRange = [1, 3];
        
        this.phaserText = null;
        
        this.isActive = false;
    }
    
    update(){
        if(this.curViewers != this.targetViewers){
           if(this.curViewers < this.targetViewers){
              this.adjustCurrent(Math.floor((Math.random()*this.rngRange[1])+this.rngRange[0]));
            }
            if(this.curViewers > this.targetViewers){
               this.adjustCurrent(Math.floor(-(Math.random()*this.rngRange[1])+this.rngRange[0]));
            }
            this.updateText();
        }
    }
    
    spawn(){
        this.isActive = true;
        this.phaserText = this.game.add.text(this.xLoc, this.yLoc, "Readers: " + this.curViewers.toString(), {fontFamily: "lores-9-narrow, Calibri, Arial, Times New Roman", color: "#000000", fontSize: 36});
        this.phaserText.depth = 52;
    }
    
    despawn(){
        this.phaserText.destroy();
        this.isActive = false;
    }
    
    updateText(){
        this.phaserText.text = "Readers: " + this.curViewers.toString()
    }
    
    changeTarget(newTarget){
        this.targetViewers = newTarget;
    }
    
    adjustTarget(adjAmt){
        this.targetViewers = this.targetViewers + adjAmt;
    }
    
    adjustCurrent(adjAmt){
        this.curViewers = this.curViewers + adjAmt;
    }
}