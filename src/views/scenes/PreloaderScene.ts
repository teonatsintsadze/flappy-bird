import Phaser from "phaser";

export class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('preloader');
    }
    
    preload() {
        this.load.image('background', 'assets/sprites/background.png');
        this.load.image('bird', 'assets/sprites/bird.png');
        this.load.image('column', 'assets/sprites/column.png');
        this.load.image('start-btn', 'assets/sprites/start-btn.png');
    }

    create() {
        this.scene.start("game");
    }
}