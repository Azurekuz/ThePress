class ui_storyPitch{
    constructor(context, xLoc, yLoc, storyObj, reporterObj){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.curStory = storyObj;
        this.curReporter = reporterObj;
        this.isActive = false;
        
        this.uiBackground;
        this.ui_bubble;
        this.pitchText;
        
        this.yesNoPrompt = [];
        this.sourceList = [];
        this.deadlineSet = [];
        
        this.btn_Yes = new Button(this.game, 1350, 350, 75, 75, null, 'smlBtn', null);
        this.btn_No = new Button(this.game, 1530, 350, 75, 75, null, 'smlBtn', null);
        
        this.yesNoPrompt.push(this.btn_Yes);
        this.yesNoPrompt.push(this.btn_No);
        
        this.btn_srcA = new Button(this.game, 1440, 500, 225, 75, null, 'srcBtn', null);
        this.btn_srcB = new Button(this.game, 1440, 600, 225, 75, null, 'srcBtn', null);
        this.btn_srcC = new Button(this.game, 1440, 700, 225, 75, null, 'srcBtn', null);
        
        this.sourceList.push(this.btn_srcA);
        this.sourceList.push(this.btn_srcB);
        this.sourceList.push(this.btn_srcC);
        
        this.btn_dlA = new Button(this.game, 1340, 850, 75, 75, null, 'smlBtn', null);
        this.btn_dlB = new Button(this.game, 1440, 850, 75, 75, null, 'smlBtn', null);
        this.btn_dlC = new Button(this.game, 1540, 850, 75, 75, null, 'smlBtn', null);
        
        this.sourceList.push(this.btn_dlA);
        this.sourceList.push(this.btn_dlB);
        this.sourceList.push(this.btn_dlC);
    }
    
    popUp(reporterObj, storyObj){
        this.uiBackground = this.game.add.image(960, 540, 'uiBack');
        this.uiBackground.depth = 100;
        this.uiBubble = this.game.add.image(600,540, 'textBubble');
        this.uiBubble.depth = 100;
        
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].spawn();
        }
        
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].spawn();
        }
        
        for(var i = 0; i < this.deadlineSet.length; i += 1){
            this.deadlineSet[i].spawn();
        }
    }
    
    dismiss(){
        
    }
}