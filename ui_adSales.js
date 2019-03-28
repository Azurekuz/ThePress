class ui_adSales{
    constructor(context, xLoc, yLoc, adObj = null){
        this.game = context;
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.curAdSale = adObj;
        
        this.isActive = false;
        
        this.uiBackground = null;
        this.acceptHeader = null;
        this.uiBubble = null;
        this.pitchText = null;
        
        this.yesNoPrompt = [];
        this.yesNoPrompt.push(new Button(this.game, 301, 392, 195, 141, null, 'ynBtn', null, 'uicon'));
        this.yesNoPrompt.push(new Button(this.game, 301, 658, 195, 141, null, 'ynBtn', null, 'uicon'));   
        this.yesNoPrompt[0].buttonValue = "Y"
        this.yesNoPrompt[1].buttonValue = "N"
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].buttonParent = this.yesNoPrompt;
        }
    }
    
    popUp(adObj){
        this.uiBackground = this.game.add.image(960, 540, 'adBack');
        this.acceptHeader = this.game.add.image(316,225, 'acceptHeader');
        this.acceptHeader.depth = 101;
        this.uiBackground.depth = 100;
        this.uiBubble = this.game.add.image(1248, 569, 'adBubble');
        this.uiBubble.depth = 101;
        this.curAdSale = adObj;
        
        for(var i = 0; i < 2; i += 1){
            this.yesNoPrompt[i].spawn();
            this.yesNoPrompt[i].phaserObject.depth = 101;
        }
        
        this.isActive = true;
    }
    
    update(){
        
    }
    
    dismiss(){
        
    }
}