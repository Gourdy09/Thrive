"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkDOM = void 0;
var _drawings = require("./drawings");
var _paint = require("./paint");
var _ColorFilters = require("./paint/ColorFilters");
var _Shaders = require("./paint/Shaders");
var _ImageFilters = require("./paint/ImageFilters");
var _GroupNode = require("./GroupNode");
var _PaintNode = require("./PaintNode");
var _LayerNode = require("./LayerNode");
var _ParagraphNode = require("./drawings/ParagraphNode");
class JsiSkDOM {
  constructor(ctx, native) {
    this.ctx = ctx;
    this.native = native;
  }
  Layer(props) {
    return this.native ? global.SkiaDomApi.LayerNode(props !== null && props !== void 0 ? props : {}) : new _LayerNode.LayerNode(this.ctx, props !== null && props !== void 0 ? props : {});
  }
  Group(props) {
    return this.native ? global.SkiaDomApi.GroupNode(props !== null && props !== void 0 ? props : {}) : new _GroupNode.GroupNode(this.ctx, props !== null && props !== void 0 ? props : {});
  }
  Paint(props) {
    return this.native ? global.SkiaDomApi.PaintNode(props !== null && props !== void 0 ? props : {}) : new _PaintNode.PaintNode(this.ctx, props);
  }

  // Drawings
  Fill(props) {
    return this.native ? global.SkiaDomApi.FillNode(props !== null && props !== void 0 ? props : {}) : new _drawings.FillNode(this.ctx, props);
  }
  Image(props) {
    return this.native ? global.SkiaDomApi.ImageNode(props !== null && props !== void 0 ? props : {}) : new _drawings.ImageNode(this.ctx, props);
  }
  Circle(props) {
    return this.native ? global.SkiaDomApi.CircleNode(props !== null && props !== void 0 ? props : {}) : new _drawings.CircleNode(this.ctx, props);
  }
  Path(props) {
    return this.native ? global.SkiaDomApi.PathNode(props !== null && props !== void 0 ? props : {}) : new _drawings.PathNode(this.ctx, props);
  }
  Line(props) {
    return this.native ? global.SkiaDomApi.LineNode(props !== null && props !== void 0 ? props : {}) : new _drawings.LineNode(this.ctx, props);
  }
  Oval(props) {
    return this.native ? global.SkiaDomApi.OvalNode(props !== null && props !== void 0 ? props : {}) : new _drawings.OvalNode(this.ctx, props);
  }
  Patch(props) {
    return this.native ? global.SkiaDomApi.PatchNode(props !== null && props !== void 0 ? props : {}) : new _drawings.PatchNode(this.ctx, props);
  }
  Points(props) {
    return this.native ? global.SkiaDomApi.PointsNode(props !== null && props !== void 0 ? props : {}) : new _drawings.PointsNode(this.ctx, props);
  }
  Rect(props) {
    return this.native ? global.SkiaDomApi.RectNode(props) : new _drawings.RectNode(this.ctx, props);
  }
  RRect(props) {
    return this.native ? global.SkiaDomApi.RRectNode(props) : new _drawings.RRectNode(this.ctx, props);
  }
  Vertices(props) {
    return this.native ? global.SkiaDomApi.VerticesNode(props) : new _drawings.VerticesNode(this.ctx, props);
  }
  Text(props) {
    return this.native ? global.SkiaDomApi.TextNode(props) : new _drawings.TextNode(this.ctx, props);
  }
  TextPath(props) {
    return this.native ? global.SkiaDomApi.TextPathNode(props) : new _drawings.TextPathNode(this.ctx, props);
  }
  TextBlob(props) {
    return this.native ? global.SkiaDomApi.TextBlobNode(props) : new _drawings.TextBlobNode(this.ctx, props);
  }
  Glyphs(props) {
    return this.native ? global.SkiaDomApi.GlyphsNode(props) : new _drawings.GlyphsNode(this.ctx, props);
  }
  DiffRect(props) {
    return this.native ? global.SkiaDomApi.DiffRectNode(props) : new _drawings.DiffRectNode(this.ctx, props);
  }
  Picture(props) {
    return this.native ? global.SkiaDomApi.PictureNode(props) : new _drawings.PictureNode(this.ctx, props);
  }
  Atlas(props) {
    return this.native ? global.SkiaDomApi.AtlasNode(props) : new _drawings.AtlasNode(this.ctx, props);
  }
  ImageSVG(props) {
    return this.native ? global.SkiaDomApi.ImageSVGNode(props) : new _drawings.ImageSVGNode(this.ctx, props);
  }

