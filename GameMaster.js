class GameMaster{
    constructor(context, startBudget = 5000, startCred, startViews, startLit){
        this.game = context;
        this.game.sfxDone = this.game.sound.add('sfxDone');
        this.storyCollection = new struct_pitchList();
        this.salesCollection = new struct_salesList();
        
        this.grp_departments = this.game.add.group(); //This is the Phaser group for sprites representing offices and departments like the Office or Ad Sales
        this.grp_desks = this.game.add.group(); //This is the Phaser group for news desk sprites
        this.grp_workers = this.game.add.group();  //The Phaser group for workers, although we probably aren't going to be using this.
        this.notifications = new sys_notify(this.game);
        this.officeDesks = new struct_deskSet(this.game, 873, 1001, 3, 3, 310, 210, 295, 201, null, 3, 3); 
        
        this.animComp = new AnimComp(this.game);
        
        this.curBudget = startBudget;
        this.curCred = startCred;
        this.curViews = startViews;
        this.curLit = startLit;
        
        this.isDone = false;
        this.pitchInterval = 0;
    }
    
    update(){
        if(this.game.time.now - this.pitchInterval >= 15000){
            this.checkAll();
            if(!this.isDone){
                if(!this.storyCollection.isDone){
                    this.getRandReporter().pitch(this.pushPitch());
                }
            }
            this.pitchInterval = this.game.time.now;
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
    
    clamp(curNum, adjNum, min, max){
        if(curNum + adjNum >= max){
            return max;
        }else if(curNum + adjNum <= min){
            return min;
        }else{
            return (curNum + adjNum)
        }
    }
    
    getRandReporter(){
        var randDesk = this.officeDesks.deskArray[Math.floor(Math.random()*this.officeDesks.deskArray.length)];
        console.log();
        if(randDesk.workingReporter == null){
            while(randDesk.workingReporter == null){
                randDesk = this.officeDesks.deskArray[Math.floor(Math.random()*this.officeDesks.deskArray.length)];
            }
        }
        console.log(randDesk.workingReporter);
        return randDesk.workingReporter;
    }
    
    pushPitch(){
        var curPitch = this.storyCollection.pitchArray[Math.floor(Math.random()*this.storyCollection.length)];
        if(curPitch.pitched){
            while(curPitch.pitched){
                curPitch = this.storyCollection.pitchArray[Math.floor(Math.random()*this.storyCollection.length)];      
            }
        }
        
        return curPitch;
    }
    
    pushSale(){
        var curSale = this.salesCollection.pitchArray[Math.floor(Math.random()*this.salesCollection.length)];
        if(curSale.pitched){
            while(curSale.pitched){
                curSale = this.salesCollection.pitchArray[Math.floor(Math.random()*this.salesCollection.length)];      
            }
        }
        
        return curSale;
    }
    
    checkAll(){
        this.storyCollection.checkAll();
        this.salesCollection.checkAll();
        if(this.storyCollection.isDone && this.salesCollection.isDone){
           this.isDone = true;
        }
    }
}