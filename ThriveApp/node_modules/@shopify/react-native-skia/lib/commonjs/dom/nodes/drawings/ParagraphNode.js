"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParagraphNode = void 0;
var _types = require("../../types");
var _DrawingNode = require("../DrawingNode");
class ParagraphNode extends _DrawingNode.JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, _types.NodeType.Paragraph, props);
  }
  deriveProps() {
    return null;
  }
  draw({
    canvas
  }) {
    const {
      paragraph,
      x,
      y,
      width
    } = this.props;
    if (paragraph) {
      paragraph.layout(width);
      paragraph.paint(canvas, x, y);
    }
  }
}
exports.ParagraphNode = ParagraphNode;
//# sourceMappingURL=ParagraphNode.js.map