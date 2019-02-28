class sceneBoot extends Phaser.Scene{
    /* This scene loads all needed assets and displays the game's title screen */
    constructor(){
        super({key: 'sceneBoot'}); //This calls Phaser.Scene to create a new scene.
    }

    preload(){
        /* Preload all needed game assets*/
        this.load.image('testScreen', 'assets/ui/mainMenu/ThePressTestScreen.png');
        this.load.spritesheet('menuBtn', 'assets/ui/mainMenu/MenuButton.png', {frameWidth: 568, frameHeight: 54});
        this.load.spritesheet('playerSprite', 'assets/sprites/player.png', {frameWidth: 84, frameHeight: 168});
        this.load.image('adsRoom', 'assets/stage/newsRoom/AdSales1.png');
        this.load.image('newsDesk', 'assets/stage/newsRoom/Glenn1.png');
        this.load.image('office', 'assets/stage/newsRoom/Office1.png');
        this.load.image('reporter', 'assets/prototype/reporter.png');
        this.load.image('roomFloor', 'assets/stage/newsRoom/roomFloor.png');
        this.load.image('storyUIBack', 'assets/prototype/storyUI.png');
        this.load.spritesheet('notif', 'assets/prototype/notif.png', {frameWidth: 30, frameHeight: 30});
        this.load.spritesheet('cooler', 'assets/stage/newsRoom/WaterCooler1.png', {frameWidth: 151, frameHeight: 124});
        this.load.spritesheet('welMat', 'assets/stage/newsRoom/Welcome1.png', {frameWidth: 151, frameHeight: 264});
        this.load.image('uiBack', 'assets/ui/storyPitch/uiBackground.png');
        this.load.image('textBubble', 'assets/ui/storyPitch/textBubble.png');
        this.load.spritesheet('smlBtn', 'assets/ui/storyPitch/pitchButton.png', {frameWidth: 75, frameHeight: 75});
        this.load.spritesheet('srcBtn', 'assets/ui/storyPitch/sourceButton.png', {frameWidth: 225, frameHeight: 75});
    }
    
    create(){
        this.isPaused = false;
        this.uiPaused = false;
        const testBackground = this.add.image(960, 540, "testScreen"); //Title background
        
        //Create the start button using a custom made button object.
        this.playButton = new Button(this, 960, 810, 568, 54, null, "menuBtn", null, 'opscn_scene_NewsRoom');
        this.playButton.spawn();
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
                debug: false,
            },
        },
        transparent: false,
        antialias: false,
        scaleMode: Phaser.Scale.ScaleModes.FIT,
};

var game = new Phaser.Game(config);