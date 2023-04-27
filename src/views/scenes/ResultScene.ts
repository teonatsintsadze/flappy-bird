export default class ResultScene extends Phaser.Scene {
    constructor() {
        super("result");
    }

    public create() {
        const x = this.game.scale.width / 2;
        const y = this.game.scale.height / 2;

        //BACKGROUND
        const image = this.add.image(x, y, 'background');
        const scaleX = this.cameras.main.width / image.width;
        const scaleY = this.cameras.main.height / image.height;
        image.setScale(Math.max(scaleX, scaleY)).setScrollFactor(0);

        //BIRD
        this.physics.add.image(x / 5, y, 'bird');

        //BUTTON
        this.add.image(x / 5, 150, 'start-btn');
    }
}