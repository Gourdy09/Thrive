function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { HostObject } from "./Host";
import { JsiSkCanvas } from "./JsiSkCanvas";
import { JsiSkImage } from "./JsiSkImage";
import { JsiSkRect } from "./JsiSkRect";
export class JsiSkSurface extends HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "Surface");
    _defineProperty(this, "dispose", () => {
      this.ref.dispose();
    });
  }
  flush() {
    this.ref.flush();
  }
  width() {
    return this.ref.width();
  }
  height() {
    return this.ref.height();
  }
  getCanvas() {
    return new JsiSkCanvas(this.CanvasKit, this.ref.getCanvas());
  }
  makeImageSnapshot(bounds) {
    const image = this.ref.makeImageSnapshot(bounds ? Array.from(JsiSkRect.fromValue(this.CanvasKit, bounds)) : undefined);
    return new JsiSkImage(this.CanvasKit, image);
  }
}
//# sourceMappingURL=JsiSkSurface.js.map