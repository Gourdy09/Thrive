"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AtlasNode = void 0;
var _types = require("../../../skia/types");
var _types2 = require("../../types");
var _DrawingNode = require("../DrawingNode");
var _datatypes = require("../datatypes");
class AtlasNode extends _DrawingNode.JsiDrawingNode {
  deriveProps() {
    return null;
  }
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.Atlas, props);
  }
  draw({
    canvas,
    paint
  }) {
    const {
      image,
      sprites,
      transforms,
      colors,
      blendMode
    } = this.props;
    const blend = blendMode ? _types.BlendMode[(0, _datatypes.enumKey)(blendMode)] : undefined;
    if (image) {
      canvas.drawAtlas(image, sprites, transforms, paint, blend, colors);
    }
  }
}
exports.AtlasNode = AtlasNode;
//# sourceMappingURL=AtlasNode.js.map