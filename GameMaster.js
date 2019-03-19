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
    
    affectBudget(changeAmt){
        this.curBudget = this.curBudget + changeAmt;
    }
    
    affectCred(changeAmt){
        this.curCred = this.clamp(this.curCred, changeAmt, 0, 100);
    }
    
    affectReadership(changeAmt){
        this.curViews = this.curViews + changeAmt;
    }
    
    affectLiteracy(changeAmt){
        this.curLit = this.clamp(this.curLit, changeAmt, 0, 100);
    }
}