class scene_NewsRoom extends Phaser.Scene { 
    constructor(){
        super({key: 'scene_NewsRoom'});
    }
    
    preload(){
        
    }
    
    create(){
        console.log("Successfully entered the News Room Scene!"); 
        this.add.image(640, 360, 'roomFloor');
        this.office = new obj_department(this, 165, 167, 331, 334, "Office", 'office');
        this.ads = new obj_department(this, 135, 585, 271, 271, "Ads", 'adsRoom');
        this.office.spawnDepartmentObject();
        this.ads.spawnDepartmentObject();
        this.player = new obj_player(this, 1186, 94, 47, 47, 'playerSprite');
        this.player.spawn();
        
        this.physics.add.collider(this.player.phaserObject, this.office.phaserObject, this.interactWith);
        this.physics.add.collider(this.player.phaserObject, this.ads.phaserObject, this.interactWith);
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
}