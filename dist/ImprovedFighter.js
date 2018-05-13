"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImprovedFighter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fighter2 = require("./Fighter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImprovedFighter = exports.ImprovedFighter = function (_Fighter) {
    _inherits(ImprovedFighter, _Fighter);

    function ImprovedFighter(name, health, power) {
        _classCallCheck(this, ImprovedFighter);

        return _possibleConstructorReturn(this, (ImprovedFighter.__proto__ || Object.getPrototypeOf(ImprovedFighter)).call(this, name, health, power));
    }

    _createClass(ImprovedFighter, [{
        key: "doubleHit",
        value: function doubleHit(enemy, point) {
            var doubleDamage = 0;
            doubleDamage = 2 * point;
            this.hit(enemy, doubleDamage);
        }
    }]);

    return ImprovedFighter;
}(_Fighter2.Fighter);