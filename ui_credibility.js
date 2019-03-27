class ui_credibility{
    constructor(context, x, y, initCred = 50, spriteID, bWidth, bHeight){
        this.game = context;
        this.xLoc = x;
        this.yLoc = y;
        this.barWidth = bWidth;
        this.barHeight = bHeight;
        this.curCred = initCred;
        this.spriteID = spriteID;
        this.phaserText = null;
        this.phaserObject = null;
        this.phaserBarFill = null;
    }
    
    spawn(){
        this.phaserText = this.game.add.text(this.xLoc, this.yLoc, "Credibility: ", {fontFamily: "Calibri", color: "#000000", fontSize: 48});
        this.phaserText.setOrigin(0, 0.5);
        this.phaserText.depth = 52;
        
        this.phaserObject = this.game.add.sprite(this.xLoc  + 424, this.yLoc, this.spriteID);
        this.phaserObject.depth = 52;
        
        this.phaserBarFill = this.game.add.graphics();
        this.phaserBarFill.depth = 51;
        this.phaserBarFill.fillStyle(0x81554D, 0.9); 
        this.phaserBarFill.fillRect((this.xLoc + (232)), this.yLoc- (this.barHeight/2), ((this.curCred/100) * (this.barWidth)), this.barHeight);
        console.log(this.phaserBarFill);
    }
    
    despawn(){
        
    }
    
    destroy(){
        
    }
    
    changeCred(){
        
    }
    
    update(){
        this.phaserBarFill.fillStyle(0x81554D, 0.9);
    }
    
    /* This function will maintain a given number between a certain range.*/
    clamp(curNum, changeNum,rMin, rMax){
        if((curNum + changeNum >= rMin) && (curNum + changeNum <= rMax)){
            return curNum + changeNum;
        }else if((curNum + changeNum < rMin)){
            return rMin;
        }else if((curNum + changeNum > rMax)){
            return rMax;
        }
    }
}