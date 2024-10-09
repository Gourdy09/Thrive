"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RRectNode = void 0;
var _types = require("../../types");
var _datatypes = require("../datatypes");
var _DrawingNode = require("../DrawingNode");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class RRectNode extends _DrawingNode.JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, _types.NodeType.RRect, props);
    _defineProperty(this, "rect", void 0);
  }
  deriveProps() {
    return (0, _datatypes.processRRect)(this.Skia, this.props);
  }
  draw({
    canvas,
    paint
  }) {
    if (this.derived === undefined) {
      throw new Error("RRectNode: rect is undefined");
    }
    canvas.drawRRect(this.derived, paint);
  }
}
exports.RRectNode = RRectNode;
//# sourceMappingURL=RRectNode.js.map