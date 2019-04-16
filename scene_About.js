class scene_About extends Phaser.Scene { 
    constructor(){
        super({key: 'scene_About'});
    }
    
    preload(){
        
    }
    
    create(){
        this.screen = this.add.image(960, 540, 'aboutScreen');
        this.xBtn = new Button(this, 1845, 75, 150, 150, null, "xBtn", null, 'opscn_sceneBoot');
        this.xBtn.spawn();
    }
    
    update(){
        
    }
}