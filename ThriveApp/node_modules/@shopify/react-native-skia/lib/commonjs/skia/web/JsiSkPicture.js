"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkPicture = void 0;
var _Host = require("./Host");
var _JsiSkShader = require("./JsiSkShader");
var _JsiSkMatrix = require("./JsiSkMatrix");
var _JsiSkRect = require("./JsiSkRect");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // TODO: suggest to rename SkPicture to Picture for consistency
class JsiSkPicture extends _Host.HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "Picture");
    _defineProperty(this, "dispose", () => {
      this.ref.delete();
    });
  }
  makeShader(tmx, tmy, mode, localMatrix, tileRect) {
    return new _JsiSkShader.JsiSkShader(this.CanvasKit, this.ref.makeShader((0, _Host.getEnum)(this.CanvasKit.TileMode, tmx), (0, _Host.getEnum)(this.CanvasKit.TileMode, tmy), (0, _Host.getEnum)(this.CanvasKit.FilterMode, mode), localMatrix ? _JsiSkMatrix.JsiSkMatrix.fromValue(localMatrix) : undefined, tileRect ? _JsiSkRect.JsiSkRect.fromValue(this.CanvasKit, tileRect) : undefined));
  }
  serialize() {
    return this.ref.serialize();
  }
}
exports.JsiSkPicture = JsiSkPicture;
//# sourceMappingURL=JsiSkPicture.js.map