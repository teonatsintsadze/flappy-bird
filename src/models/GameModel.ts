import { EType } from "../types/outcome.types";
import { RoundBuilder } from './mocks/MockModel';

type T = RoundBuilder;

export default class GameModel {
  private _ROUNDS_MOCK: Array<T>;
  private _money: number;
  private _roundsAmount: number;

  constructor() {
    this._money = 100;
    this._ROUNDS_MOCK = [
      new RoundBuilder(EType.LOSE, 14),
      new RoundBuilder(EType.WIN, 6),
      new RoundBuilder(EType.WIN, 4),
      new RoundBuilder(EType.WIN, 3),
      new RoundBuilder(EType.LOSE, 2)
    ]
    this._roundsAmount = 0;
  }

  public get rounds(): Array<T> {
    return this._ROUNDS_MOCK;
  }

  public get roundsAmount(): number {
    return this._roundsAmount;
  }
  
  public get money(): number {
    return this._money;
  }

  public set money(money: number) {
    this._money = money;
  }

  public set roundsAmount(amount: number) {
    this._roundsAmount = amount;
  }
}
