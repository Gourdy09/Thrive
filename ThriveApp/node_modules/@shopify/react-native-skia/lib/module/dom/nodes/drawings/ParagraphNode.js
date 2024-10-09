import { NodeType } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
export class ParagraphNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.Paragraph, props);
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
//# sourceMappingURL=ParagraphNode.js.map