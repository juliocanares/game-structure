/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */

Game.ScreenManager = function () {
    PIXI.DisplayObjectContainer.call(this);

    this.screenContainer = new PIXI.DisplayObjectContainer();
    this.addChild(this.screenContainer);
    
    this.currentScreen = null;

    this.listeners();
};

Game.ScreenManager.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

Game.ScreenManager.constructor = Game.ScreenManager;

Game.ScreenManager.prototype.listeners = function () {
    this.goScreenCleanHandlerBind = this.goScreenCleanHandler.bind(this);
    this.goScreenChangeHandlerBind = this.goScreenChangeHandler.bind(this);

    Broadcaster.listen('GO_SCREEN_CLEAN', this.goScreenCleanHandlerBind);
    Broadcaster.listen('GO_SCREEN_CHANGE', this.goScreenChangeHandlerBind);
};

Game.ScreenManager.prototype.goScreenCleanHandler = function () {
    if (this.currentScreen)
        this.currentScreen.destroy();
};

Game.ScreenManager.prototype.goScreenChangeHandler = function (event) {
    Broadcaster.dispatch('GO_SCREEN_CLEAN');
    switch(event.screen){
        case Game.Global.Screens.MAIN:
            currentScreen = new Game.MainScreen();
        break;
    }
    this.screenContainer.addChild(this.currentScreen);
};
