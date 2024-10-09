"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MipmapMode = exports.ImageFormat = exports.FilterMode = void 0;
let FilterMode = exports.FilterMode = /*#__PURE__*/function (FilterMode) {
  FilterMode[FilterMode["Nearest"] = 0] = "Nearest";
  FilterMode[FilterMode["Linear"] = 1] = "Linear";
  return FilterMode;
}({});
let MipmapMode = exports.MipmapMode = /*#__PURE__*/function (MipmapMode) {
  MipmapMode[MipmapMode["None"] = 0] = "None";
  MipmapMode[MipmapMode["Nearest"] = 1] = "Nearest";
  MipmapMode[MipmapMode["Linear"] = 2] = "Linear";
  return MipmapMode;
}({});
let ImageFormat = exports.ImageFormat = /*#__PURE__*/function (ImageFormat) {
  ImageFormat[ImageFormat["JPEG"] = 3] = "JPEG";
  ImageFormat[ImageFormat["PNG"] = 4] = "PNG";
  ImageFormat[ImageFormat["WEBP"] = 6] = "WEBP";
  return ImageFormat;
}({});
//# sourceMappingURL=Image.js.map