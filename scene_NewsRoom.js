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
        
        this.add.image(960, 540, 'roomFloor');
        this.office = new obj_department(this, 248, 250, 497, 501, "Office", 'office');
        this.ads = new obj_department(this, 406/2, 1080 - (406/2), 406, 406, "Ads", 'adsRoom');
        this.office.spawnDepartmentObject();
        this.ads.spawnDepartmentObject();
        this.player = new obj_player(this, 1186, 94, 47, 47, 'playerSprite');
        this.player.spawn();
        
        this.officeDesks = new struct_deskSet(this, 556, 928, 3, 1);
        this.testReporter = new obj_reporter(this, 0, 0, 47, 47, "Albert", 'reporter');
        this.officeDesks.deskArray.push(new obj_desk(this, 654, 928, 196, 304, 'newsDesk'));
        this.officeDesks.deskArray[0].hire(this.testReporter);
        
        this.officeDesks.spawn();
        this.officeDesks.deskArray[0].setToWork();
        this.officeDesks.deskArray[0].workingReporter.pitch(null);
        
        this.physics.add.collider(this.player.phaserObject, this.grp_departments, this.interactWith);
        this.physics.add.collider(this.player.phaserObject, this.grp_desks);
        this.physics.add.collider(this.player.phaserObject, this.grp_workers, this.storyPitch);
        //this.add.image(165, 167, 'office');
        //this.add.image(135, 585, 'adsRoom');
    }
    
    update(delta){
        this.player.update();
    }
    
    interactWith(player, department){
        if(player._objRef.game.controls.interactKey.isDown){
           department._objRef.accessDepartment();
        }
    }
    
    storyPitch(player, reporter){
        
    }
}