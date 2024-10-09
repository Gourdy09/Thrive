"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkAnimatedImage = void 0;
var _Host = require("./Host");
var _JsiSkImage = require("./JsiSkImage");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class JsiSkAnimatedImage extends _Host.HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "AnimatedImage");
    _defineProperty(this, "dispose", () => {
      this.ref.delete();
    });
  }
  decodeNextFrame() {
    return this.ref.decodeNextFrame();
  }
  currentFrameDuration() {
    return this.ref.currentFrameDuration();
  }
  getCurrentFrame() {
    const image = this.ref.makeImageAtCurrentFrame();
    if (image === null) {
      return null;
    }
    return new _JsiSkImage.JsiSkImage(this.CanvasKit, image);
  }
}
exports.JsiSkAnimatedImage = JsiSkAnimatedImage;
//# sourceMappingURL=JsiSkAnimatedImage.js.map