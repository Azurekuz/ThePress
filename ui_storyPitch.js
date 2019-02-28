class ui_storyPitch{
    constructor(context, xLoc, yLoc, storyObj, reporterObj){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.curStory = storyObj;
        this.curReporter = reporterObj;
        this.isActive = false;
        
        this.uiBackground;
        this.ui_bubble; //673 554
        this.pitchText;
        
        this.yesNoPrompt = [];
        this.sourceList = [];
        this.deadlineSet = [];
        
        this.btn_Yes = new Button(this.game, 1480, 214, 195, 141, null, 'ynBtn', null);
        this.btn_No = new Button(this.game, 1720, 214, 195, 141, null, 'ynBtn', null);
        
        this.yesNoPrompt.push(this.btn_Yes);
        this.yesNoPrompt.push(this.btn_No);
        
        this.btn_srcA = new Button(this.game, 1601, 441, 432, 77, null, 'srcBtn', null);
        this.btn_srcB = new Button(this.game, 1601, 538, 432, 77, null, 'srcBtn', null);
        this.btn_srcC = new Button(this.game, 1601, 635, 432, 77, null, 'srcBtn', null);
        
        this.sourceList.push(this.btn_srcA);
        this.sourceList.push(this.btn_srcB);
        this.sourceList.push(this.btn_srcC);
        
        this.btn_dlA = new Button(this.game, 1451, 826, 137, 101, null, 'dlBtn', null);
        this.btn_dlB = new Button(this.game, 1600, 826, 137, 101, null, 'dlBtn', null);
        this.btn_dlC = new Button(this.game, 1749, 826, 137, 101, null, 'dlBtn', null);
        
        this.sourceList.push(this.btn_dlA);
        this.sourceList.push(this.btn_dlB);
        this.sourceList.push(this.btn_dlC);
        
        this.headerRun;
        this.headerSrc;
        this.headerDln;
    }
    
    popUp(reporterObj, storyObj){
        this.uiBackground = this.game.add.image(960, 540, 'uiBack');
        this.uiBackground.depth = 100;
        this.uiBubble = this.game.add.image(673, 554, 'textBubble');
        this.uiBubble.depth = 101;
        
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].spawn();
            this.yesNoPrompt[i].phaserObject.depth = 101;
        }
        
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].spawn();
            this.sourceList[i].phaserObject.depth = 101;
        }
        
        for(var i = 0; i < this.deadlineSet.length; i += 1){
            this.deadlineSet[i].spawn();
            this.deadlineSet[i].phaserObject.depth = 101;
        }
        
        this.headerRun = this.game.add.image(1594, 726, 'headerRun');
        this.headerSrc = this.game.add.image(1605, 375, 'headerSrc');
        this.headerDln = this.game.add.image(1605, 116, 'headerDln');
        this.headerRun.depth = 101;
        this.headerSrc.depth = 101;
        this.headerDln.depth = 101;
    }
    
    dismiss(){
        
    }
}