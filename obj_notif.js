class obj_notif{
    constructor(context, ownerObj, spriteID, notifWidth, notifHeight){
        this.game = context; //The Phaser reference
        this.owner = ownerObj; //Who is the owner or parent object of the notification?
        this.spriteID = spriteID; //How does the notification look like?
        this.width = notifWidth;
        this.height = notifHeight;
        
        this.phaserObject = null; //The actual Phaser sprite/object
    }
    
    spawn(){
        this.phaserObject = this.game.add.sprite(this.owner.xLocation + ((Math.floor(this.width/2)) - (this.owner.width/2)), this.owner.yLocation - ((Math.floor(this.height/2)) - (this.owner.height/2)), this.spriteID); //Add the Phaser object
        this.phaserObject.objRef = this; //Have the Phaser Object reference this object
        this.phaserObject.depth = 49; //Set the depth of the notification
    }
    
    despawn(){
        this.phaserObject.objRef = null; //Nullify the Phaser object's reference to this object
        this.phaserObject.destroy(); //Use the Phaser destroy() function to remove the Phaser sprite
    }
}