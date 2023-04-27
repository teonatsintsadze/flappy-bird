import GameModel from "../models/GameModel";
import { RoundBuilder } from "../models/mocks/MockModel";
import { Round } from "../types/round.types";

export default class GameController {
    private model: GameModel;

    constructor() {
        this.model = new GameModel();
        this.getObstacles;
    }

    public get getObstacles(): Round {
        const rounds = this.model.rounds;
        const index = Math.floor(Math.random() * rounds.length);
        const pickedRound: RoundBuilder = rounds[index];
        return {
            type: pickedRound.type,
            obstacles: pickedRound.obstaclesQuantity
        };
    }

    public get money(): number {
        return this.model.money;
    }

    public get rounds(): number {
        return this.model.roundsAmount;
    }

    public set rounds(amount: number) {
        this.model.roundsAmount = amount;
    }

    public set money(money: number) {
        this.model.money = money;
    }

}