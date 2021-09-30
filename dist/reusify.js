"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reusify = function (Constructor) {
    var head = new Constructor();
    var tail = head;
    function get() {
        var current = head;
        if (current.next) {
            head = current.next;
        }
        else {
            head = new Constructor();
            tail = head;
        }
        current.next = null;
        return current;
    }
    function release(obj) {
        tail.next = obj;
        tail = obj;
    }
    return {
        get: get,
        release: release,
    };
};
exports.default = reusify;
