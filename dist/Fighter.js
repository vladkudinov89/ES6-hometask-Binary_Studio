"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fighter = exports.Fighter = function () {
    function Fighter(name, health, power) {
        _classCallCheck(this, Fighter);

        this._name = name;
        this._health = health;
        this._power = power;
    }

    _createClass(Fighter, [{
        key: "setDamage",
        value: function setDamage(damage) {
            this._health -= damage;
            console.log(this._health);
        }
    }, {
        key: "hit",
        value: function hit(enemy, point) {
            var damage = 0;
            damage = point * this._power;
            enemy.setDamage(damage);
        }
    }, {
        key: "power",
        get: function get() {
            return this._power;
        }
    }, {
        key: "health",
        get: function get() {
            return this._health;
        },
        set: function set(value) {
            this._health = value;
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }]);

    return Fighter;
}();