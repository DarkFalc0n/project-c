import { CustomScene } from '@/types';

export default class MainMenu extends CustomScene {
    constructor() {
        super("MainMenu");
    }
    preload() {

    }
    create() {
        this.add.text(100, 100, "Hi Player !!", { fontSize: '64px', color: '#fff' });
    }
    update() {

    }
}
