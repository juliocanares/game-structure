/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */

var Game = Game || {};

Game.BaseScreen = function () {
    PIXI.DisplayObjectContainer.call(this);
};

Game.BaseScreen.constructor = Game.BaseScreen;

Game.BaseScreen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

Game.BaseScreen.prototype.listeners = function () {
    
};

Game.BaseScreen.prototype.animationIn = function () {

};

Game.BaseScreen.prototype.animationOut = function () {

};

Game.BaseScreen.prototype.destroy = function () {

};