import { BlendMode } from "../../../skia/types";
import { NodeType } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
import { enumKey } from "../datatypes";
export class AtlasNode extends JsiDrawingNode {
  deriveProps() {
    return null;
  }
  constructor(ctx, props) {
    super(ctx, NodeType.Atlas, props);
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
    const blend = blendMode ? BlendMode[enumKey(blendMode)] : undefined;
    if (image) {
      canvas.drawAtlas(image, sprites, transforms, paint, blend, colors);
    }
  }
}
//# sourceMappingURL=AtlasNode.js.map