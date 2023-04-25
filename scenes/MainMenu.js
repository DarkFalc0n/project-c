import Phaser from 'phaser';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }
    preload() {

    }
    create() {
        this.add.text(100, 100, "Hi Player !!", { fontSize: '64px', fill: '#fff' });
    }
    update() {

    }
}
