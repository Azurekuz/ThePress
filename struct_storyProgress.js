class struct_storyProgress{
    constructor(context, x, y, curProgress, maxProgress, spriteID, fillID, width, height){
        this.game = context; //Phaser reference
        this.xLocation = x; //X location of the progress bar
        this.yLocation = y; //Y location of the progress bar
        this.curProgress = curProgress; //Current progress
        this.maxProgress = maxProgress; //The goal/maximum amount of progress to be made. Changes according to the deadline (or is supposed to)
        this.spriteID = spriteID; //How does the bar look like?
        this.barFillID = fillID; //How does the thing filling the bar look like?
        this.isFinished = false; //Is the bar finished?
        this.width = width; //Width of the bar sprite.
        this.height = height; //Height of the bar sprite.
        
        this.phaserObject = null; //Phaser object of the bar
        this.barFill = null; //The Phaser object of the thing filling the bar
    }
    
    spawn(){
        /*this.barFill = this.game.add.image(this.xLocation, this.yLocation, 'barFill');
        this.barFill.depth = 100;*/
        this.barFill = this.game.add.graphics(); //So this is where I began experimenting with Phaser graphics and drawing. Oh boy.
        this.barFill.fillStyle(0xffc7c7, 0.9); //The color and opacity of the fill.
        this.barFill.fillRect(this.xLocation - (this.width/2) + 5, this.yLocation - (this.height/2), this.width-10, 0); //Make a rectangle
        this.barFill.depth = 100; //Set the rectangle's depth
        this.barFill.height = this.height * 0.5;
        this.phaserObject = this.game.add.image(this.xLocation, this.yLocation, 'progressBar'); //Add the bar outline
        this.phaserObject.depth = 101; //make sure the bar outline is above the bar fill.
    }
    
    despawn(){ //Remove the progress bar.
        this.barFill.destroy();
        this.phaserObject.destroy();
    }
    
    iterateProgress(progressSpeed = 1){ //The function in charge of having the progress slowly tick upwards toward the maximum.
        if(((this.curProgress + progressSpeed) <= this.maxProgress) && !this.isFinished){ //If we haven't reached the maximum and the story isn't done
            this.curProgress = this.curProgress + progressSpeed; //Increment overall progress
            this.setPercent(this.curProgress/this.maxProgress) //Set the bar's percentage and fill.
        }
        if(this.curProgress >= this.maxProgress){ //If we have reached the bar's maximum
            this.isFinished = true; //THen we have finished the story.
            this.finishStory(); //So finish it off.
        }
    }
    
    update(){ //Bar's update function
        if(!this.isFinished){    
            this.iterateProgress();
        }else{
            
        }
    }
    
    setPercent(percent){ //The functon in charge of setting the bar's visuals according to what percent full it is.
        this.barFill.clear();
        this.barFill.fillRect(this.xLocation - (this.width/2) + 5, (this.yLocation - (this.height/2)), this.width-10, (this.height - 5)*percent);
    }
    
    finishStory(){ //So, the story is done. Here is a test function making sure stuff happens when the story is done. This will be implemented differently.
        console.log("Story finished!");
        this.game.budget = this.game.budget + 15;
        this.game.credit = this.game.credit - 5;
    }
}