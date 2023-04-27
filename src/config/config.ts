import Phaser from "phaser";
  
export default class Config {
    config: Phaser.Types.Core.GameConfig;

    constructor(scenes: Phaser.Types.Scenes.SceneType[]) {
        this.config = {
            type: Phaser.AUTO,
            physics: {
                default: "arcade"
            },
            scale: {
                parent: 'game-wrapper',
                mode: Phaser.Scale.FIT,
                width: 1920,
                height: 1080,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            scene: scenes
        }; 
    }

    get configObj(): Phaser.Types.Core.GameConfig {
        return this.config;
    }
}