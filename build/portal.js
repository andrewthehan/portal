"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _default = /*#__PURE__*/(0, _react.forwardRef)(function Portal(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      _ref$elementTag = _ref.elementTag,
      elementTag = _ref$elementTag === void 0 ? "div" : _ref$elementTag;
  var container = (0, _react.useMemo)(function () {
    return document.createElement(elementTag);
  }, [elementTag]);
  (0, _react.useLayoutEffect)(function () {
    var element = container;
    document.body.appendChild(element);
    return function () {
      document.body.removeChild(element);
    };
  }, [container]);
  var content = (0, _react.useMemo)(function () {
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: className,
      style: style
    }, children);
  }, [ref, className, style, children]);
  var portal = (0, _react.useMemo)(function () {
    return /*#__PURE__*/(0, _reactDom.createPortal)(content, container);
  }, [content, container]);
  return portal;
});

exports["default"] = _default;
