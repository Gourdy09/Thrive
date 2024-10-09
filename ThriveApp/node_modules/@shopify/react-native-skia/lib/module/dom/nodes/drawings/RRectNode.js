function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { NodeType } from "../../types";
import { processRRect } from "../datatypes";
import { JsiDrawingNode } from "../DrawingNode";
export class RRectNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.RRect, props);
    _defineProperty(this, "rect", void 0);
  }
  deriveProps() {
    return processRRect(this.Skia, this.props);
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
//# sourceMappingURL=RRectNode.js.map