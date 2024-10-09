function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// TODO: suggest to rename SkPicture to Picture for consistency

import { HostObject, getEnum } from "./Host";
import { JsiSkShader } from "./JsiSkShader";
import { JsiSkMatrix } from "./JsiSkMatrix";
import { JsiSkRect } from "./JsiSkRect";
export class JsiSkPicture extends HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "Picture");
    _defineProperty(this, "dispose", () => {
      this.ref.delete();
    });
  }
  makeShader(tmx, tmy, mode, localMatrix, tileRect) {
    return new JsiSkShader(this.CanvasKit, this.ref.makeShader(getEnum(this.CanvasKit.TileMode, tmx), getEnum(this.CanvasKit.TileMode, tmy), getEnum(this.CanvasKit.FilterMode, mode), localMatrix ? JsiSkMatrix.fromValue(localMatrix) : undefined, tileRect ? JsiSkRect.fromValue(this.CanvasKit, tileRect) : undefined));
  }
  serialize() {
    return this.ref.serialize();
  }
}
//# sourceMappingURL=JsiSkPicture.js.map