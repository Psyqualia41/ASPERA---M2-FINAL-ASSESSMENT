class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        this.load.image('mainmenu', 'assets/images/menu/menuBG.png');
        this.load.image('playButton', 'assets/images/buttons/Startbtn.png');
        this.load.image('quitButton', 'assets/images/buttons/Quitbtn.png');

        
        this.load.audio('bgm', 'assets/audio/bgm/menuBGM.mp3');
        this.load.audio('buttonSfx', 'assets/audio/sfx/buttonSFX.mp3');
        this.load.audio('gameBgm', 'assets/audio/bgm/gameBGM.mp3');
    }

    create() {
        
        if (!this.bgm || !this.bgm.isPlaying) {
            
            this.bgm = this.sound.add('bgm', { loop: true, volume: 0.06 }); 
            this.bgm.play();
        }
        const mainmenu1 = this.add.image(400, 300, 'mainmenu').setDisplaySize(800, 600);

        const playButton = this.add.image(400, 200, 'playButton').setInteractive();
        playButton.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height - 250);

        playButton.on('pointerdown', () => {
            
            this.sound.play('buttonSfx');
            this.bgm.stop();
            this.scene.start('GameScene');
        });

        const quitButton = this.add.image(this.sys.game.config.width - 100, 100, 'quitButton').setInteractive();
        quitButton.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height - 100);
        quitButton.on('pointerdown', () => {
            
            this.sound.play('buttonSfx');
            alert('Thank you for playing! I hope to see you next time on my journey!');
        });

    }
}

export default MainMenuScene;