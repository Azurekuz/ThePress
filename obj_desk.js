class obj_desk{
    constructor(context, xLoc, yLoc, width, height, spriteID, reporterObj = null){
        this.game = context; //Phaser reference
        this.xLocation = xLoc; //X location of the desk
        this.yLocation = yLoc; //Y location of the desk
        this.width = width; //Width of the desk
        this.height = height; //Height of the desk
        this.spriteID = spriteID; //The sprite of the desk or how it looks like
        this.deskText = null; //The text to display over the desk, usually the reporter's name.
        this.slotID;
        
        this.workingReporter = reporterObj; //The current reporter who is assigned this desk
        this.workerActive = false; //Is the reporter currently active and working?
        if(this.workingReporter != null){ //If the reporter exists, then yes they're working.
           this.workerActive = true;
        }
        
        this.phaserObject = null; //The sprite of the desk
    }
    
    spawn(){ //Actually spawn the desk object
        if(this.workingReporter != null || this.workingReporter != undefined){
        this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, "nd_" + this.workingReporter.name); //Add the phaser object
        }else{
           this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, "nd_Desk"); 
        }
        this.phaserObject.objRef = this; //Make sure the Phaser object can reference this object.
        this.phaserObject.body.immovable = true; //The Phaser object should not be able to move.
        if(this.workerActive && this.workingReporter != null){ //If the worker is active and also exists then run the update function once to display it properly.
           this.updateDesk();
        }
        this.game.grp_desks.add(this.phaserObject); //Add the Phaser sprite to the Phaser group for collision purposes.
    }
    
    hire(reporterObj){
        this.workingReporter = reporterObj; //Take the reporter object from the provided parameter, now it belongs to this desk.
        
        /* This is obsolete, this is simply the location of the reporter object is we want to see them sitting at the desk. No longer needed.*/
        this.workingReporter.xLocation = this.xLocation + 85; 
        this.workingReporter.yLocation = this.yLocation - 75;
        
        //Text to go over the desk, usually the reporter's name.
        this.deskText = this.game.add.text(this.xLocation, this.yLocation, this.workingReporter.name, {fontFamily: "Calibri", align: "center", color:"#000", fontStyle: "bold", fontSize: 16});
        this.deskText.setOrigin(0.5);
    }
    
    leaveWork(){
        this.workerActive = false; //The reporter is no longer active.
        //this.updateDesk();
    }
    
    setToWork(){
        this.workerActive = true; //The reporter is now active.
        //this.updateDesk();
    }
    
    updateDesk(){ //Desk update loop
        if(this.workingReporter != null || this.workingReporter != undefined){
            this.workingReporter.work();
        }
    }
}