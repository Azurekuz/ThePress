class obj_reporter{
    constructor(context, xLoc, yLoc, width, height, repName, spriteID, maxStory = 2){
        this.game = context;
        this.name = repName;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.width = width;
        this.height = height;
        this.spriteID = spriteID;
        this.maxStorySlots = maxStory;
        this.needsNotify = false;
        this.storyPitch = null;
        
        this.storyQueue = new struct_storyQueue(this.game, this.maxStorySlots);
        
        this.phaserObject = null;
    }
    
    spawn(){
        this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, this.spriteID);
        this.phaserObject.objRef = this;
        this.game.grp_workers.add(this.phaserObject);
        this.phaserObject.body.immovable = true;
    }
    
    despawn(){
        this.phaserObject.kill();
    }
    
    pitch(story){
        this.storyPitch = story;
        this.game.notifications.addNotif(this);
    }
    
    takeOnStory(){
        if(!this.storyQueue.isQueueFull(this.storyPitch)){
           this.storyQueue.addStory(this.storyPitch);
        }
    }
    
    forceOnStory(story){
        if(!this.storyQueue.isQueueFull(story)){
           this.storyQueue.addStory(story);
        }
        this.needsNotify = false;
    }
    
    forgetPitch(){
        this.storyPitch = null;
        this.needsNotify = false;
    }
}