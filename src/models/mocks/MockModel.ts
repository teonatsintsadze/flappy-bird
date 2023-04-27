import { TType } from "../../types/outcome.types";

export class RoundBuilder {
	type: TType;
	obstaclesQuantity: number;

	constructor(type: TType, obstaclesQuantity: number) {
		this.type = type;
		this.obstaclesQuantity = obstaclesQuantity;
	}
}