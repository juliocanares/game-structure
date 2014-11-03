/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */

APP.ScreenManager = function () {
    PIXI.DisplayObjectContainer.call(this);

    this.screenContainer = new PIXI.DisplayObjectContainer();
    this.addChild(this.screenContainer);
    
    this.currentScreen = null;
};
APP.ScreenManager.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

APP.ScreenManager.constructor = APP.ScreenManager;
