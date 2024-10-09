function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { JsiSkDOM } from "../dom/nodes";
export class Container {
  constructor(Skia, redraw = () => {}, getNativeId = () => 0, native) {
    this.redraw = redraw;
    this.getNativeId = getNativeId;
    _defineProperty(this, "_root", void 0);
    _defineProperty(this, "Sk", void 0);
    this.Sk = new JsiSkDOM({
      Skia
    }, native);
    this._root = this.Sk.Group();
  }
  draw(ctx) {
    this._root.render(ctx);
  }
  get root() {
    return this._root;
  }
}
//# sourceMappingURL=Container.js.map