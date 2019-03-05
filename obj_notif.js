class obj_notif{
    constructor(context, ownerObj, spriteID){
        this.game = context;
        this.owner = ownerObj;
        this.spriteID = spriteID;
        
        this.phaserObject = null;
    }
    
    spawn(){
        this.phaserObject = this.game.add.sprite(this.owner.xLocation + (180 - (this.owner.width/2)), this.owner.yLocation - (115 - (this.owner.height/2)), this.spriteID);
        this.phaserObject.objRef = this;
        this.phaserObject.depth = 50;
    }
    
    despawn(){
        this.phaserObject.objRef = null;
        this.phaserObject.destroy();
        delete this.phaserObject;
    }
}