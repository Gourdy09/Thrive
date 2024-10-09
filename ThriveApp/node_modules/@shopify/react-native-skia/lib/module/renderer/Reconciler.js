function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import ReactReconciler from "react-reconciler";
import { skHostConfig, debug as hostDebug } from "./HostConfig";
import { Container } from "./Container";
const skiaReconciler = ReactReconciler(skHostConfig);
skiaReconciler.injectIntoDevTools({
  bundleType: 1,
  version: "0.0.1",
  rendererPackageName: "react-native-skia"
});
export class SkiaRoot {
  constructor(Skia, native = false, redraw = () => {}, getNativeId = () => 0) {
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "container", void 0);
    this.container = new Container(Skia, redraw, getNativeId, native);
    this.root = skiaReconciler.createContainer(this.container, 0, null, true, null, "", console.error, null);
  }
  render(element) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    skiaReconciler.updateContainer(element, this.root, null, () => {
      hostDebug("updateContainer");
    });
  }
  unmount() {
    skiaReconciler.updateContainer(null, this.root, null, () => {
      hostDebug("unmountContainer");
    });
  }
  get dom() {
    return this.container.root;
  }
}
//# sourceMappingURL=Reconciler.js.map