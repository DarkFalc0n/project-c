import { CustomScene } from '@/types/index.d';
import { version } from '../package.json';


export default class MainMenu extends CustomScene {

    constructor() {
        super("MainMenu");        
    }
    
    preload() {
        
    }
    create() {
        const buttonHoverSound = this.sound.add('buttonhoversound');

        const setButtonHover = (button: Phaser.GameObjects.NineSlice, text: Phaser.GameObjects.Text) => {
            button.on('pointerover',
                function () {
                    button.setFrame(1).setScale(11);
                    text.setColor('red').setFontSize(90);
                    buttonHoverSound.play();
                }
            );
            button.on('pointerout',
                function () {
                    button.setFrame(0).setScale(10);
                    text.setColor('white').setFontSize(80);
                }
            );
        }
        let startButton: Phaser.GameObjects.NineSlice = this.add.nineslice(
            window.innerWidth,
            window.innerHeight,
            'buttonui',
            0, 80, 16, 5, 4, 4, 4).setInteractive();
        startButton.setScale(10);
        let startButtonText: Phaser.GameObjects.Text = this.add.text(
            startButton.x,
            startButton.y,
            'Start',
            { fontFamily: 'Minecraftia', fontSize: '80px', fontStyle: 'bold' }
        ).setOrigin(0.5);
        setButtonHover(startButton, startButtonText);
        let creditButton: Phaser.GameObjects.NineSlice = this.add.nineslice(
            window.innerWidth,
            window.innerHeight + startButton.height * 10 + 60,
            'buttonui',
            0, 80, 16, 5, 4, 4, 4).setInteractive();
        creditButton.setScale(10);
        let creditButtonText: Phaser.GameObjects.Text = this.add.text(
            creditButton.x,
            creditButton.y,
            'Credits',
            { fontFamily: 'Minecraftia', fontSize: '80px', fontStyle: 'bold' }
        ).setOrigin(0.5);
        setButtonHover(creditButton, creditButtonText);
        let versionText: Phaser.GameObjects.Text = this.add.text(
            window.innerWidth*2 - 30,
            window.innerHeight* 2 - 30,
            `v${version}`,
            { fontSize: '50px'}
        ).setOrigin(1)
    }
    update() {

    }
}
