/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */

var Game = Game || {};

Game.MainScreen = function () {
    Game.BaseScreen.call(this);
    var pixi = new PIXI.Sprite(PIXI.Texture.fromImage('pixi.jpg'));
    this.addChild(pixi);
};

Game.MainScreen.constructor = Game.MainScreen;
Game.MainScreen.prototype = Object.create(Game.BaseScreen.prototype);