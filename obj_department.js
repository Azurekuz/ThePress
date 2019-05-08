class obj_department{ //The department object
    constructor(context, xLoc, yLoc, width, height, depName, spriteID){
        this.game = context; //Phaser reference
        
        this.xLocation = xLoc; //X location of the department
        this.yLocation = yLoc; //Y location of the department
        this.width = width; //Width of the department
        this.height = height; //Height of the department
        this.depName = depName; //Name of the department
        this.spriteID = spriteID; //Department sprite
        this.needsNotify = false; //Does this department need a notification?
        
        this.depValue;
        
        this.phaserObject = null; //Variable for the Phaser sprite
        this.depTextObj = null; //Variable for the text layer
    }
    
    spawnDepartmentObject(){
        this.phaserObject = this.game.physics.add.image(this.xLocation, this.yLocation, this.spriteID); //Make the actual Phaser object.
        //this.depTextObj = this.game.add.text(this.xLocation, this.yLocation, this.depName, {fontFamily: "Calibri", align: "center", color:"#000", fontStyle: "bold", fontSize: 32}); //Make the text denoting the department
        //this.depTextObj.setOrigin(0.5); //Just something to center the text, I'm assuming it changes around the origin/anchor point of the text or object.
        this.phaserObject.body.immovable = true; //Make sure the Phaser object can't be pushed around when the player or anything collides with it.
        
        /*This is to make sure the Phaser object/sprite has access to the object its embedded in. This is to make coding collision events easier when we need to get stuff from the object.*/
        this.phaserObject._objRef = this;
        this.game.grp_departments.add(this.phaserObject); //This Phaser object or sprite is a department, so add it to the Phaser group.
        if(this.game.game.isMobile[0]){
            this.phaserObject.setInteractive({useHandCursor: true}) 
                .on('pointerdown', () => this.enterActiveState());
        }
    }
    
    accessDepartment(){
        console.log(this.depName + " has been accessed!"); //Just something to let me know this function works.
        if(this.depName == "ads" && !this.game.ui_adSales.isActive && !this.game.ui_storyPitch.isActive){  
            this.grantAd(this.game.gameMaster.salesCollection.salesArray[Math.floor(Math.random()*this.game.gameMaster.salesCollection.salesArray.length)]);
            this.game.ui_adSales.popUp();
        }
    }
    
    grantAd(adObj){
        this.game.ui_adSales.newAd(adObj);
    }
    
    enterActiveState(){ //Called when the button is clicked.
        this.accessDepartment();
    }
    
    phaserObjectExists(){ //Just a simple check to see if the Phaser sprite exists, without cluttering up the code
        if(this.spriteID != null){
           return true;
        }else{
            return false;
        }
    }
}