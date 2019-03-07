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
        if(this.needsNotify === true && (this.notif != null || this.notif != undefined)){
            this.notif.phaserObject.destroy();
            delete this.notif;
        }
        this.phaserObject.destroy();
    }
    
    pitch(story){
        this.storyPitch = story;
        this.game.ui_storyPitch.curStory = this.storyPitch;
        this.needsNotify = true;
        this.game.notifications.addNotif(this);
    }
    
    takeOnStory(){
        console.log("HALP");
        if(!this.storyQueue.isQueueFull(this.storyPitch)){
           this.storyQueue.addStory(this.storyPitch);
            this.storyPitch.progress = new struct_storyProgress(this.game, this.xLocation, this.yLocation, 0, 100, 'progressBar','barFill',39,157);
            this.storyPitch.progress.spawn();
        }
        this.needsNotify = false;
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
    
    work(){
        this.storyQueue.workStories();
    }
}