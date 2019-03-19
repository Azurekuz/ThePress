class GameMaster{
    constructor(context, startBudget = 5000, startCred, startViews, startLit){
        this.game = context;
        
        this.curBudget = startBudget;
        this.curCred = startCred;
        this.curViews = startViews;
        this.curLit = startLit;
    }
    
    /* This function will maintain a given number between a certain range.*/
    clamp(curNum, numChange,rMin, rMax){
        
    }
}