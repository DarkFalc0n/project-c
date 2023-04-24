import { Scene } from 'phaser';
export default class Loader extends Scene {
    constructor() {
        console.log("Hi from Constructor");
        super('loading-scene');
    }
    init() {
        console.log("hello")
    }
    preload() {
        console.log("Hi from Preload");
    }
    create() {
        this.add.text(100, 100, "loading");
    }
    update() {
        // load next scene after 10 secs
        setTimeout(() => {
            this.scene.start('main-menu-scene');
        }, 10000)
    }
}