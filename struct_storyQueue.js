class struct_storyQueue{
    constructor(context, maxStory){
        this.game = context;
        this.curCap = 0;
        this.maxCap = maxStory;
        this.queue = []
    }
    
    addStory(newStory){
        if((newStory.size + this.queue.length) <= this.maxCap){
           this.queue.push(newStory);
        }else{
            return false;
        }
    }
    
    isQueueFull(newStory){
        if((newStory.size + this.queue.length) <= this.maxCap){
            return false;
        }else{
            return true;
        }
    }
    
    removeStory(storyID){
        var tempArray = [];
        for(var i = 0; i < this.queue.length; i += 1){
            console.log(this.queue);
            if(this.queue[i].description != storyID){
               tempArray.push(this.queue[i]);
            }else{
                delete this.queue[i]
            }
        }
        delete this.queue;
        this.queue = tempArray;
    }
    
    workStories(){
        for(var i = 0; i < this.queue.length; i += 1){
            if(!this.queue[i].progress.isFinished){
                this.queue[i].progress.iterateProgress(10);
            }else{
                this.queue[i].progress.despawn();
                delete this.queue[i].progress;
                this.removeStory(this.queue[i].description);
                this.game.ui_budget.text = "Budget: " + this.game.budget.toString();
                this.game.ui_credibility.text = "Credit: " + this.game.credit.toString();
                console.log("DELETED")
            }
        }
    }
}