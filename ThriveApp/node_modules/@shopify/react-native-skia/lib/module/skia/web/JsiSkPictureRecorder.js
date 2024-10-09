function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { HostObject } from "./Host";
import { JsiSkCanvas } from "./JsiSkCanvas";
import { JsiSkPicture } from "./JsiSkPicture";
import { JsiSkRect } from "./JsiSkRect";
export class JsiSkPictureRecorder extends HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "PictureRecorder");
    _defineProperty(this, "dispose", () => {
      this.ref.delete();
    });
  }
  beginRecording(bounds) {
    return new JsiSkCanvas(this.CanvasKit, this.ref.beginRecording(bounds ? JsiSkRect.fromValue(this.CanvasKit, bounds) : Float32Array.of(0, 0, 2_000_000, 2_000_000)));
  }
  finishRecordingAsPicture() {
    return new JsiSkPicture(this.CanvasKit, this.ref.finishRecordingAsPicture());
  }
}
//# sourceMappingURL=JsiSkPictureRecorder.js.map