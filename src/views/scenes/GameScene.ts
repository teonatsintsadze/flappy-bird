import Phaser from "phaser";
import GameController from "../../controllers/GameController";
import { Round } from "../../types/round.types";

export class GameScene extends Phaser.Scene {
    private controller: GameController;

    constructor() {
        super('game');
        this.controller = new GameController();
        this.money = this.controller.money;
        this.outcome = '';
        this.roundsAmount = this.controller.rounds;
    }

    private player!: Phaser.Physics.Arcade.Image;
    private button!: Phaser.GameObjects.Image;
    private columns!: Phaser.Physics.Arcade.StaticGroup;
    private money: number;
    private balance!: Phaser.GameObjects.Text;
    private outcome: string;
    private outcomeText!: Phaser.GameObjects.Text;
    private roundsAmount: number;

    public create() {
        const x = this.game.scale.width / 2;
        const y = this.game.scale.height / 2;
        
        //BACKGROUND
        const image = this.add.image(x, y, 'background');
        const scaleX = this.cameras.main.width / image.width;
        const scaleY = this.cameras.main.height / image.height;
        image.setScale(Math.max(scaleX, scaleY)).setScrollFactor(0);
        
        //BIRD
        this.player = this.physics.add.image(x / 5, y, 'bird');
        
        //COLUMNS
        this.columns = this.physics.add.staticGroup();
        this.physics.add.collider(this.columns, this.player, this.onCollision.bind(this));
        
        //BUTTON
        this.button = this.add.image(x / 5, 150, 'start-btn')
            .setScale(2)
            .setInteractive({ useHandCursor: true  })
            .on("pointerdown", this.onStart, this);
        
        //BALANCE TEXT
        const style = { color:'#000', fontSize: '2rem', fontWeight: 'bold' }
        this.balance = this.add.text(10, 10, `Balance: $${this.money}`, style)
            .setScrollFactor(0)
            .setOrigin(0, 0);
        this.balance.depth = 2;

        //OUTCOME TEXT
        this.outcomeText = this.add.text(x, y, `${this.outcome}`, { fontSize: '15rem', color: this.outcome === "YOU LOST" ? 'red' : 'green' })
            .setOrigin(0.5);

        //ROUNDS AMOUNT TEXT
        const rounds = this.add.text(10, this.balance.y + 40, `Rounds played: ${this.roundsAmount}`, style)
            .setScrollFactor(0);
        rounds.depth = 2;
    }

    public update() {
        if (this.player.x > this.cameras.main.centerX) {
            this.cameras.main.startFollow(this.player);
        }

        const lastObstacle = this.columns.getChildren()[this.columns.getLength() - 1];
        if (lastObstacle?.body?.position) {
            if (this.player.x > lastObstacle.body?.position.x + 500) {
                this.scene.restart();
                this.controller.money++;
                this.money++;
                this.outcome = "YOU WON";
            }
        }
    }

    public onStart() {
        this.player.setAccelerationX(200);
        this.button.setVisible(false);
        this.outcome = '';
        this.outcomeText.text = this.outcome;
        this.increaseRounds();

        const round: Round = this.controller.getObstacles;

        let x = this.game.scale.width / 2;
        const y = this.game.scale.height;
        
        let upperColumnY: number;
        let lowerColumnY: number;

        const playerHeight = this.player.height;

        const randCol = Math.floor(Math.random() * round.obstacles);

        for (let i = 0; i < round.obstacles; i++) {
            upperColumnY = Phaser.Math.Between(-y/2 + playerHeight, -playerHeight);
            lowerColumnY = Phaser.Math.Between(y + playerHeight, 3/2 * y - playerHeight);

            if (!round.type && i === randCol) {
                let col = Math.random() < 0.5;
                if (col) {
                    upperColumnY = Phaser.Math.Between(0, playerHeight);
                } else {
                    lowerColumnY = Phaser.Math.Between(y - playerHeight, y);
                }
            }

            this.columns.create(x, upperColumnY, 'column');
            this.columns.create(x + 200, lowerColumnY, 'column');

            x += 400;
        }
    }

    public onCollision() {
        this.controller.money--;
        this.money--;
        this.outcome = "YOU LOST";
        this.scene.restart();
    }

    public increaseRounds() {
        this.controller.rounds++;
        this.roundsAmount++;
        this.controller.rounds = this.roundsAmount;
    }
}