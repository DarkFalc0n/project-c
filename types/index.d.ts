import Phaser, { Scene } from 'phaser';

export class CustomScene extends Scene {
    scx: number;
    scy: number;
    loadingText: Phaser.GameObjects.Text;
    loadingBar: Phaser.GameObjects.Rectangle;
    keyControls: Phaser.Types.Input.Keyboard.CursorKeys;
    upKey: Phaser.Input.Keyboard.Key;
    leftKey: Phaser.Input.Keyboard.Key;
    rightKey: Phaser.Input.Keyboard.Key;
    downKey: Phaser.Input.Keyboard.Key;    
}