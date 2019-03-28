class ui_adSales{
    constructor(context, xLoc, yLoc, adObj = null){
        this.game = context;
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.curAdSale = adObj;
        
        this.isActive = false;
        
        this.uiBackground = null;
        this.uiBubble = null;
        this.pitchText = null;
        
        this.yesNoPrompt = [];
        this.yesNoPrompt.push(new Button(this.game, 300, 450, 195, 141, null, 'ynBtn', null, 'uicon'));
        this.yesNoPrompt.push(new Button(this.game, 300, 650, 195, 141, null, 'ynBtn', null, 'uicon'));   
        this.yesNoPrompt[0].buttonValue = "Y"
        this.yesNoPrompt[1].buttonValue = "N"
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].buttonParent = this.yesNoPrompt;
        }
    }
    
    popUp(adObj){
        this.uiBackground = this.game.add.image(960, 540, 'adBack');
        this.uiBackground.depth = 100;
        this.uiBubble = this.game.add.image(1100, 540, 'adBubble');
        this.uiBubble.depth = 101;
        this.curAdSale = adObj;
        
        for(var i = 0; i < 2; i += 1){
            this.yesNoPrompt[i].spawn();
        }
        
        this.isActive = true;
    }
    
    update(){
        
    }
    
    dismiss(){
        
    }
}