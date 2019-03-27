class ui_budget{
    constructor(context, x, y, initBudget, initRent){
        this.game = context;
        this.xLoc = x;
        this.yLoc = y;
        this.curBudget = initBudget;
        this.curRent = initRent;
        this.phaserText = null;
        this.needsUpdate = false;
        this.income = 0;
    }
    
    spawn(){
        this.phaserText = this.game.add.text(this.xLoc, this.yLoc, "Budget: $" + this.curBudget.toString(), {fontFamily: "Calibri", color: "#000000", fontSize: 48});
        this.phaserText.depth = 52;
        console.log(this.phaserText);
    }
    
    despawn(){
        this.phaserText.destroy();
        this.phaserText = null;
    }
    
    destroy(){
        if(this.phaserText != null){
            this.phaserText.destroy();
            this.phaserText = null;
        }
    }
    
    update(){
        if(this.needsUpdate){
           this.needsUpdate = false;
            this.updateUI();
        }
    }
    
    deductRent(){
        this.curBudget = this.curBudget - this.curRent;
        this.needsUpdate = true;
    }
    
    resetRent(){
        this.curRent = 0;
    }
    
    addRent(addAmt){
        this.curRent = this.curRent + addAmt;
    }
    
    //Change budget function
    chgBudget(amt){
        this.curBudget = this.curBudget + amt;
        this.needsUpdate = true;
    }
    
    updateUI(){
        this.phaserText.text = "Budget: $" +  this.curBudget.toString();
    }
}