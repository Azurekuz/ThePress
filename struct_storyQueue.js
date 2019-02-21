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
        for(var i = 0; i < this.queue.length; i += this.queue[i].size){
            if(this.queue[i].storyID.valueOf != storyID){
               tempArray.push(this.queue[i]);
            }
        }
        delete this.queue;
        this.queue = tempArray;
    }
}