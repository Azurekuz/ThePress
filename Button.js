class Button{
    /* This is a custom button class that is hoverable and clickable. It is also organized with the 
    intention of allowing different kinds of functionalities depending on what it needs to be used for.*/
    constructor(phaserGame, xLoc, yLoc, text = null, spriteID = null, textStyle = null, purposeID){
        this.game = phaserGame; /*This is a pattern I tend to have in my code so that Phaser's 
        functionality is not lost due to scope.*/
        this.xLocation = xLoc; //X Location of Button
        this.yLocation = yLoc; //Y Location of Button
        this.buttonText = text; //Text on Butto
        this.spriteID = spriteID; //Phaser asset ID; How the button looks like, tends to be a spritesheet.
        this.textStyle = textStyle; //A variable meant to store CSS font styling like font-family, color, size, etc.
        this.purposeID = purposeID; //This defines the functionality and necessary parameters for the Button. This is used and requred for the "pointerdown" event or when the user clicks the given button.
        
        this.phaserObject = null;
        this.phaserText = null;
    }

    spawnButton(){
        if(this.phaserObjectExists()){ //Check to make sure spriteID was initialized.
            //Add the button sprite.
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