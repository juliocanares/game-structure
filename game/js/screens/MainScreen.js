/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */

var Game = Game || {};

Game.MainScreen = function () {
    Game.BaseScreen.call(this);
    this.pixi = new PIXI.Sprite(PIXI.Texture.fromImage('img/logo.png'));
    this.addChild(this.pixi);
};

Game.MainScreen.constructor = Game.MainScreen;
Game.MainScreen.prototype = Object.create(Game.BaseScreen.prototype);