class scene_NewsRoom extends Phaser.Scene {  //This is an extension of Phaser's scnee class, in other words it's a scene.
    constructor(){
        super({key: 'scene_NewsRoom'}); //This is the scene's key, or the identifier that's used when you want to tell Phaser to what scene you want to change to.
    }
    
    preload(){
        
    }
    
    create(){
        console.log("Successfully entered the News Room Scene!"); 
        
        //var dataReader = JSON.parse(this.pitchData);
        
        //console.log(dataReader);
        this.gameMaster = new GameMaster(this, 5000, 15, 0, 35);
        this.muteButton = new Button(this, 50, 1030, 100, 100, null, "muteBTN", null, 'mtBGM');
        this.muteButton.spawn();
        this.muteButton.phaserObject.depth = 100;
        
        this.grp_departments = this.gameMaster.grp_departments; //This is the Phaser group for sprites representing offices and departments like the Office or Ad Sales
        this.grp_desks = this.gameMaster.grp_desks; //This is the Phaser group for news desk sprites
        this.grp_workers = this.gameMaster.grp_workers;  //The Phaser group for workers, although we probably aren't going to be using this.
        this.notifications = this.gameMaster.notifications; //This is the notification system/object.
        
        this.ui_dayCounter = new ui_dayCount(this, 10, 10, 1);
        this.ui_dayCounter.spawn();
        this.ui_storyPitch = new ui_storyPitch(this, 0, 0, null, null); //This is the Story Pitch UI object
        this.ui_adSales = new ui_adSales(this, 0, 0, null);
        //Just some arbitrary variables and numbers, are changed when the test story is complete.
        this.ui_budget = new ui_budget(this, 30, 60, 5000, 83); //Budget UI
        this.ui_budget.spawn(); 
        this.ui_viewers = new ui_viewers(this, 30, 100, 0);
        this.ui_viewers.spawn();
        
        this.add.image(960, 540, 'roomFloor'); //The news room floor.
        this.office = new obj_department(this, 198, 475, 349, 384, "office", 'office'); //The office department object.
        this.ads = new obj_department(this, 281, 945, 606, 330, "ads", 'adsRoom'); //The Ad Sales department object
        this.waterCooler = new obj_department(this, 1160, 50, 171, 101, " ", 'cooler'); //Water cooler object
        this.welMat = this.add.sprite(1855, 152, 'welMat'); //The welcome mat object
        this.office.spawnDepartmentObject(); //Calling the function to spawn/make said object appear
        this.ads.spawnDepartmentObject(); //Same goes for this one
        this.waterCooler.spawnDepartmentObject(); //And this one as well
        this.player = new obj_player(this, 1650, 250, 47, 47, 'playerSprite'); //Player object
        this.player.spawn(); //Spawn the player object
        
        this.officeDesks = this.gameMaster.officeDesks; //Set of desks
        //928
        for(var i = 0; i < 3; i += 1){ //Add two desks to the desk set
            this.officeDesks.addDesk();
        }
        
        this.testReporter = new obj_reporter(this, 0, 0, 14, 28, "Glenn", 'reporter'); //Just a test reporter object.
        //this.testReporterB = new obj_reporter(this, 0, 0, 14, 28, "Laura", 'reporter'); //Just a test reporter object.
        this.officeDesks.deskArray[1].hire(this.testReporter); //Hire and place the reporter at the specified desk.
        this.officeDesks.deskArray[0].hire(new obj_reporter(this, 0, 0, 14, 28, "Laura", 'reporter')); //Hire and place the reporter at the specified desk.
        
        //this.officeDesks.deskArray[1].hire(this.testReporterB);
        this.officeDesks.spawn(); //Spawn all of the desks in the set.
        this.officeDesks.deskArray[0].setToWork(); //Have the worker in the first desk be active and working.
        /*this.officeDesks.deskArray[0].workingReporter.pitch(this.gameMaster.storyCollection.pitchArray[0]);
        this.officeDesks.deskArray[1].workingReporter.pitch(this.gameMaster.storyCollection.pitchArray[1]);//Have the worker pitch the story.*/
        
        //These are all physics stuff to make sure the player collides with the departments, cooler, and/or desks.
        this.physics.add.collider(this.player.phaserObject, this.grp_departments, this.interactWith);
        this.physics.add.collider(this.player.phaserObject, this.grp_desks, this.storyPitch);
        this.physics.add.collider(this.player.phaserObject, this.grp_workers);
        this.tick = 0;
        this.tickDay = 0;
        //this.add.image(165, 167, 'office');
        //this.add.image(135, 585, 'adsRoom');
        this.gameMaster.getRandReporter().pitch(this.gameMaster.pushPitch());
    }
    
    update(delta){ //The game update loop
        console.log(this.game.isPaused);
        if(!this.game.isPaused){ //if the game is not paused...
            this.player.update(); //Then update the player (mostly means allowing the user to control the player)
            this.gameMaster.update();
            if(this.ui_storyPitch.isActive){ //Are we in the middle of handling a story pitch?
               this.ui_storyPitch.update(); //If so, update the story pitch UI
            }
            if(this.ui_adSales.isActive){
               this.ui_adSales.update();
            }
            if((this.time.now - this.tickDay) > 300000){ //This is what's in charge of time passing second by second
                this.ui_dayCounter.nextDay();
                this.tickDay = this.time.now; //Reset the tick tracker in preperation for the next passing second.
            }
            this.ui_budget.update();
            if((this.time.now - this.tick) > 1000){ //This is what's in charge of time passing second by second
                if(this.ui_viewers.isActive){
                    this.ui_viewers.update();
                }
                this.officeDesks.update(); //Update the story every second.
                this.tick = this.time.now; //Reset the tick tracker in preperation for the next passing second.
            }
        }
    }
    
    interactWith(player, department){ //A function that's called when the player collides or walks into a department.
        if(department._objRef.depName == "ads" && !player._objRef.game.ui_adSales.isActive){
            department._objRef.accessDepartment();
        }
    }
    
    storyPitch(player, desk){ //The function that's called when a player walks into a desk with a story pitch.
        if(!player._objRef.game.ui_storyPitch.isActive && (desk.objRef.workingReporter)){
           if(desk.objRef.workingReporter.needsNotify){
                player._objRef.game.ui_storyPitch.popUp(desk.objRef.workingReporter, desk.objRef.workingReporter.storyPitch);
                player._objRef.game.ui_storyPitch.isActive = true;
                player._objRef.game.ui_storyPitch.curReporter = desk.objRef.workingReporter;
                desk.objRef.workingReporter.needsNotify = false;
                player._objRef.game.uiPaused = true;
            }
        }
    }
}