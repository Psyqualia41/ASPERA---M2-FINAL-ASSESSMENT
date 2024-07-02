class CreditsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditsScene' });
    }

    preload(){
        this.load.image('background', 'assets/images/menuBG.png');
        this.load.image('vignette', 'assets/images/misc/vignette.jpg');
    }

    create() {
        const background = this.add.image(400, 300, 'background').setDisplaySize(800, 600);
        const vignette = this.add.image(400, 300, 'vignette').setDisplaySize(800, 600);
        vignette.setAlpha(0.5);

        const backButton = this.add.text(20, 20, 'Back', {
            fontSize: '24px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setInteractive();

        backButton.on('pointerup', () => {
            this.scene.start('MainMenuScene'); 
        });

        this.add.text(400, 100, 'Assets and Game Created by', {
            fontSize: '48px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        this.add.text(400, 250, 'ASPERA, Jules Dominic Y.', {
            fontSize: '36px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        this.add.text(400, 300, 'A223', {
            fontSize: '24px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        this.add.text(400, 350, 'Entertainment and Multimedia Computing', {
            fontSize: '24px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);
    }
}

export default CreditsScene;