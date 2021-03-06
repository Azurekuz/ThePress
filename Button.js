class Button{ //I need to make a despawn() function, damn it!
    /* This is a custom button class that is hoverable and clickable. It is also organized with the 
    intention of allowing different kinds of functionalities depending on what it needs to be used for.*/
    constructor(phaserGame, xLoc, yLoc, btnWidth, btnHeight, text = null, spriteID = null, textStyle = null, purposeID){
        this.game = phaserGame; /*This is a pattern I tend to have in my code so that Phaser's 
        functionality is not lost due to scope.*/
        this.xLocation = xLoc; //X Location of Button
        this.yLocation = yLoc; //Y Location of Button
        this.width = btnWidth; //Width of the button
        this.height = btnHeight; //Height of the button
        this.buttonText = text; //Text on Button
        this.spriteID = spriteID; //Phaser asset ID; How the button looks like, tends to be a spritesheet.
        this.textStyle = textStyle; //A variable meant to store CSS font styling like font-family, color, size, etc.
        this.purposeID = purposeID; //This defines the functionality and necessary parameters for the Button. This is used and requred for the "pointerdown" event or when the user clicks the given button.
        this.isSelected = false; //This is for toggles/checkboxes, this is whether or not the box is clicked/checked.
        this.buttonValue; //This where any embedded data would go for the button, like for instance
                        //how many days you'd like to give a reporter for their deadline. 1? 2? 3? etc.
        this.buttonParent; //Does something own this button object?
        this.listIndex; //If this button is in a list, this is the button's assigned index.
        
        this.phaserObject = null;
        this.phaserText = null;
        
        this.sfxHover = this.game.sound.add('sfxHover');
        this.sfxClick = this.game.sound.add('sfxClick');
    }

    spawn(){ //The function that's called to make the button actually appear.
        if(this.phaserObjectExists()){ //Check to make sure spriteID was initialized.
            //Add the button sprite.
            this.phaserObject = this.game.add.sprite(this.xLocation, this.yLocation, this.spriteID);
        }
        if(this.phaserTextExists() && this.textStyle != null){ //If the Phaser sprite exists, then add text over the button according to the provided style.
           this.phaserText = this.game.add.text(this.xLocation, this.yLocation, this.buttonText, this.textStyle);
            this.phaserText.setOrigin(0,0.5); //Center the text.
        }else if(this.phaserTextExists()){ //If only the text exists without any provided style
            this.phaserText = this.game.add.text(this.xLocation, this.yLocation, this.buttonText); //Add the text
            this.phaserText.setOrigin(0,0.5); //Center it
        }
        
        if(this.purposeID.substr(0,5) == "mtBGM"){
           if(this.game.game.curBGM.config.mute){
                this.phaserObject.setFrame(2);
            }else{
                this.phaserObject.setFrame(0);
            }
        }
        
        /*This is what provides the interactability. Call different functions according to whether or not the user is hovering, clicking, or has their mouse off the button*/
        this.phaserObject.setInteractive({useHandCursor: true}) 
            .on('pointerover', () => this.enterHoverState() )
            .on('pointerout', () => this.enterRestState() )
            .on('pointerdown', () => this.enterActiveState());
    }
    
    enterHoverState(){ //Called when the user is hovering over the button
        if(this.phaserObjectExists()){
           this.phaserObject.setFrame(1);
        }
        if(this.sfxHover != null){
           this.sfxHover.play();
        }
    }
    
    enterRestState(){ //Called when the user has their mouse off the button
        if(this.phaserObjectExists()){
            if(!this.isSelected){
                this.phaserObject.setFrame(0);
            }else if(this.isSelected){
                this.phaserObject.setFrame(2);   
            }
        }
        if(this.purposeID.substr(0,5) == "mtBGM"){
           if(this.game.game.curBGM.config.mute){
                this.phaserObject.setFrame(2);
            }else{
                this.phaserObject.setFrame(0);
            }
        }
    }
    
    enterActiveState(){ //Called when the button is clicked.
        if(this.phaserObjectExists()){
           this.phaserObject.setFrame(2);
        }
        if(this.purposeID.substr(0,5) == 'opscn'){
            if(this.purposeID.substr(6, this.purposeID.length) == "scene_Intro" && this.game.game.isMobile[0]){
                this.game.game.isPaused = false;
                this.game.scene.start("scene_NewsRoom");
            }else{
                this.game.scene.start(this.purposeID.substr(6, this.purposeID.length));
            }
        }else if(this.purposeID.substr(0,5) == "tggle"){
            this.isSelected = !this.isSelected;
            this.buttonParent.curSelected = this.listIndex;
            this.buttonParent.needsUpdate = true;
        }else if(this.purposeID.substr(0,5) == "uicon"){ //UI confirm buttons, these are for affirming, denying, or cancelling popups/ui elements.
            this.buttonParent.needsUpdate = true;
            this.isSelected = !this.isSelected;
            //this.buttonParent.dismiss();
        }else if(this.purposeID.substr(0,5) == "opURL"){
            window.open(this.purposeID.substr(6, this.purposeID.length), "_blank");
        }else if(this.purposeID.substr(0,5) == "mtBGM"){
            this.game.game.curBGM.setMute(!this.game.game.curBGM.config.mute);
            if(this.game.game.curBGM.config.mute){
                this.phaserObject.setFrame(2);
            }else{
                this.phaserObject.setFrame(0);
            }
        }else if(this.purposeID.substr(0,5) == "skInt"){
            this.game.game.isPaused = false;
            this.game.scene.start("scene_NewsRoom");
        }
        if(this.sfxClick != null){
           this.sfxClick.play();
        }
    }
    
    phaserObjectExists(){ //Just a simple check to see if the Phaser sprite exists, without cluttering up the code
        if(this.spriteID != null){
           return true;
        }else{
            return false;
        }
    }
    
    phaserTextExists(){ //Does the text exist? I should just made these all one function.
        if(this.buttonText != null){
           return true;
        }else{
            return false;
        }
    }
}