  // BlurMaskFilters
  BlurMaskFilter(props) {
    return this.native ? global.SkiaDomApi.BlurMaskFilterNode(props) : new _paint.BlurMaskFilterNode(this.ctx, props);
  }

  // ImageFilters
  BlendImageFilter(props) {
    return this.native ? global.SkiaDomApi.BlendImageFilterNode(props) : new _paint.BlendImageFilterNode(this.ctx, props);
  }
  DropShadowImageFilter(props) {
    return this.native ? global.SkiaDomApi.DropShadowImageFilterNode(props) : new _paint.DropShadowImageFilterNode(this.ctx, props);
  }
  DisplacementMapImageFilter(props) {
    return this.native ? global.SkiaDomApi.DisplacementMapImageFilterNode(props) : new _paint.DisplacementMapImageFilterNode(this.ctx, props);
  }
  BlurImageFilter(props) {
    return this.native ? global.SkiaDomApi.BlurImageFilterNode(props) : new _paint.BlurImageFilterNode(this.ctx, props);
  }
  OffsetImageFilter(props) {
    return this.native ? global.SkiaDomApi.OffsetImageFilterNode(props) : new _paint.OffsetImageFilterNode(this.ctx, props);
  }
  MorphologyImageFilter(props) {
    return this.native ? global.SkiaDomApi.MorphologyImageFilterNode(props) : new _ImageFilters.MorphologyImageFilterNode(this.ctx, props);
  }
  RuntimeShaderImageFilter(props) {
    return this.native ? global.SkiaDomApi.RuntimeShaderImageFilterNode(props) : new _paint.RuntimeShaderImageFilterNode(this.ctx, props);
  }

  // Color Filters
  MatrixColorFilter(props) {
    return this.native ? global.SkiaDomApi.MatrixColorFilterNode(props) : new _ColorFilters.MatrixColorFilterNode(this.ctx, props);
  }
  BlendColorFilter(props) {
    return this.native ? global.SkiaDomApi.BlendColorFilterNode(props) : new _ColorFilters.BlendColorFilterNode(this.ctx, props);
  }
  LumaColorFilter() {
    return this.native ? global.SkiaDomApi.LumaColorFilterNode() : new _ColorFilters.LumaColorFilterNode(this.ctx);
  }
  LinearToSRGBGammaColorFilter() {
    return global.SkiaDomApi && global.SkiaDomApi.LinearToSRGBGammaColorFilterNode ? global.SkiaDomApi.LinearToSRGBGammaColorFilterNode() : new _ColorFilters.LinearToSRGBGammaColorFilterNode(this.ctx);
  }
  SRGBToLinearGammaColorFilter() {
    return global.SkiaDomApi && global.SkiaDomApi.SRGBToLinearGammaColorFilterNode ? global.SkiaDomApi.SRGBToLinearGammaColorFilterNode() : new _ColorFilters.SRGBToLinearGammaColorFilterNode(this.ctx);
  }
  LerpColorFilter(props) {
    return this.native ? global.SkiaDomApi.LerpColorFilterNode(props) : new _ColorFilters.LerpColorFilterNode(this.ctx, props);
  }

