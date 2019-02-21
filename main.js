class sceneBoot extends Phaser.Scene{
    constructor(){
        super({key: 'sceneBoot'});
    }

    preload(){
        this.load.image('testScreen', 'assets/ui/mainMenu/ThePressTestScreen.png');
        this.load.spritesheet('menuBtn', 'assets/ui/mainMenu/MenuButton.png', {frameWidth: 452, frameHeight: 54});
        this.load.spritesheet('playerSprite', 'assets/prototype/player.png', {frameWidth: 47, frameHeight: 47});
        this.load.image('adsRoom', 'assets/prototype/Ads.png');
        this.load.image('newsDesk', 'assets/prototype/newsDesk.png');
        this.load.image('office', 'assets/prototype/office.png');
        this.load.image('reporter', 'assets/prototype/reporter.png');
        this.load.image('roomFloor', 'assets/prototype/roomFloor.png');
        this.load.image('storyUIBack', 'assets/prototype/storyUI.png');
        this.load.spritesheet('notif', 'assets/prototype/notif.png', {frameWidth: 30, frameHeight: 30});
    }
    
    create(){
        this.isPaused = false;
        const testBackground = this.add.image(960, 540, "testScreen");
        this.playButton = new Button(this, 960, 810, null, "menuBtn", null, 'opscn_scene_NewsRoom');
        this.playButton.spawnButton();
        //this.testBtn = this.add.sprite(640, 520, "menuBtn");
        
        /*this.input.on('pointerdown', function () {
            this.input.stopPropagation();
            this.scene.start('scene_NewsRoom');
        }, this);*/
    }
}

var config = {
    type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        scene: [ sceneBoot, scene_NewsRoom, scene_Office, scene_Social],
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
            },
        },
        transparent: false,
        antialias: false,
        scaleMode: Phaser.Scale.ScaleModes.ENVELOP,
};

var game = new Phaser.Game(config);