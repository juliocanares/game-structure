/**
 * Created by juliocanares on 1/7/15.
 */

Broadcaster = {};
Broadcaster.listeners = {};

Broadcaster.addEventListener = function (type, listener) {
    if (!this.listeners[type])this.listeners[type] = [];
    if (this.listeners[type].indexOf(listener) === -1)
        this.listeners[type].push(listener);
};

Broadcaster.dispatchEvent = function (type, parameters) {
    if (!parameters)parameters = {};
    if (this.listeners[type]) {
        for (var i = 0; i < this.listeners[type].length; i++) {
            parameters.type = type;
            this.listeners[type][i](parameters);
        }
    }
};
Broadcaster.hasEventListener = function (type, listener) {
    if (this.listeners[type]) {
        return this.listeners[type].indexOf(listener) !== -1;
    } else {
        return false;
    }
};

Broadcaster.removeEventListener = function (type, listener) {
    if (this.listeners[type]) {
        var index = this.listeners[type].indexOf(listener);
        if (index !== -1)this.listeners[type].splice(index, 1);
    }
};