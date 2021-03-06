"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequire(_react);

var cloneElement = _react.cloneElement;

var classNames = _interopRequire(require("classnames"));

var ValidComponentChildren = _interopRequire(require("./utils/ValidComponentChildren"));

var createChainedFunction = _interopRequire(require("./utils/createChainedFunction"));

var Pager = React.createClass({
  displayName: "Pager",

  propTypes: {
    onSelect: React.PropTypes.func
  },

  render: function render() {
    return React.createElement(
      "ul",
      _extends({}, this.props, {
        className: classNames(this.props.className, "pager") }),
      ValidComponentChildren.map(this.props.children, this.renderPageItem)
    );
  },

  renderPageItem: function renderPageItem(child, index) {
    return cloneElement(child, {
      onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
      key: child.key ? child.key : index
    });
  }
});

module.exports = Pager;