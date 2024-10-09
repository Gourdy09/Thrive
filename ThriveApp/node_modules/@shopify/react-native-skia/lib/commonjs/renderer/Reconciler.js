"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkiaRoot = void 0;
var _reactReconciler = _interopRequireDefault(require("react-reconciler"));
var _HostConfig = require("./HostConfig");
var _Container = require("./Container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const skiaReconciler = (0, _reactReconciler.default)(_HostConfig.skHostConfig);
skiaReconciler.injectIntoDevTools({
  bundleType: 1,
  version: "0.0.1",
  rendererPackageName: "react-native-skia"
});
class SkiaRoot {
  constructor(Skia, native = false, redraw = () => {}, getNativeId = () => 0) {
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "container", void 0);
    this.container = new _Container.Container(Skia, redraw, getNativeId, native);
    this.root = skiaReconciler.createContainer(this.container, 0, null, true, null, "", console.error, null);
  }
  render(element) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    skiaReconciler.updateContainer(element, this.root, null, () => {
      (0, _HostConfig.debug)("updateContainer");
    });
  }
  unmount() {
    skiaReconciler.updateContainer(null, this.root, null, () => {
      (0, _HostConfig.debug)("unmountContainer");
    });
  }
  get dom() {
    return this.container.root;
  }
}
exports.SkiaRoot = SkiaRoot;
//# sourceMappingURL=Reconciler.js.map