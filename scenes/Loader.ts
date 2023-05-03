import { CustomScene } from '@/types/index.d';

export default class Loader extends CustomScene {
    constructor() {
        super("Loader");
    }
    init() {
    }
    preload() {
        //loading assets for scenes
        this.load.image('slime', 'assets/slime.png');
        //-------------------------

        //creating variables
        this.scx = window.innerWidth; //screen center x
        this.scy = window.innerHeight;
        //--------------------------------

        this.loadingText = this.add.text(
            this.scx,
            this.scy - 100,
            "Loading",
            {
                fontFamily: 'Courier New',
                fontSize: '64px',
                fontStyle: 'bold',
                color: '#FFFFFF',
            }
        ).setOrigin(0.5);

        this.add.rectangle(
            this.scx,
            this.scy,
            1200,
            50,
            0
        ).setStrokeStyle(10, 0xFFFFFF);

        this.loadingBar = this.add.rectangle(
            this.scx - 1170 / 2,
            this.scy,
            400,
            20,
            0xFFFFFF
        ).setOrigin(0, 0.5)

        this.load.on("progress", (percent: number) => {
            this.loadingBar.width = (1170 * percent);
            this.loadingText.text = 'Loading ' + (percent * 100) + '%';
        })

        this.load.on("complete", () => {
            setTimeout(() => {
                this.scene.start("MainMenu")
            }, 1000);
        });

        this.load.on("load", (file: Phaser.Loader.File) => {
            console.log(file.src)
        })

    }
    create() {
        // //setting up key names
        this.keyControls = this.input.keyboard.createCursorKeys();
        this.upKey = this.keyControls.up;
        // this.leftKey = this.keyControls.left;
        // this.rightKey = this.keyControls.right;
        // this.downKey = this.keyControls.down;
        // //-------------------------------------
    }
    update() {
    }

    // movementManager() {
    //     //stopping conditions
    //     if ((this.leftKey.isDown && this.rightKey.isDown) || (this.upKey.isDown && this.downKey.isDown)) {
    //         this.stop();
    //     }
    //     if (this.leftKey.isUp || this.rightKey.isUp || this.upKey.isUp || this.downKey.isUp) {
    //         this.stop();
    //     }
    //     //---------------------

    //     var dir = {
    //         x: 0,
    //         y: 0
    //     };

    //     //movement
    //     if (this.leftKey.isDown === true) {
    //         dir.x = -1;
    //     }
    //     else if (this.rightKey.isDown === true) {
    //         dir.x = 1;
    //     }
    //     if (this.upKey.isDown === true) {
    //         dir.y = -1;
    //     }
    //     else if (this.downKey.isDown === true) {
    //         dir.y = 1;
    //     }
    //     this.move(dir);
    //     //-------------------
    // }
    // stop() {
    //     this.slime.setVelocity(0, 0);
    // }
    // move(dir) {  //dir is the direction of movement
    //     const velocity = 300;
    //     this.slime.setVelocity(dir.x * velocity, dir.y * velocity);
    // }
}
