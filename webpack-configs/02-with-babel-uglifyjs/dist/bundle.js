!function(n) {
    function e(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    var t = {};
    e.m = n, e.c = t, e.d = function(n, t, r) {
        e.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default;
        } : function() {
            return n;
        };
        return e.d(t, "a", t), t;
    }, e.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
    }, e.p = "", e(e.s = 0);
}([ function(n, e, t) {
    "use strict";
    var r = t(1);
    !function() {
        console.log((0, r.addOne)(1));
    }();
}, function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.addOne = function(n) {
        return n + 1;
    }, e.addTwo = function(n) {
        return n + 2;
    };
} ]);