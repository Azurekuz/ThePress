class obj_player{
    constructor(context, xLoc, yLoc, width, height, spriteID, speed = 250){
        this.game = context;
        
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.width = width;
        this.height = height;
        this.spriteID = spriteID;
        this.speed = speed;
        
        this.phaserObject = null;
        this.isInteracting = false;
    }
    
    setupControls(){
        this.game.controls = this.game.input;
        this.game.controls.upKey = this.game.input.keyboard.addKey(87); 
        this.game.controls.downKey = this.game.input.keyboard.addKey(83);
        this.game.controls.leftKey = this.game.input.keyboard.addKey(65);
        this.game.controls.rightKey = this.game.input.keyboard.addKey(68);
        this.game.controls.interactKey = this.game.input.keyboard.addKey(69);
    }
    
    spawn(){
        this.setupControls();
        this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, this.spriteID);
        this.phaserObject.setCollideWorldBounds(true);
        this.phaserObject._objRef = this;
        this.phaserObject.depth = 100;
    }
    
    update(delta){
        this.checkControls();
    }
    
    checkControls(){
        if(this.game.controls.upKey.isDown){
            this.phaserObject.setVelocityY(-this.speed);
        }
        if(this.game.controls.downKey.isDown){
            this.phaserObject.setVelocityY(this.speed);   
        }
        if(!this.game.controls.upKey.isDown && !this.game.controls.downKey.isDown){
            this.phaserObject.setVelocityY(0);
        }
        if(this.game.controls.leftKey.isDown){
            this.phaserObject.setVelocityX(-this.speed);
        }
        if(this.game.controls.rightKey.isDown){
            this.phaserObject.setVelocityX(this.speed);
        }
        if(!this.game.controls.leftKey.isDown && !this.game.controls.rightKey.isDown){
            this.phaserObject.setVelocityX(0);
        }
        if(this.game.controls.interactKey.isDown && !this.isInteracting){
            this.isInteracting = true;
            //this.phaserObject.setFrame(1);
        }else if(!this.game.controls.interactKey.isDown && this.isInteracting){
            this.isInteracting = false;
            //this.phaserObject.setFrame(0);
        }
    }
    
    interact(){
        
    }
}