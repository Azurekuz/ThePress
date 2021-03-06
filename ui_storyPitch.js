class ui_storyPitch{ //OH BOY THIS IS THE STORY PITCH UI CODE, I'M SO GLAD THAT I'M COMMENTING THIS LAST.
    constructor(context, xLoc, yLoc, storyObj = null, reporterObj){
        this.game = context; //Phaser game reference
        this.xLocation = xLoc; //X location of the story pitch UI
        this.yLocation = yLoc; //Y location of the story pitch UI
        this.curStory = storyObj; //The story object which this UI is currently concerned with.
        this.curReporter = reporterObj; //The current reporter that's doing the pitch
        this.isActive = false; //Is the UI active?
        
        //Visual UI stuff
        this.uiBackground;
        this.uiBubble;
        this.pitchText;
        
        //Array of buttons basically
        this.yesNoPrompt = [];
        this.sourceList = [];
        this.deadlineSet = [];
        
        this.selSource;
        this.selDL;
        
        //Oh boy, let's create some Yes/No buttons.
        this.btn_Yes = new Button(this.game, 1480, 214, 195, 141, null, 'ynBtn', null, 'uicon');
        this.btn_No = new Button(this.game, 1720, 214, 195, 141, null, 'ynBtn', null, 'uicon');
        this.yesNoPrompt.push(this.btn_Yes);
        this.yesNoPrompt[0].buttonValue = "Y"
        this.yesNoPrompt.push(this.btn_No);
        this.yesNoPrompt[1].buttonValue = "N"
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].buttonParent = this.yesNoPrompt;
        }
        
        //Let's create some source buttons.
        this.btn_srcA = new Button(this.game, 1601, 441, 432, 77, null, 'srcBtn', null, 'tggle');
        this.btn_srcB = new Button(this.game, 1601, 538, 432, 77, null, 'srcBtn', null, 'tggle');
        this.btn_srcC = new Button(this.game, 1601, 635, 432, 77, null, 'srcBtn', null, 'tggle');
        
        this.sourceList.push(this.btn_srcA);
        this.sourceList.push(this.btn_srcB);
        this.sourceList.push(this.btn_srcC);
        this.sourceList.curSelected = null;
        this.sourceList.needsUpdate = false;
        
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].buttonValue = null;
            this.sourceList[i].buttonParent = this.sourceList;
            this.sourceList[i].listIndex = i;
        }
        
        //Let's create some deadline buttons.
        this.btn_dlA = new Button(this.game, 1451, 826, 137, 101, null, 'dlBtn', null, 'tggle');
        this.btn_dlB = new Button(this.game, 1600, 826, 137, 101, null, 'dlBtn', null, 'tggle');
        this.btn_dlC = new Button(this.game, 1749, 826, 137, 101, null, 'dlBtn', null, 'tggle');
        
        this.deadlineSet.push(this.btn_dlA);
        this.deadlineSet.push(this.btn_dlB);
        this.deadlineSet.push(this.btn_dlC);
        this.deadlineSet.curSelected = null;
        this.deadlineSet.needsUpdate = false;
        
        for(var i = 0; i < this.deadlineSet.length; i += 1){
            this.deadlineSet[i].buttonValue = null;
            this.deadlineSet[i].buttonParent = this.deadlineSet;
            this.deadlineSet[i].listIndex = i;
        }
        
        //More UI visual stuff.
        this.headerRun;
        this.headerSrc;
        this.headerDln;
    }
    
    popUp(reporterObj, storyObj){ //Function to make the UI appear and have everything where it should be.
        /*this.testText = this.game.add.text(960, 540, "Lorem Ipsum", {fontSize: 16, fontFamily: "lores-9-wide",  });
        this.testText.depth = 200;*/
        
        this.uiBackground = this.game.add.image(960, 540, 'uiBack');
        this.uiBackground.depth = 100;
        this.uiBubble = this.game.add.image(673, 554, 'textBubble');
        this.uiBubble.depth = 101;
        this.curStory = storyObj;
        
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].spawn();
            var moveItHere;
            if(this.yesNoPrompt[i].buttonValue == "Y"){
                moveItHere = this.yesNoPrompt[i].xLocation - (this.yesNoPrompt[i].width/4) + 15;
            }else{
                moveItHere = this.yesNoPrompt[i].xLocation - (this.yesNoPrompt[i].width/4);
            }
            this.yesNoPrompt[i].phaserText = this.game.add.text(moveItHere, this.yesNoPrompt[i].yLocation - (this.yesNoPrompt[i].height/4), this.yesNoPrompt[i].buttonValue, {fontFamily: "lores-9-wide, Calibri", fontSize: 96});
            this.yesNoPrompt[i].phaserText.setOrigin(0, 0.25);
            this.yesNoPrompt[i].phaserText.depth = 103;
            this.yesNoPrompt[i].phaserObject.depth = 101;
            this.yesNoPrompt[i].isSelected = false;
        }
        
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].buttonValue = this.curStory.sources[i];
            this.sourceList[i].spawn();
            
            var fontSize = 36;
            
            this.sourceList[i].phaserText = this.game.add.text(this.sourceList[i].phaserObject.x, this.sourceList[i].phaserObject.y, this.sourceList[i].buttonValue.sourceLabel, {fontFamily: "lores-9-wide, Calibri", fontSize: fontSize});
            this.sourceList[i].phaserText.setOrigin(0.5, 0.5);
            this.sourceList[i].phaserText.depth = 103;
            this.sourceList[i].phaserObject.depth= 101;
            this.sourceList[i].isSelected = false;
        }
        
        for(var i = 0; i < this.deadlineSet.length; i += 1){    
            this.deadlineSet[i].spawn();
            this.deadlineSet[i].phaserObject.depth = 101;
            this.deadlineSet[i].phaserText = this.game.add.text(this.deadlineSet[i].phaserObject.x, this.deadlineSet[i].phaserObject.y, this.curStory.deadlines[i], {fontFamily: "lores-9-wide, Calibri", fontSize: 48});
            this.deadlineSet[i].phaserText.depth = 103;
            this.deadlineSet[i].phaserText.setOrigin(0.5, 0.5);
            this.deadlineSet[i].isSelected = false;
            this.deadlineSet[i].buttonValue = this.curStory.deadlines[i];
        }
        
        this.headerRun = this.game.add.image(1605, 116, 'headerRun');
        this.headerSrc = this.game.add.image(1605, 375, 'headerSrc');
        this.headerDln = this.game.add.image(1594, 750, 'headerDln');
        this.headerRun.depth = 101;
        this.headerSrc.depth = 101;
        this.headerDln.depth = 101;
        
        if(this.curStory != null){
           this.addText(reporterObj);
        }
    }
    
    update(){ //The UI's update loop
        if(this.yesNoPrompt.needsUpdate){ //Hey do we need to update because of the Y/N buttons being clicked?
               if(this.yesNoPrompt[0].isSelected && this.isSelected()){
                    this.curReporter.takeOnStory(this.selSource.buttonValue, this.selDL.buttonValue);
                    this.yesNoPrompt[0].isSelected = false;
                    this.dismiss(); //Dismiss the UI
                    this.yesNoPrompt.needsUpdate = !this.yesNoPrompt.needsUpdate; //We no longer need updating.
                }else if(this.yesNoPrompt[0].isSelected){
                    this.yesNoPrompt[0].isSelected = false;
                    this.yesNoPrompt[0].phaserObject.enterRestState;
                    this.yesNoPrompt.needsUpdate = false;
                }else if(this.yesNoPrompt[1].isSelected){
                    this.yesNoPrompt[1].isSelected = false;
                    this.dismiss(); //Dismiss the UI
                    this.yesNoPrompt.needsUpdate = !this.yesNoPrompt.needsUpdate; //We no longer need updating.
                }
        }
        if(this.deadlineSet.needsUpdate){
           for(var i = 0; i < this.deadlineSet.length; i += 1){ //Basically what makes the buttons visually toggle and not have multiple be selected at once.
               if(this.deadlineSet[i].isSelected && i != this.deadlineSet.curSelected){
                  this.deadlineSet[i].isSelected = false;
                   this.deadlineSet[i].phaserObject.setFrame(0);
                }else if(this.deadlineSet[i].isSelected && i == this.deadlineSet.curSelected){
                    this.selDL = this.deadlineSet[i];
                }
           }
            this.deadlineSet.needsUpdate = !this.deadlineSet.needsUpdate;
        }
        if(this.sourceList.needsUpdate){ //Same deal with these.
           for(var i = 0; i < this.sourceList.length; i += 1){
               if(this.sourceList[i].isSelected && i != this.sourceList.curSelected){
                    this.sourceList[i].isSelected = false;
                    this.sourceList[i].phaserObject.setFrame(0);
                }else if(this.sourceList[i].isSelected && i == this.sourceList.curSelected){
                    this.selSource = this.sourceList[i];
                }
           }
            this.sourceList.needsUpdate = !this.sourceList.needsUpdate;
        }
        
    }
    
    isSelected(){
        var srcSelected = false;
        var dlSelected = false;
        for(var i = 0; i < 3; i += 1){
            if(this.sourceList[i].isSelected){
                srcSelected = true;
            }
            if(this.deadlineSet[i].isSelected){
               dlSelected = true;
            }
        }
        
        if(srcSelected && dlSelected){
            return true;
        }else{
            return false;
        }
    }
    
    addText(reporterObj){ //Add the pitch text, I have NO clue why it sometimes doesn't bother to show up.
        //this.pitchText = this.game.add.text(157, 99, this.curStory.description, {fontFamily: "lores-9-wide", fontSize: 48, wordWrap: { width: 1040, useAdvancedWrap: true }, align: "center"});
        this.pitchText = this.game.add.text(157, 200, this.curStory.description + reporterObj.name, {fontFamily: "lores-9-wide, neusa-next-std Calibri, Arial, Times New Roman", fontSize: 48, wordWrap: { width: 1040, useAdvancedWrap: true }, align: "center", fontWeight: "bold"});
        this.pitchText.depth = 105;
    }
    
    dismiss(){ //Dismiss the UI and all of its elements using possible maximum destruction... ...at least I'd like to think so.
        for(var i = 0; i < this.yesNoPrompt.length; i += 1){
            this.yesNoPrompt[i].phaserObject.destroy();
            this.yesNoPrompt[i].phaserText.destroy();
        }
        for(var i = 0; i < this.sourceList.length; i += 1){
            this.sourceList[i].phaserObject.destroy();
            this.sourceList[i].phaserText.destroy();
        }
        for(var i = 0; i < this.deadlineSet.length; i += 1){
            this.deadlineSet[i].phaserObject.destroy();
            this.deadlineSet[i].phaserText.destroy();
        }
        this.headerRun.destroy();
        this.headerSrc.destroy();
        this.headerDln.destroy();
        this.uiBackground.destroy();
        this.uiBubble.destroy();
        this.pitchText.destroy();
        this.game.uiPaused = false;
        this.game.notifications.removeNotif(this.curReporter);
        this.isActive = false;
        this.curStory.pitched = true;
    }
    
    /*So yeah, that sums up a good portion of the code, in case you haven't noticed I got increasingly loopier as I went about doing the comments. They say programmers function under an 
    optimal BAC level; however, I'm too damn sober. If it wasn't apparent, I must subconsiously find commenting to seemingly be its own layer of hell because of how often I don't do it, but who knows?
    We've got to do it to keep our sanity, I suppose.*/
}