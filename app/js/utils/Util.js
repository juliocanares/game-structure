/**
 *Author : www.juliocanares.com/cv
 *Email : juliocanares@gmail.com
 */


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

