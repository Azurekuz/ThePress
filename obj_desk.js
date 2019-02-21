class obj_desk{
    constructor(context, xLoc, yLoc, width, height, spriteID, reporterObj = null){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.width = width;
        this.height = height;
        this.spriteID = spriteID;
        this.deskText = null;
        
        this.workingReporter = reporterObj;
        this.workerActive = false;
        if(this.workingReporter != null){
           this.workerActive = true;
        }
        
        this.phaserObject = null;
    }
    
    spawn(){
        this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, this.spriteID);
        this.phaserObject.objRef = this;
        this.phaserObject.body.immovable = true;
        if(this.workingReporter != false && this.workingReporter != null){
           this.updateDesk();
        }
        this.game.grp_desks.add(this.phaserObject);
    }
    
    hire(reporterObj){
        this.workingReporter = reporterObj;
        this.workingReporter.xLocation = this.xLocation + 125;
        this.workingReporter.yLocation = this.yLocation;
        this.deskText = this.game.add.text(this.xLocation, this.yLocation, this.workingReporter.name, {fontFamily: "Calibri", align: "center", color:"#000", fontStyle: "bold", fontSize: 16});
        this.deskText.setOrigin(0.5);
    }
    
    leaveWork(){
        this.workerActive = false;
        this.updateDesk();
    }
    
    setToWork(){
        this.workerActive = true;
        this.updateDesk();
    }
    
    updateDesk(){
        if(this.workerActive){
            this.workingReporter.spawn();
        }else if(this.workingReporter.phaserObject != null || this.workingReporter.phaserObject != undefined){
            this.workingReporter.despawn();
        }
    }
}