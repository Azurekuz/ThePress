class obj_player{
    constructor(context, xLoc, yLoc, width, height, spriteID, speed = 250){
        this.game = context; //Phaser reference
        
        this.xLocation = xLoc; //X location of the player
        this.yLocation = yLoc; //Y location of the player
        this.width = width; //Width of the player sprite
        this.height = height; //Height of the player sprite
        this.spriteID = spriteID; //The actual sprite or visuals of the player
        this.speed = speed; //How fast does the player go?
        this.curAnim = null;
        
        this.phaserObject = null; //The actual Phaser sprite of the player
        this.isInteracting = false; //Is the player interacting with something?
    }
    
    setupControls(){ //Set up the player controls
        this.game.controls = this.game.input; //Just a reference to Phaser input stuff
        this.game.controls.upKey = this.game.input.keyboard.addKey(87);  //Up key (W)
        this.game.controls.downKey = this.game.input.keyboard.addKey(83); //Down key (S)
        this.game.controls.leftKey = this.game.input.keyboard.addKey(65); //Left key (A)
        this.game.controls.rightKey = this.game.input.keyboard.addKey(68); //Right key (D)
        this.game.controls.interactKey = this.game.input.keyboard.addKey(69); //E Key
        this.game.controls.arrowKeys = this.game.input.keyboard.createCursorKeys();
    }
    
    spawn(){ //Spawn the player object
        this.setupControls(); //Set up the controls first.
        this.phaserObject = this.game.physics.add.sprite(this.xLocation, this.yLocation, this.spriteID); //Add the Phaser sprite
        this.phaserObject.setCollideWorldBounds(true); //The player can collide with the edges of the screen
        this.phaserObject._objRef = this; //The Phaser sprite has a reference to this object
        this.phaserObject.depth = 10; //The depth of the object
        this.phaserObject.play("idle");
    }
    
    update(delta){ //The player update loop
        this.checkControls(); //Check player controls
    }
    
    checkControls(){ //Function responsible for player movement
        if(!this.game.uiPaused){ //If the game isn't paused then check for all relevant movement inputs, in other words check if the user wants the player to move around on screen.
            if(this.game.controls.upKey.isDown || this.game.controls.arrowKeys.up.isDown){
                this.phaserObject.setVelocityY(-this.speed);
                if(this.curAnim != "up"){
                    this.phaserObject.play('walkUp');
                    this.curAnim = "up";
                }
            }
            if(this.game.controls.downKey.isDown || this.game.controls.arrowKeys.down.isDown){
                this.phaserObject.setVelocityY(this.speed);
                if(this.curAnim != "down"){
                    this.phaserObject.play("walkDown");
                    this.curAnim = "down";
                }
            }
            if(!this.game.controls.upKey.isDown && !this.game.controls.downKey.isDown && !this.game.controls.arrowKeys.up.isDown && !this.game.controls.arrowKeys.down.isDown){
                this.phaserObject.setVelocityY(0);
            }
            if((this.game.controls.leftKey.isDown || (this.game.controls.leftKey.isDown && (this.game.controls.downKey.isDown || this.game.controls.upKey.isDown))) || (this.game.controls.arrowKeys.left.isDown || (this.game.controls.arrowKeys.left.isDown && (this.game.controls.arrowKeys.down.isDown || this.game.controls.arrowKeys.up.isDown)))){
                this.phaserObject.setVelocityX(-this.speed);
                if(this.curAnim != "left"){
                    this.phaserObject.play("walkLeft");
                    this.curAnim = "left";
                }
            }
            if((this.game.controls.rightKey.isDown || (this.game.controls.rightKey.isDown && (this.game.controls.downKey.isDown || this.game.controls.upKey.isDown))) || (this.game.controls.arrowKeys.right.isDown || (this.game.controls.arrowKeys.right.isDown && (this.game.controls.arrowKeys.down.isDown || this.game.controls.arrowKeys.up.isDown)))){
                this.phaserObject.setVelocityX(this.speed);
                if(this.curAnim != "right"){
                    this.phaserObject.play("walkRight");
                    this.curAnim = "right";
                }
            }
            if(!this.game.controls.leftKey.isDown && !this.game.controls.rightKey.isDown && !this.game.controls.arrowKeys.left.isDown && !this.game.controls.arrowKeys.right.isDown){
                this.phaserObject.setVelocityX(0);
            }
            if(this.game.controls.interactKey.isDown && !this.isInteracting){
                this.isInteracting = true;
            }else if(!this.game.controls.interactKey.isDown && this.isInteracting){
                this.isInteracting = false;
            }
            if(!this.game.controls.upKey.isDown && !this.game.controls.downKey.isDown && !this.game.controls.leftKey.isDown && !this.game.controls.rightKey.isDown && !this.game.controls.arrowKeys.right.isDown && !this.game.controls.arrowKeys.left.isDown && !this.game.controls.arrowKeys.up.isDown && !this.game.controls.arrowKeys.down.isDown){
                if(this.curAnim != "idle"){
                    this.phaserObject.play("idle");
                    this.curAnim = "idle";
                }   
            }
        }else{ //Stop the player if all else fails
            this.phaserObject.setVelocityY(0);
            this.phaserObject.setVelocityX(0);
            if(this.curAnim != "idle"){
                this.phaserObject.play("idle");
                this.curAnim = "idle";
            }
        }
    }
    
    interact(){
        //Something is supposed to go here, but what? I don't know (yet).
    }
}