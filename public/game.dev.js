var Game = Game || {};

Game.Boilerplate = function () {
    Game.Boilerplate.instance = this;

    this.stage = new PIXI.Stage(0x000000);

    this.renderer = PIXI.autoDetectRenderer(1024, 768);

    document.body.appendChild(this.renderer.view);
    this.renderer.view.style.position = "absolute";
    this.renderer.view.style.top = "0";
    this.renderer.view.style.left = "0";

    new Game.Global();

    this.screenManager = new Game.ScreenManager();
    this.stage.addChild(this.screenManager);
    
    requestAnimationFrame(this.update.bind(this));
};

Game.Boilerplate.prototype = Object.create(Object.prototype);

Game.Boilerplate.prototype.update = function () {
    requestAnimationFrame(this.update.bind(this));
    this.renderer.render(this.stage);
};
var Game = Game || {};

Game.Global = function () {

};

Game.Global.gameName = 'games-base';

Game.Global.screens = {
	main: 'mainScreen'
};
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
var Game = Game || {};

Game.MainScreen = function () {
    Game.BaseScreen.call(this);
    this.pixi = new PIXI.Sprite(PIXI.Texture.fromImage('img/logo.png'));
    this.addChild(this.pixi);
};

Game.MainScreen.constructor = Game.MainScreen;
Game.MainScreen.prototype = Object.create(Game.BaseScreen.prototype);
var Game = Game || {};

Game.Util = function () {

};

Game.Util.removeAllChildrens = function (f, d) {
  for (var c = f.children.length - 1; c >= 0; c--) {
    var a = true;
    if (d != null) {
        for (var b = 0; b < d.length; b++) {
            if (f.getChildAt(c) == d[b]) {
                a = false
            }
        }
    }
    if (a) {
        var e = f.getChildAt(c);
        f.removeChild(e);
        e = null
    }
  }
};

Game.Util.floatRand = function (b, a) {
    if (isNaN(a)) {
        a = b;
        b = 0
    }
    return Math.random() * (a - b) + b
};

Game.Util.randomRange = function (b, a) {
    if (isNaN(a)) {
        a = b;
        b = 0
    }
    return Math.floor(Game.Util.floatRand(b, a))
};


Game.Util.centerToContainer = function (target, bound) {
    target.position.x = bound.width * .5 - target.width * .5;
    target.position.y = bound.height * .5 - target.height * .5;
};

Game.Util.intersects = function (object1, object2) {
    var isCollision = false;
    if (object1.position.x < object2.position.x + object2.width && object1.position.x + object1.width > object2.position.x &&
        object1.position.y < object2.position.y + object2.height && object1.position.y + object1.height > object2.position.y + 35) {
        isCollision = true;
    }
    return isCollision;
};

Game.Util.removeThis = function (obj) {
    if (obj && obj.parent) {
        obj.parent.removeChild(obj);
        obj = null;
    }
};