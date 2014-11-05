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
    this.goCleanScreenHandlerBind = this.goCleanScreenHandler.bind(this);
    this.goChangeScreenHandlerBind = this.goChangeScreenHandler.bind(this);

    Broadcaster.addEventListener('GO_CLEAN_SCREEN', this.goCleanScreenHandlerBind);
    Broadcaster.addEventListener('GO_CHANGE_SCREEN', this.goChangeScreenHandlerBind);
    
    // launch first screen
    Broadcaster.dispatchEvent("GO_CHANGE_SCREEN", {screen: Game.Global.screens.MAIN});
};

Game.ScreenManager.prototype.goCleanScreenHandler = function () {
    if (this.currentScreen)
        this.currentScreen.destroy();
};

Game.ScreenManager.prototype.goChangeScreenHandler = function (event) {
    Broadcaster.dispatchEvent('GO_CLEAN_SCREEN');
    switch(event.screen){
        case Game.Global.screens.MAIN:
            this.currentScreen = new Game.MainScreen();
        break;
    }
    this.screenContainer.addChild(this.currentScreen);
};
