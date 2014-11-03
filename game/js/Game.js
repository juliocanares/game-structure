/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */
var Game = Game || {};

Game.Magazine = function () {

    Game.Magazine.instance = this;

    this.stage = new PIXI.Stage(0x000000);

    this.renderer = PIXI.autoDetectRenderer(1024, 768);

    document.body.appendChild(this.renderer.view);
    this.renderer.view.style.position = "absolute";
    this.renderer.view.style.top = "0";
    this.renderer.view.style.left = "0";
    
    requestAnimationFrame(this.update.bind(this));
};

Game.Magazine.prototype = Object.create(Object.prototype);

Game.Magazine.prototype.update = function () {
    requestAnimationFrame(this.update.bind(this));
    this.renderer.render(this.stage)
};