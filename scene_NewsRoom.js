class scene_NewsRoom extends Phaser.Scene { 
    constructor(){
        super({key: 'scene_NewsRoom'});
    }
    
    preload(){
        
    }
    
    create(){
        console.log("Successfully entered the News Room Scene!"); 
        
        this.grp_departments = this.add.group();
        this.grp_desks = this.add.group();
        this.grp_workers = this.add.group();
        this.notifications = new sys_notify(this);
        this.ui_storyPitch = new ui_storyPitch(this, 0, 0, null, null);
        
        this.add.image(960, 540, 'roomFloor');
        this.office = new obj_department(this, 198, 315, 349, 384, " ", 'office');
        this.ads = new obj_department(this, 281, 945, 606, 330, " ", 'adsRoom');
        this.waterCooler = new obj_department(this, 1160, 50, 171, 101, " ", 'cooler');
        this.welMat = this.add.sprite(1855, 152, 'welMat');
        this.office.spawnDepartmentObject();
        this.ads.spawnDepartmentObject();
        this.waterCooler.spawnDepartmentObject();
        this.player = new obj_player(this, 1650, 250, 47, 47, 'playerSprite');
        this.player.spawn();
        
        this.officeDesks = new struct_deskSet(this, 873, 1001, 3, 3, 310, 210, 295, 201, 'nd_Glenn', 3, 3);
        //928
        for(var i = 0; i < 3; i += 1){
            this.officeDesks.addDesk();
        }
        
        this.testReporter = new obj_reporter(this, 0, 0, 14, 28, "Albert", 'reporter');
        this.officeDesks.deskArray[0].hire(this.testReporter);
        
        this.officeDesks.spawn();
        this.officeDesks.deskArray[0].setToWork();
        this.officeDesks.deskArray[0].workingReporter.pitch(null);
        
        this.physics.add.collider(this.player.phaserObject, this.grp_departments, this.interactWith);
        this.physics.add.collider(this.player.phaserObject, this.grp_desks, this.storyPitch);
        this.physics.add.collider(this.player.phaserObject, this.grp_workers);
        //this.add.image(165, 167, 'office');
        //this.add.image(135, 585, 'adsRoom');
    }
    
    update(delta){
        if(!this.isPaused){
            this.player.update();
            if(this.ui_storyPitch.isActive){
               this.ui_storyPitch.update();
            }
        }
    }
    
    interactWith(player, department){
        if(player._objRef.game.controls.interactKey.isDown){
           department._objRef.accessDepartment();
        }
    }
    
    storyPitch(player, desk){
        if(player._objRef.isInteracting && (desk.objRef.workingReporter)){
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