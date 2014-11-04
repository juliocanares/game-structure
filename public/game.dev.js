var Game = Game || {};

Game.Boilerplate = function () {

    Game.BoilerPlate.instance = this;

    this.stage = new PIXI.Stage(0x000000);

    this.renderer = PIXI.autoDetectRenderer(1024, 768);

    document.body.appendChild(this.renderer.view);
    this.renderer.view.style.position = "absolute";
    this.renderer.view.style.top = "0";
    this.renderer.view.style.left = "0";

    requestAnimationFrame(this.update.bind(this));
};

Game.BoilerPlate.prototype = Object.create(Object.prototype);

Game.BoilerPlate.prototype.update = function () {
    requestAnimationFrame(this.update.bind(this));
    this.renderer.render(this.stage)
};
var Game = Game || {};

Game.Global = function () {

};

Game.Global.gameName = 'games-base';
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
    // TODO implement currentScreen
    this.currentScreen = '';
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