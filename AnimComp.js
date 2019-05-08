class AnimComp{
    /* The animation compendium*/
    constructor(context){
        this.game = context;
        this.create();
    }
    
    create(){
        this.game.anims.create({
            key: 'walkLeft',
            frames: this.game.anims.generateFrameNumbers('playerSprite', {start: 6, end: 8}),
            frameRate: 9,
            repeat: -1
        });
        this.game.anims.create({
            key: 'walkRight',
            frames: this.game.anims.generateFrameNumbers('playerSprite', {start: 9, end: 11}),
            frameRate: 9,
            repeat: -1
        });
        this.game.anims.create({
            key: 'walkUp',
            frames: this.game.anims.generateFrameNumbers('playerSprite', {start: 3, end: 5}),
            frameRate: 9,
            repeat: -1
        });
        this.game.anims.create({
            key: 'walkDown',
            frames: this.game.anims.generateFrameNumbers('playerSprite', {start: 0, end: 2}),
            frameRate: 9,
            repeat: -1
        });
        this.game.anims.create({
            key: 'idle',
            frames: this.game.anims.generateFrameNumbers('playerSprite', {start: 0, end: 2}),
            frameRate: 3,
            repeat: -1
        });
        
        this.game.anims.create({
            key: 'flip',
            frames: this.game.anims.generateFrameNumbers('mobileToggle', {start: 0, end: 6}),
            frameRate: 16,
            repeat: 0
        });
    }
}