class Button{
    constructor(phaserGame, xLoc, yLoc, text = null, spriteID = null, textStyle = null, purposeID){
        this.game = phaserGame;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.buttonText = text;
        this.spriteID = spriteID;
        this.textStyle = textStyle;
        this.purposeID = purposeID;
        
        this.phaserObject = null;
        this.phaserText = null;
    }
    
    spawnButton(){
        if(this.phaserObjectExists()){
            this.phaserObject = this.game.add.sprite(this.xLocation, this.yLocation, this.spriteID);
        }
        if(this.phaserTextExists() && this.textStyle != null){
           this.phaserText = this.game.add.text(this.xLocation, this.yLocation, this.buttonText, this.textStyle);
            this.phaserText.setOrigin(0,0.5);
        }else if(this.phaserTextExists()){
            this.phaserText = this.game.add.text(this.xLocation, this.yLocation, this.buttonText);
            this.phaserText.setOrigin(0,0.5);
        }
        
        this.phaserObject.setInteractive({useHandCursor: true})
            .on('pointerover', () => this.enterHoverState() )
            .on('pointerout', () => this.enterRestState() )
            .on('pointerdown', () => this.enterActiveState());
    }
    
    enterHoverState(){
        if(this.phaserObjectExists()){
           this.phaserObject.setFrame(1);
        }
    }
    
    enterRestState(){
        if(this.phaserObjectExists()){
           this.phaserObject.setFrame(0);
        }
    }
    
    enterActiveState(){
        if(this.phaserObjectExists()){
           this.phaserObject.setFrame(2);
        }
        
        if(this.purposeID.substr(0,4).valueOf == "opscn".valueOf){
            console.log(this.purposeID.substr(6, this.purposeID.length));
           this.game.scene.start(this.purposeID.substr(6, this.purposeID.length));
        }
    }
    
    phaserObjectExists(){
        if(this.spriteID != null){
           return true;
        }else{
            return false;
        }
    }
    
    phaserTextExists(){
        if(this.buttonText != null){
           return true;
        }else{
            return false;
        }
    }
}