class ui_credibility{
    constructor(context, x, y, initCred, spriteID){
        this.game = context;
        this.xLoc = x;
        this.yLoc = y;
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
    }
    
    despawn(){
        
    }
    
    destroy(){
        
    }
    
    changeCred(){
        
    }
    
    update(){
        
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