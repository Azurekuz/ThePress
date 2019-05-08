class obj_reporter{  
    constructor(context, xLoc, yLoc, width, height, repName, spriteID, maxStory = 2){
        this.game = context; //Phaser reference
        this.name = repName; //Name of the reporter
        this.xLocation = xLoc; //X location of the reporter, obsolete
        this.yLocation = yLoc; //Y location of the reporter, obsolete
        this.width = width; //Width of the reporter sprite
        this.height = height; //Height of the reporter sprite
        this.spriteID = spriteID; //The actual sprite of the reporter
        this.maxStorySlots = maxStory; //How many slots/stories the reporter can take on.
        this.needsNotify = false; //Does this reporter need a notification?
        this.storyPitch = null; //The story the reporter would like to pitch.
        
        this.storyQueue = new struct_storyQueue(this.game, this.maxStorySlots); //The queue or list of stories the reporter is working on.
        
        this.phaserObject = null; //The Phaser object
    }
    
    spawn(){ //Spawn the reporter
        this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, this.spriteID); //Add the Phaser object to the game
        this.phaserObject.objRef = this; //Have the Phaser object reference this object
        this.game.grp_workers.add(this.phaserObject); //Add the Phaser object to the Phaser group for collision purposes
        this.phaserObject.body.immovable = true; //This Phaser object can't be moved or pushed around now.
    }
    
    despawn(){ //Remove this object
        if(this.needsNotify === true && (this.notif != null || this.notif != undefined)){ //If this bject has a notification for any reason
            this.notif.phaserObject.destroy(); //Remove said notification
            delete this.notif; //Delete the notification object/reference
        }
        this.phaserObject.destroy(); //Destroy this reporter object's Phaser object
    }
    
    pitch(story){ //Called when the reporter comes up with a story to pitch.
        this.storyPitch = story; //This is the story the reporter object wants to pitch
        this.game.ui_storyPitch.curStory = this.storyPitch; //Okay, so I'm going to have to split and reprogram this function since it's coded for testing purposes.
        this.needsNotify = true; //This needs a notification
        this.game.notifications.addNotif(this); //Add said notification
    }
    
    takeOnStory(deadline = 1){
        if(!this.storyQueue.isQueueFull(this.storyPitch)){ //Check to see if there's space in the story queue for this story.
            this.storyPitch.deadline = deadline;
            this.storyPitch.source = null;
            this.storyQueue.addStory(this.storyPitch); //Add said story to the story queue.
            //Add a progress bar, will need to account for multiple stories in the future.
            console.log("Hello?");
            console.log(deadline);
            this.storyPitch.progress = new struct_storyProgress(this.game, this.xLocation, this.yLocation, 0, 100 * deadline, 'progressBar','barFill',196,37); 
            this.storyPitch.progress.spawn();
        }
        this.needsNotify = false; //This reporter no longer needs a notification.
    }
    
    forceOnStory(story){ //The function that yells at the reporter to "DO THE DAMN STORY WHETHER YOU LIKE IT OR NOT"... only in code, ya know?
        this.storyQueue.addStory(story);
        this.needsNotify = false; //No, we don't need notifications, so just set this to false.
    }
    
    forgetPitch(){ //Forget whatever story you're pitching, reporter.
        this.storyPitch = null;
        this.needsNotify = false;
    }
    
    work(){ //Basically, the reporter's update function. I'll probably rename/refactor to reflect this.
        this.storyQueue.workStories(); //Work on your assigned stories.
    }
}