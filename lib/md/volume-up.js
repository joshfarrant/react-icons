'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVolumeUp = function (_React$Component) {
    _inherits(MdVolumeUp, _React$Component);

    function MdVolumeUp() {
        _classCallCheck(this, MdVolumeUp);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdVolumeUp).apply(this, arguments));
    }

    _createClass(MdVolumeUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 5.4c6.7 1.5 11.6 7.5 11.6 14.6s-4.9 13.1-11.6 14.6v-3.4c4.8-1.4 8.2-5.9 8.2-11.2s-3.4-9.8-8.2-11.2v-3.4z m4.1 14.6c0 3-1.6 5.5-4.1 6.7v-13.4c2.5 1.2 4.1 3.7 4.1 6.7z m-22.5-5h6.6l8.4-8.4v26.8l-8.4-8.4h-6.6v-10z' })
                )
            );
        }
    }]);

    return MdVolumeUp;
}(React.Component);

exports.default = MdVolumeUp;
module.exports = exports['default'];