  // Shaders
  Shader(props) {
    return this.native ? global.SkiaDomApi.ShaderNode(props) : new _Shaders.ShaderNode(this.ctx, props);
  }
  ImageShader(props) {
    return this.native ? global.SkiaDomApi.ImageShaderNode(props) : new _Shaders.ImageShaderNode(this.ctx, props);
  }
  ColorShader(props) {
    return this.native ? global.SkiaDomApi.ColorShaderNode(props) : new _Shaders.ColorNode(this.ctx, props);
  }
  SweepGradient(props) {
    return this.native ? global.SkiaDomApi.SweepGradientNode(props) : new _Shaders.SweepGradientNode(this.ctx, props);
  }
  Turbulence(props) {
    return this.native ? global.SkiaDomApi.TurbulenceNode(props) : new _Shaders.TurbulenceNode(this.ctx, props);
  }
  FractalNoise(props) {
    return this.native ? global.SkiaDomApi.FractalNoiseNode(props) : new _Shaders.FractalNoiseNode(this.ctx, props);
  }
  LinearGradient(props) {
    return this.native ? global.SkiaDomApi.LinearGradientNode(props) : new _Shaders.LinearGradientNode(this.ctx, props);
  }
  RadialGradient(props) {
    return this.native ? global.SkiaDomApi.RadialGradientNode(props) : new _Shaders.RadialGradientNode(this.ctx, props);
  }
  TwoPointConicalGradient(props) {
    return this.native ? global.SkiaDomApi.TwoPointConicalGradientNode(props) : new _Shaders.TwoPointConicalGradientNode(this.ctx, props);
  }

  // Path Effects
  CornerPathEffect(props) {
    return this.native ? global.SkiaDomApi.CornerPathEffectNode(props) : new _paint.CornerPathEffectNode(this.ctx, props);
  }
  DiscretePathEffect(props) {
    return this.native ? global.SkiaDomApi.DiscretePathEffectNode(props) : new _paint.DiscretePathEffectNode(this.ctx, props);
  }
  DashPathEffect(props) {
    return this.native ? global.SkiaDomApi.DashPathEffectNode(props) : new _paint.DashPathEffectNode(this.ctx, props);
  }
  Path1DPathEffect(props) {
    return this.native ? global.SkiaDomApi.Path1DPathEffectNode(props) : new _paint.Path1DPathEffectNode(this.ctx, props);
  }
  Path2DPathEffect(props) {
    return this.native ? global.SkiaDomApi.Path2DPathEffectNode(props) : new _paint.Path2DPathEffectNode(this.ctx, props);
  }
  SumPathEffect() {
    return this.native ? global.SkiaDomApi.SumPathEffectNode() : new _paint.SumPathEffectNode(this.ctx);
  }
  Line2DPathEffect(props) {
    return this.native ? global.SkiaDomApi.Line2DPathEffectNode(props) : new _paint.Line2DPathEffectNode(this.ctx, props);
  }
  Blend(props) {
    return this.native ? global.SkiaDomApi.BlendNode(props) : new _paint.BlendNode(this.ctx, props);
  }
  BackdropFilter(props) {
    return this.native ? global.SkiaDomApi.BackdropFilterNode(props) : new _drawings.BackdropFilterNode(this.ctx, props);
  }
  Box(props) {
    return this.native ? global.SkiaDomApi.BoxNode(props) : new _drawings.BoxNode(this.ctx, props);
  }
  BoxShadow(props) {
    return this.native ? global.SkiaDomApi.BoxShadowNode(props) : new _drawings.BoxShadowNode(this.ctx, props);
  }

  // Paragraph
  Paragraph(props) {
    return this.native ? global.SkiaDomApi.ParagraphNode(props) : new _ParagraphNode.ParagraphNode(this.ctx, props);
  }
}
exports.JsiSkDOM = JsiSkDOM;
//# sourceMappingURL=JsiSkDOM.js.map