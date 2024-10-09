"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FillNode = void 0;
var _types = require("../../types");
var _DrawingNode = require("../DrawingNode");
class FillNode extends _DrawingNode.JsiDrawingNode {
  constructor(ctx, props = {}) {
    super(ctx, _types.NodeType.Fill, props);
  }
  deriveProps() {
    return null;
  }
  draw({
    canvas,
    paint
  }) {
    canvas.drawPaint(paint);
  }
}
exports.FillNode = FillNode;
//# sourceMappingURL=FillNode.js.map