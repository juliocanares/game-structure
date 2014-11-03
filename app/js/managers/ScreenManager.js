/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */

APP.ScreenManager = function () {
    PIXI.DisplayObjectContainer.call(this);

    this.screenContainer = new PIXI.DisplayObjectContainer();
    this.addChild(this.screenContainer);
    
    this.currentScreen = null;

    this.listeners();
};
APP.ScreenManager.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

APP.ScreenManager.constructor = APP.ScreenManager;

APP.ScreenManager.prototype.listeners = function () {
    this.goScreenCleanHandlerBind = this.goScreenCleanHandler.bind(this);
    this.goScreenChangeHandlerBind = this.goScreenChangeHandler.bind(this);

    Broadcaster.listen('GO_SCREEN_CLEAN', this.goScreenCleanHandlerBind);
    Broadcaster.listen('GO_SCREEN_CHANGE', this.goScreenChangeHandlerBind);
};

APP.ScreenManager.prototype.goScreenCleanHandler = function () {
    if (this.currentScreen)
        this.currentScreen.destroy();
};

APP.ScreenManager.prototype.goScreenChangeHandler = function (event) {
    Broadcaster.dispatch('GO_SCREEN_CLEAN');
    // TODO implement currentScreen
    this.currentScreen = '';
    this.screenContainer.addChild(this.currentScreen);
};
