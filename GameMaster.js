class GameMaster{
    constructor(context, startBudget = 5000, startCred, startViews, startLit){
        this.game = context;
        
        this.curBudget = startBudget;
        this.curCred = startCred;
        this.curViews = startViews;
        this.curLit = startLit;
    }
    
    update(){
        
    }
    
    affectBudget(changeAmt){
       //this.curBudget = this.curBudget + changeAmt;
    }
    
    affectCred(changeAmt){
        //this.curCred = this.clamp(this.curCred, changeAmt, 0, 100);
    }
    
    affectReadership(changeAmt){
        //this.curViews = this.curViews + changeAmt;
    }
    
    affectLiteracy(changeAmt){
        //this.curLit = this.clamp(this.curLit, changeAmt, 0, 100);
    }
}