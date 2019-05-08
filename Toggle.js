class Toggle{
    constructor(phaserGame, xLoc, yLoc, spriteID, flipBoolRef, toggleAnim = null){
        this.game = phaserGame;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.spriteID = spriteID;
        this.flipBool = flipBoolRef;
        this.toggleAnim = toggleAnim;
        
        this.sfxHover = this.game.sound.add('sfxHover');
        this.sfxClick = this.game.sound.add('sfxClick');
        
        this.isActive = false;
    }
    
    spawn(){
        this.phaserObject = this.game.add.sprite(this.xLocation, this.yLocation, this.spriteID);
        this.phaserObject.setInteractive({useHandCursor: true}) 
            .on('pointerover', () => this.enterHoverState() )
            .on('pointerdown', () => this.enterActiveState());
        if(this.flipBool[0]){
            this.phaserObject.setFrame(6);
        }else{
            this.phaserObject.setFrame(0);
        }
    }
    
    flip(){
        if(this.flipBool[0]){
           this.phaserObject.anims.playReverse('flip');
        }else{
           this.phaserObject.play('flip'); 
        }
        this.flipBool[0] = !this.flipBool[0];
        this.isActive = false;
        
    }
    
    enterActiveState(){
        if(!this.isActive){
            this.isActive = true;
            this.sfxClick.play();
            this.flip();
        }
    }
    
    enterHoverState(){
        this.sfxHover.play();
    }
}