class struct_storyProgress{
    constructor(context, x, y, curProgress, maxProgress, spriteID, fillID, width, height){
        this.game = context;
        this.xLocation = x;
        this.yLocation = y;
        this.curProgress = curProgress;
        this.maxProgress = maxProgress;
        this.spriteID = spriteID;
        this.barFillID = fillID;
        this.isFinished = false;
        this.width = width;
        this.height = height;
        
        this.phaserObject = null;
        this.barFill = null;
    }
    
    spawn(){
        /*this.barFill = this.game.add.image(this.xLocation, this.yLocation, 'barFill');
        this.barFill.depth = 100;*/
        this.barFill = this.game.add.graphics();
        this.barFill.fillStyle(0xffc7c7, 0.9);
        this.barFill.fillRect(this.xLocation - (this.width/2) + 5, this.yLocation - (this.height/2), this.width-7, 0);
        this.barFill.depth = 100;
        this.barFill.height = this.height * 0.5;
        this.phaserObject = this.game.add.image(this.xLocation, this.yLocation, 'progressBar');
        this.phaserObject.depth = 101;
    }
    
    despawn(){
        this.barFill.destroy();
        this.phaserObject.destroy();
    }
    
    iterateProgress(progressSpeed = 1){
        if(((this.curProgress + progressSpeed) <= this.maxProgress) && !this.isFinished){
            this.curProgress = this.curProgress + progressSpeed;
            this.setPercent(this.curProgress/this.maxProgress)
        }
        if(this.curProgress >= this.maxProgress){
            this.isFinished = true;
            this.finishStory();
        }
    }
    
    update(){
        if(!this.isFinished){    
            this.iterateProgress();
        }else{
            
        }
    }
    
    setPercent(percent){
        this.barFill.clear();
        this.barFill.fillRect(this.xLocation - (this.width/2) + 5, (this.yLocation - (this.height/2)), this.width-7, (this.height - 5)*percent);
    }
    
    finishStory(){
        console.log("Story finished!");
        this.game.budget = this.game.budget + 15;
        this.game.credit = this.game.credit - 5;
    }
}