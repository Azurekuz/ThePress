class ui_storyPitch{
    constructor(context, xLoc, yLoc, storyObj, reporterObj){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.curStory = storyObj;
        this.curReporter = reporterObj;
        this.isActive = false;
        
        this.uiBackground;
        this.uiBubble;
        this.pitchText;
        
        this.yesNoPrompt = [];
        this.sourceList = [];
        this.deadlineSet = [];
        
        this.btn_Yes = new Button(this.game, 1480, 214, 195, 141, null, 'ynBtn', null, 'uicon');
        this.btn_No = new Button(this.game, 1720, 214, 195, 141, null, 'ynBtn', null, 'uicon');
        this.btn_Yes.buttonParent = this;
        this.btn_No.buttonParent = this;
        
        this.yesNoPrompt.push(this.btn_Yes);
        this.yesNoPrompt.push(this.btn_No);
        
        this.btn_srcA = new Button(this.game, 1601, 441, 432, 77, null, 'srcBtn', null, 'tggle');
        this.btn_srcB = new Button(this.game, 1601, 538, 432, 77, null, 'srcBtn', null, 'tggle');
        this.btn_srcC = new Button(this.game, 1601, 635, 432, 77, null, 'srcBtn', null, 'tggle');
        
        this.sourceList.push(this.btn_srcA);
        this.sourceList.push(this.btn_srcB);
        this.sourceList.push(this.btn_srcC);
        this.sourceList.curSelected = null;
        this.sourceList.needsUpdate = false;
        
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].buttonValue = "Source " + (i + 1).toString();
            this.sourceList[i].buttonParent = this.sourceList;
            this.sourceList[i].listIndex = i;
        }
        
        this.btn_dlA = new Button(this.game, 1451, 826, 137, 101, null, 'dlBtn', null, 'tggle');
        this.btn_dlB = new Button(this.game, 1600, 826, 137, 101, null, 'dlBtn', null, 'tggle');
        this.btn_dlC = new Button(this.game, 1749, 826, 137, 101, null, 'dlBtn', null, 'tggle');
        
        this.deadlineSet.push(this.btn_dlA);
        this.deadlineSet.push(this.btn_dlB);
        this.deadlineSet.push(this.btn_dlC);
        this.deadlineSet.curSelected = null;
        this.deadlineSet.needsUpdate = false;
        
        for(var i = 0; i < this.deadlineSet.length; i += 1){
            this.deadlineSet[i].buttonValue = (i + 1);
            this.deadlineSet[i].buttonParent = this.deadlineSet;
            this.deadlineSet[i].listIndex = i;
        }
        
        this.headerRun;
        this.headerSrc;
        this.headerDln;
    }
    
    popUp(reporterObj, storyObj){
        /*this.testText = this.game.add.text(960, 540, "Lorem Ipsum", {fontSize: 16, fontFamily: "lores-9-wide",  });
        this.testText.depth = 200;*/
        
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
        
        this.headerRun = this.game.add.image(1605, 116, 'headerRun');
        this.headerSrc = this.game.add.image(1605, 375, 'headerSrc');
        this.headerDln = this.game.add.image(1594, 750, 'headerDln');
        this.headerRun.depth = 101;
        this.headerSrc.depth = 101;
        this.headerDln.depth = 101;
    }
    
    update(){
        if(this.deadlineSet.needsUpdate){
            console.log("Thank freakin' god, it works.");
           for(var i = 0; i < this.deadlineSet.length; i += 1){
               if(this.deadlineSet[i].isSelected && i != this.deadlineSet.curSelected){
                   console.log("Unselected!")
                  this.deadlineSet[i].isSelected = false;
                   this.deadlineSet[i].phaserObject.setFrame(0);
                }
           }
            this.deadlineSet.needsUpdate = !this.deadlineSet.needsUpdate;
        }
        if(this.sourceList.needsUpdate){
           for(var i = 0; i < this.sourceList.length; i += 1){
               if(this.sourceList[i].isSelected && i != this.sourceList.curSelected){
                    this.sourceList[i].isSelected = false;
                    this.sourceList[i].phaserObject.setFrame(0);
                }
           }
            this.sourceList.needsUpdate = !this.sourceList.needsUpdate;
        }
        
    }
    
    dismiss(){
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].phaserObject.destroy();
            delete this.yesNoPrompt[i];
        }
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].phaserObject.destroy();
            delete this.sourceList[i];
        }
        for(var i = 0; i < this.deadlineSet.length; i += 1){
            this.deadlineSet[i].phaserObject.destroy();
            delete this.deadlineSet[i];
        }
        this.headerRun.destroy();
        this.headerSrc.destroy();
        this.headerDln.destroy();
        this.uiBackground.destroy();
        this.uiBubble.destroy();
        this.game.uiPaused = false;
        this.game.notifications.removeNotif(this.curReporter);
        
        console.log(this.yesNoPrompt);
    }
}