// export interface IGameObject {
//     x: number;
//     y: number;
//     key?: string;
// }

// export interface IGameObjectImage {
//     create: (x: number, y: number, scene: Phaser.Scene, key: string, options?: any) => Phaser.GameObjects.Image;
// }

// export interface IGameObjectText {
//     create: (x: number, y: number, scene: Phaser.Scene, key: string, options?: any) => Phaser.GameObjects.Text;
// }

// export interface IArcadeImage {
//     create: (x: number, y: number, scene: Phaser.Scene, key: string, options?: any) => Phaser.Physics.Arcade.Image;
// }

// export interface IArcadeStaticGroup {
//     create: (x: number, y: number, scene: Phaser.Scene, key: string, options?: any) => Phaser.Physics.Arcade.StaticGroup;
// }

export interface IGameObjectFactory {
    create(x: number, y: number, scene: Phaser.Scene, key: string, ...options: any): any;
}