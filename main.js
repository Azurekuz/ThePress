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
        this.load.image('adsRoom', 'assets/stage/newsRoom/AdSales.png');
        this.load.image('nd_Glenn', 'assets/stage/newsRoom/Glenn.png');
        this.load.image('nd_Laura', 'assets/stage/newsRoom/Laura.png');
        this.load.image('office', 'assets/stage/newsRoom/Office.png');
        this.load.image('reporter', 'assets/prototype/reporter.png');
        this.load.image('roomFloor', 'assets/stage/newsRoom/roomFloor.png');
        this.load.image('storyUIBack', 'assets/prototype/storyUI.png');
        this.load.spritesheet('notif', 'assets/prototype/notif.png', {frameWidth: 30, frameHeight: 30});
        this.load.spritesheet('cooler', 'assets/stage/newsRoom/WaterCooler.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('welMat', 'assets/stage/newsRoom/Welcome1.png', {frameWidth: 151, frameHeight: 264});
        this.load.image('uiBack', 'assets/ui/storyPitch/ReporterUI_background.png');
        this.load.image('textBubble', 'assets/ui/storyPitch/ReporterUI_Bubble.png');
        this.load.spritesheet('ynBtn', 'assets/ui/storyPitch/Reporter_YesOrNo.png', {frameWidth: 195, frameHeight: 141});
        this.load.spritesheet('dlBtn', 'assets/ui/storyPitch/Reporter_Deadline.png', {frameWidth: 137, frameHeight: 101});
        this.load.spritesheet('srcBtn', 'assets/ui/storyPitch/Reporter_Source.png', {frameWidth: 432, frameHeight: 77});
        this.load.image('headerRun', 'assets/ui/storyPitch/RunIt.png');
        this.load.image('headerSrc','assets/ui/storyPitch/MainSource.png');
        this.load.image('headerDln', 'assets/ui/storyPitch/Deadline.png');
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