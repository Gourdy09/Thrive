import { NodeType } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
export class PictureNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.Picture, props);
  }
  deriveProps() {
    return null;
  }
  draw({
    canvas
  }) {
    const {
      picture
    } = this.props;
    canvas.drawPicture(picture);
  }
}
//# sourceMappingURL=PictureNode.js.map