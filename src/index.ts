import Phaser from 'phaser';
import { PreloaderScene, GameScene } from './views';
import Config from './config/config';

const gameConfig = new Config([PreloaderScene, GameScene]).configObj;

const newGame = new Phaser.Game(gameConfig);