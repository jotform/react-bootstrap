"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var BootstrapMixin = _interopRequire(require("./BootstrapMixin"));

var ButtonToolbar = React.createClass({
  displayName: "ButtonToolbar",

  mixins: [BootstrapMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      bsClass: "button-toolbar"
    };
  },

  render: function render() {
    var classes = this.getBsClassSet();

    return React.createElement(
      "div",
      _extends({}, this.props, {
        role: "toolbar",
        className: classNames(this.props.className, classes) }),
      this.props.children
    );
  }
});

module.exports = ButtonToolbar;