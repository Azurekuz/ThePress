class struct_storyQueue{ //This keeps track of the stories a given reporter is working on.
    constructor(context, maxStory){
        this.game = context; //Phaser game reference.
        this.curCap = 0; //How many slots are filled.
        this.maxCap = maxStory; //Maximum number of slots inthis queue/
        this.queue = [] //The actual queue, which is really an array.
    }
    
    addStory(newStory){ //Add a new story to the queue
        if(!this.isQueueFull(newStory)){ //if adding the given story doesn't go over the queue capacity
           this.queue.push(newStory); //Then add it to the array.
        }else{
            return false; //Otherwise don't.
        }
    }
    
    isQueueFull(newStory){ //Check to see if the queue is full.
        if((newStory.size + this.queue.length) <= this.maxCap){
            return false;
        }else{
            return true;
        }
    }
    
    removeStory(storyID){ //Remove a story from the array.
        var tempArray = []; //Temporary array that will become the new story queue (minus the removed story).
        for(var i = 0; i < this.queue.length; i += 1){ //Go through the queue
            console.log(this.queue);
            if(this.queue[i].description != storyID){ //If the descriptions do not match
               tempArray.push(this.queue[i]); //Add it to the new array
            }else{
                delete this.queue[i] //Otherwise delete that object out of existence.
            }
        }
        delete this.queue; //Delete the current story queue
        this.queue = tempArray; //Replace it with the temp array.
    }
    
    workStories(){ //Basically the update loop for the storyQueue.
        for(var i = 0; i < this.queue.length; i += 1){ //Go through the queue
            if(!this.queue[i].progress.isFinished){ //If the current story ain't done.
                this.queue[i].progress.iterateProgress(1); //Then make some progress.
            }else{ //Otherwise...
                this.queue[i].progress.despawn(); //Make the progress bar despawn
                delete this.queue[i].progress; //Delete the progress structure
                this.removeStory(this.queue[i].description); //Remove the story from the queue.
                
                //Just a test to change some variables.
                this.game.ui_budget.text = "Budget: " + this.game.budget.toString();
                this.game.ui_credibility.text = "Credit: " + this.game.credit.toString();
                console.log("DELETED")
            }
        }
    }
}