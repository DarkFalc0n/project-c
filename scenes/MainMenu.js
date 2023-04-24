import Phaser from 'phaser';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('main-menu-scene');
    }
    preload() {

    }
    create() {
        this.add.text(100, 100, "Hi Player !!");
    }
    update() {

    }
}
