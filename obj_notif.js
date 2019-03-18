class obj_notif{
    constructor(context, ownerObj, spriteID){
        this.game = context; //The Phaser reference
        this.owner = ownerObj; //Who is the owner or parent object of the notification?
        this.spriteID = spriteID; //How does the notification look like?
        
        this.phaserObject = null; //The actual Phaser sprite/object
    }
    
    spawn(){
        this.phaserObject = this.game.add.sprite(this.owner.xLocation + (180 - (this.owner.width/2)), this.owner.yLocation - (115 - (this.owner.height/2)), this.spriteID); //Add the Phaser object
        this.phaserObject.objRef = this; //Have the Phaser Object reference this object
        this.phaserObject.depth = 50; //Set the depth of the notification
    }
    
    despawn(){
        this.phaserObject.objRef = null; //Nullify the Phaser object's reference to this object
        this.phaserObject.destroy(); //Use the Phaser destroy() function to remove the Phaser sprite
        delete this.phaserObject; //Delete the Phaser object.
        delete this; //Self explanatory, maybe?
    }
}