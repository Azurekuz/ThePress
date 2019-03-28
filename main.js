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
        this.load.spritesheet('notif', 'assets/sprites/SpeechBubbleFull.png', {frameWidth: 361, frameHeight: 230});
        this.load.spritesheet('cooler', 'assets/stage/newsRoom/WaterCooler.png', {frameWidth: 171, frameHeight: 101});
        this.load.spritesheet('welMat', 'assets/stage/newsRoom/Welcome1.png', {frameWidth: 151, frameHeight: 264});
        this.load.image('uiBack', 'assets/ui/storyPitch/ReporterUI_background.png');
        this.load.image('textBubble', 'assets/ui/storyPitch/StoryPitchUI.png');
        this.load.spritesheet('ynBtn', 'assets/ui/storyPitch/RunItButton_Sprite.png', {frameWidth: 194, frameHeight: 141});
        this.load.spritesheet('dlBtn', 'assets/ui/storyPitch/DeadlineButton_Sprite.png', {frameWidth: 136.3, frameHeight: 101});
        this.load.spritesheet('srcBtn', 'assets/ui/storyPitch/SourceButton_Sprite.png', {frameWidth: 433, frameHeight: 77});
        this.load.image('headerRun', 'assets/ui/storyPitch/RunIt.png');
        this.load.image('headerSrc','assets/ui/storyPitch/MainSource.png');
        this.load.image('headerDln', 'assets/ui/storyPitch/Deadline.png');
        this.load.image('progressBar', 'assets/ui/office/ProgressBar.png');
        this.load.image('barFill', 'assets/ui/office/barFill.png');
        this.load.spritesheet('credBar', 'assets/ui/office/BarSolo.png', {frameWidth: 404, frameHeight: 54});
        this.load.spritesheet('adAccept', 'assets/ui/adSales/AdAcceptButton_Sprite.png', {frameWidth: 322, frameHeight:233});
        this.load.image('adBubble', 'assets/ui/adSales/AdvertiserBubble.png');
        this.load.image('acceptHeader', 'assets/ui/adSales/Accept.png');
        this.load.image('adBack', 'assets/ui/adSales/adBackground.png');
    }
    
    create(){
        this.isPaused = false; //The variable used to pause the entire game.
        this.uiPaused = false; //The vaiable used to pause/prevent specific events when in the UI, like player movement.
        const testBackground = this.add.image(960, 540, "testScreen"); //Title background
        
        //Create the start button using a custom made button object.
        this.playButton = new Button(this, 960, 810, 568, 54, null, "menuBtn", null, 'opscn_scene_NewsRoom');
        this.playButton.spawn();
    }
}

var config = { //API Configuration for the Phaser game
    type: Phaser.AUTO,
        width: 1920, //Window width
        height: 1080, //Window height
        scene: [ sceneBoot, scene_NewsRoom, scene_Office, scene_Social], //All of the Phaser scenes
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
            },
        },
        transparent: false,
        antialias: false, //Antialiasing/smoothing, I disabled it to avoid having things look blurry
        scaleMode: Phaser.Scale.ScaleModes.FIT, //Method of scaling the screen size according to how big the window is.
};

var game = new Phaser.Game(config);