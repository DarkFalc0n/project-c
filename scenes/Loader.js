import { Scene } from 'phaser';

export default class Loader extends Scene {
    constructor() {
        super('loading-scene');
    }
    init() {
        console.log("hello")
    }
    preload() {
        this.load.image('slime', 'assets/slime.png');
    }
    create() {
        //setting up key names
        this.keyControls = this.input.keyboard.createCursorKeys();
        this.upKey = this.keyControls.up;
        this.leftKey = this.keyControls.left;
        this.rightKey = this.keyControls.right;
        this.downKey = this.keyControls.down;
        //-------------------------------------

        //other variables
        this.scx = window.innerWidth; //screen center x
        this.scy = window.innerHeight;
        //--------------------------------

        this.add.text(
            this.scx,
            this.scy,
            "Loading",
            {
                fontFamily: 'Roboto Mono',
                fontSize: '64px',
                fontStyle: 'bold',
                fill: '#fff'
            }
        ).setOrigin(0.5);
        // this.slime = this.physics.add.image(300, 300, "slime");


    }
    update() {
        // this.movementManager()
    }

    movementManager() {
        //stopping conditions
        if ((this.leftKey.isDown && this.rightKey.isDown) || (this.upKey.isDown && this.downKey.isDown)) {
            this.stop();
        }
        if (this.leftKey.isUp || this.rightKey.isUp || this.upKey.isUp || this.downKey.isUp) {
            this.stop();
        }
        //---------------------

        var dir = {
            x: 0,
            y: 0
        };

        //movement
        if (this.leftKey.isDown === true) {
            dir.x = -1;
        }
        else if (this.rightKey.isDown === true) {
            dir.x = 1;
        }
        if (this.upKey.isDown === true) {
            dir.y = -1;
        }
        else if (this.downKey.isDown === true) {
            dir.y = 1;
        }
        this.move(dir);
        //-------------------
    }
    stop() {
        this.slime.setVelocity(0, 0);
    }
    move(dir) {  //dir is the direction of movement
        const velocity = 300;
        this.slime.setVelocity(dir.x * velocity, dir.y * velocity);
    }
}
