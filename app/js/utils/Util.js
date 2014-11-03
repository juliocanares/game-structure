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

