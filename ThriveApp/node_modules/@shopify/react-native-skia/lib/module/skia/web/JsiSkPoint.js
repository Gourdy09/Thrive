function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { BaseHostObject } from "./Host";
export class JsiSkPoint extends BaseHostObject {
  static fromValue(point) {
    if (point instanceof JsiSkPoint) {
      return point.ref;
    }
    return new Float32Array([point.x, point.y]);
  }
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "Point");
    _defineProperty(this, "dispose", () => {
      // Float32Array
    });
  }
  get x() {
    return this.ref[0];
  }
  get y() {
    return this.ref[1];
  }
}
//# sourceMappingURL=JsiSkPoint.js.map