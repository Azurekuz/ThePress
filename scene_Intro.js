class scene_Intro extends Phaser.Scene{
    constructor(){
        super({key: 'scene_Intro'});
    }
    
    preload(){
        
    }
    
    create(){
        this.video = new video_t(this, 'intro', 960, 540, 'intro', 'assets/media/introVideo.mp4', 1920, 1080, false);
        this.video.depth = 0;
        this.video.setInteractive({useHandCursor: true}) 
            .on('pointerdown', () => this.skip());
        this.xBtn = new Button(this, 1845, 75, 150, 150, null, "xBtn", null, 'opscn_scene_NewsRoom', false);
        this.xBtn.spawn();
    }
    
    update(){
        if(this.video){
            this.video.update();
        }
    }
    
    skip(){
        this.scene.start("scene_NewsRoom");
    }
}