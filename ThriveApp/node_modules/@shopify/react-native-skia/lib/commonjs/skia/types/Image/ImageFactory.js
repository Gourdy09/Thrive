"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorType = exports.AlphaType = void 0;
let AlphaType = exports.AlphaType = /*#__PURE__*/function (AlphaType) {
  AlphaType[AlphaType["Unknown"] = 0] = "Unknown";
  AlphaType[AlphaType["Opaque"] = 1] = "Opaque";
  AlphaType[AlphaType["Premul"] = 2] = "Premul";
  AlphaType[AlphaType["Unpremul"] = 3] = "Unpremul";
  return AlphaType;
}({});
let ColorType = exports.ColorType = /*#__PURE__*/function (ColorType) {
  ColorType[ColorType["Unknown"] = 0] = "Unknown";
  ColorType[ColorType["Alpha_8"] = 1] = "Alpha_8";
  ColorType[ColorType["RGB_565"] = 2] = "RGB_565";
  ColorType[ColorType["ARGB_4444"] = 3] = "ARGB_4444";
  ColorType[ColorType["RGBA_8888"] = 4] = "RGBA_8888";
  ColorType[ColorType["RGB_888x"] = 5] = "RGB_888x";
  ColorType[ColorType["BGRA_8888"] = 6] = "BGRA_8888";
  ColorType[ColorType["RGBA_1010102"] = 7] = "RGBA_1010102";
  ColorType[ColorType["BGRA_1010102"] = 8] = "BGRA_1010102";
  ColorType[ColorType["RGB_101010x"] = 9] = "RGB_101010x";
  ColorType[ColorType["BGR_101010x"] = 10] = "BGR_101010x";
  ColorType[ColorType["BGR_101010x_XR"] = 11] = "BGR_101010x_XR";
  ColorType[ColorType["RGBA_10x6"] = 12] = "RGBA_10x6";
  ColorType[ColorType["Gray_8"] = 13] = "Gray_8";
  ColorType[ColorType["RGBA_F16Norm"] = 14] = "RGBA_F16Norm";
  ColorType[ColorType["RGBA_F16"] = 15] = "RGBA_F16";
  ColorType[ColorType["RGBA_F32"] = 16] = "RGBA_F32";
  return ColorType;
}({}); // pixel using C float for red, green, blue, alpha; in 128-bit word
//# sourceMappingURL=ImageFactory.js.map