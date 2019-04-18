class scene_How extends Phaser.Scene { 
    constructor(){
        super({key: 'scene_How'});
    }
    
    preload(){
        
    }
    
    create(){
        this.screen = this.add.image(960, 540, 'howScreen');
        this.xBtn = new Button(this, 1845, 75, 150, 150, null, "xBtn", null, 'opscn_sceneBoot');
        this.xBtn.spawn();
        this.guideBtn = new Button(this, 940, 875, 405, 113, null, "guideBtn", null, 'opURL_https://www.spj.org/ethicscode.asp');
        this.guideBtn.spawn();
    }
    
    update(){
        
    }
}