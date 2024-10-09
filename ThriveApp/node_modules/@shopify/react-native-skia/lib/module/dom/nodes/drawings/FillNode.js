import { NodeType } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
export class FillNode extends JsiDrawingNode {
  constructor(ctx, props = {}) {
    super(ctx, NodeType.Fill, props);
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
//# sourceMappingURL=FillNode.js.map