function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { JsiDeclarationNode } from "./Node";
import { PaintNode } from "./PaintNode";
import { JsiRenderNode } from "./RenderNode";
export class JsiDrawingNode extends JsiRenderNode {
  constructor(ctx, type, props) {
    super(ctx, type, props);
    _defineProperty(this, "derived", void 0);
    this.derived = this.deriveProps();
  }
  setProps(props) {
    super.setProps(props);
    this.derived = this.deriveProps();
  }
  setProp(name, value) {
    const hasChanged = super.setProp(name, value);
    if (hasChanged) {
      this.derived = this.deriveProps();
    }
    return hasChanged;
  }
  addChild(child) {
    if (!(child instanceof JsiDeclarationNode)) {
      throw new Error(`Cannot add ${child.type} to ${this.type}`);
    }
    super.addChild(child);
    this.derived = this.deriveProps();
  }
  insertChildBefore(child, before) {
    if (!(child instanceof JsiDeclarationNode)) {
      throw new Error(`Cannot add ${child.type} to ${this.type}`);
    }
    super.insertChildBefore(child, before);
    this.derived = this.deriveProps();
  }
  renderNode(ctx) {
    if (this.props.paint) {
      this.draw({
        ...ctx,
        paint: this.props.paint
      });
    } else {
      this.draw(ctx);
    }
    this.children().map(child => {
      if (child instanceof PaintNode) {
        const declCtx = ctx.declarationCtx;
        declCtx.save();
        child.decorate(declCtx);
        const paint = declCtx.paints.pop();
        declCtx.restore();
        this.draw({
          ...ctx,
          paint
        });
      }
    });
  }
}
//# sourceMappingURL=DrawingNode.js.map