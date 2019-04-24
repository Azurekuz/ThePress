class ui_adSales{
    constructor(context, xLoc, yLoc, adObj = null){
        this.game = context;
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.curAdSale = adObj;
        
        this.isActive = false;
        this.needsNotif = false;
        
        this.uiBackground = null;
        this.acceptHeader = null;
        this.uiBubble = null;
        this.pitchText = null;
        
    }
    
    popUp(){
        this.uiBackground = this.game.add.image(960, 540, 'adBack');
        this.game.uiPaused = true;
        this.acceptHeader = this.game.add.image(316,225, 'acceptHeader');
        this.acceptHeader.depth = 101;
        this.uiBackground.depth = 100;
        this.uiBubble = this.game.add.image(1248, 569, 'adBubble');
        this.uiBubble.depth = 101;
        
        this.yesNoPrompt = [];
        this.yesNoPrompt.push(new Button(this.game, 301, 392, 195, 141, null, 'ynBtn', null, 'uicon'));
        this.yesNoPrompt.push(new Button(this.game, 301, 658, 195, 141, null, 'ynBtn', null, 'uicon'));   
        this.yesNoPrompt[0].buttonValue = "Y"
        this.yesNoPrompt[1].buttonValue = "N"
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].buttonParent = this.yesNoPrompt;
        }
        
        for(var i = 0; i < 2; i += 1){
            var moveItHere;
            if(this.yesNoPrompt[i].buttonValue == "Y"){
                moveItHere = this.yesNoPrompt[i].xLocation - (this.yesNoPrompt[i].width/4) + 15;
            }else{
                moveItHere = this.yesNoPrompt[i].xLocation - (this.yesNoPrompt[i].width/4);
            }
            this.yesNoPrompt[i].spawn();
            this.yesNoPrompt[i].phaserObject.depth = 101;
            this.yesNoPrompt[i].phaserText = this.game.add.text(moveItHere, this.yesNoPrompt[i].yLocation - (this.yesNoPrompt[i].height/4), this.yesNoPrompt[i].buttonValue, {fontFamily: "lores-9-wide, Calibri", fontSize: 96});
            this.yesNoPrompt[i].phaserText.setOrigin(0, 0.25);
            this.yesNoPrompt[i].phaserText.depth = 103;
        }
        
        //console.log(this.curAdSale.description);
        this.pitchText = this.game.add.text(733, 200, this.curAdSale.description, {fontFamily: "lores-9-wide, neusa-next-std Calibri, Arial, Times New Roman", fontSize: 48, wordWrap: { width: 1040, useAdvancedWrap: true }, align: "center", fontWeight: "bold"});
        this.pitchText.depth = 105;
        this.isActive = true;
    }
    
    update(){
        if(this.yesNoPrompt.needsUpdate){
           if(this.yesNoPrompt[0].isSelected){
                this.yesNoPrompt[0].isSelected = false;
            }else if(this.yesNoPrompt[1].isSelected){
                this.yesNoPrompt[1].isSelected = false;
            }
            this.dismiss(); //Dismiss the UI
            this.yesNoPrompt.needsUpdate = !this.yesNoPrompt.needsUpdate; //We no longer need updating.
        }
    }
    
    dismiss(){
        this.game.uiPaused = false;
        this.isActive = false;
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].phaserObject.destroy();
            this.yesNoPrompt[i].phaserText.destroy();
            delete this.yesNoPrompt[i];
        }
        this.uiBackground.destroy();
        this.uiBubble.destroy();
        this.acceptHeader.destroy();
        this.pitchText.destroy();
    }
    
    newAd(adObj){
        this.curAdSale = adObj;
        this.needsNotif = true;
    }
}