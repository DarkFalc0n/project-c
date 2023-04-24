import { Scene } from 'phaser';

export default class Loader extends Scene {
    constructor() {
        console.log("Hi from Constructor");
        super('loading-scene');
    }
    init() {
        console.log("hello")
        this.custom = {}
    }
    preload() {
        console.log("Hi from Preload");
        this.load.image('slime', 'assets/slime.png');
    }
    create() {
        let { width, height } = this.sys.game.canvas;
        this.add.text(width/2, height/2, "loading", { fontSize: '64px', fill: '#fff' });
        // this.slime = this.add.image(300, 300, 'slime');
        this.slime = this.physics.add.image(300, 300, "slime");
        this.keyControls = this.input.keyboard.createCursorKeys();
    }
    update() {
        // load next scene after 10 secs
        // setTimeout(() => {
        //     this.scene.start('main-menu-scene');
        // }, 10000)

        // Make the asset "slime" jump and move around
        this.movementManager();
        (function() {
            const gameId = document.getElementById("gameWindow"); // Target div that wraps the phaser game
            gameId.style.width = '100%'; // set width to 100%
            gameId.style.height = '100%'; // set height to 100%
        })(); 
    }

    movementManager() {
        if (this.keyControls.space.isDown === true) {
            this.move();
        }
        if (this.keyControls.left.isDown === true && this.keyControls.right.isDown === true) {
            this.stop();
            return;
        }
        if (this.keyControls.left.isUp === true) {
            this.stop();
        }
        if (this.keyControls.right.isUp === true) {
            this.stop();
        }
        if (this.keyControls.left.isDown === true) {
            this.move(-1);
            return;
        }
        if (this.keyControls.right.isDown === true) {
            this.move(1);
            return;
        }
    }
    stop() {
            this.slime.setVelocity(0, 0);
    }
    move(dir) {  //dir is the direction of movement
            const velocity = 300; //how fast can you control the base
            this.slime.setVelocity(dir * velocity, 0);
    }
}
