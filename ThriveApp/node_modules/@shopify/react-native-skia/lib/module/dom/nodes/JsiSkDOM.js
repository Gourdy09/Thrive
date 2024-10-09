import { FillNode, ImageNode, CircleNode, PathNode, LineNode, PatchNode, PointsNode, RectNode, RRectNode, VerticesNode, TextNode, OvalNode, TextPathNode, TextBlobNode, GlyphsNode, DiffRectNode, PictureNode, ImageSVGNode, BackdropFilterNode, BoxNode, BoxShadowNode, AtlasNode } from "./drawings";
import { BlendImageFilterNode, BlurImageFilterNode, BlurMaskFilterNode, DisplacementMapImageFilterNode, DropShadowImageFilterNode, OffsetImageFilterNode, RuntimeShaderImageFilterNode, CornerPathEffectNode, DiscretePathEffectNode, DashPathEffectNode, Path1DPathEffectNode, Path2DPathEffectNode, SumPathEffectNode, Line2DPathEffectNode, BlendNode } from "./paint";
import { MatrixColorFilterNode, LumaColorFilterNode, LinearToSRGBGammaColorFilterNode, SRGBToLinearGammaColorFilterNode, BlendColorFilterNode, LerpColorFilterNode } from "./paint/ColorFilters";
import { LinearGradientNode, ShaderNode, ImageShaderNode, TwoPointConicalGradientNode, TurbulenceNode, SweepGradientNode, RadialGradientNode, FractalNoiseNode, ColorNode } from "./paint/Shaders";
import { MorphologyImageFilterNode } from "./paint/ImageFilters";
import { GroupNode } from "./GroupNode";
import { PaintNode } from "./PaintNode";
import { LayerNode } from "./LayerNode";
import { ParagraphNode } from "./drawings/ParagraphNode";
export class JsiSkDOM {
  constructor(ctx, native) {
    this.ctx = ctx;
    this.native = native;
  }
  Layer(props) {
    return this.native ? global.SkiaDomApi.LayerNode(props !== null && props !== void 0 ? props : {}) : new LayerNode(this.ctx, props !== null && props !== void 0 ? props : {});
  }
  Group(props) {
    return this.native ? global.SkiaDomApi.GroupNode(props !== null && props !== void 0 ? props : {}) : new GroupNode(this.ctx, props !== null && props !== void 0 ? props : {});
  }
  Paint(props) {
    return this.native ? global.SkiaDomApi.PaintNode(props !== null && props !== void 0 ? props : {}) : new PaintNode(this.ctx, props);
  }

  // Drawings
  Fill(props) {
    return this.native ? global.SkiaDomApi.FillNode(props !== null && props !== void 0 ? props : {}) : new FillNode(this.ctx, props);
  }
  Image(props) {
    return this.native ? global.SkiaDomApi.ImageNode(props !== null && props !== void 0 ? props : {}) : new ImageNode(this.ctx, props);
  }
  Circle(props) {
    return this.native ? global.SkiaDomApi.CircleNode(props !== null && props !== void 0 ? props : {}) : new CircleNode(this.ctx, props);
  }
  Path(props) {
    return this.native ? global.SkiaDomApi.PathNode(props !== null && props !== void 0 ? props : {}) : new PathNode(this.ctx, props);
  }
  Line(props) {
    return this.native ? global.SkiaDomApi.LineNode(props !== null && props !== void 0 ? props : {}) : new LineNode(this.ctx, props);
  }
  Oval(props) {
    return this.native ? global.SkiaDomApi.OvalNode(props !== null && props !== void 0 ? props : {}) : new OvalNode(this.ctx, props);
  }
  Patch(props) {
    return this.native ? global.SkiaDomApi.PatchNode(props !== null && props !== void 0 ? props : {}) : new PatchNode(this.ctx, props);
  }
  Points(props) {
    return this.native ? global.SkiaDomApi.PointsNode(props !== null && props !== void 0 ? props : {}) : new PointsNode(this.ctx, props);
  }
  Rect(props) {
    return this.native ? global.SkiaDomApi.RectNode(props) : new RectNode(this.ctx, props);
  }
  RRect(props) {
    return this.native ? global.SkiaDomApi.RRectNode(props) : new RRectNode(this.ctx, props);
  }
  Vertices(props) {
    return this.native ? global.SkiaDomApi.VerticesNode(props) : new VerticesNode(this.ctx, props);
  }
  Text(props) {
    return this.native ? global.SkiaDomApi.TextNode(props) : new TextNode(this.ctx, props);
  }
  TextPath(props) {
    return this.native ? global.SkiaDomApi.TextPathNode(props) : new TextPathNode(this.ctx, props);
  }
  TextBlob(props) {
    return this.native ? global.SkiaDomApi.TextBlobNode(props) : new TextBlobNode(this.ctx, props);
  }
  Glyphs(props) {
    return this.native ? global.SkiaDomApi.GlyphsNode(props) : new GlyphsNode(this.ctx, props);
  }
  DiffRect(props) {
    return this.native ? global.SkiaDomApi.DiffRectNode(props) : new DiffRectNode(this.ctx, props);
  }
  Picture(props) {
    return this.native ? global.SkiaDomApi.PictureNode(props) : new PictureNode(this.ctx, props);
  }
  Atlas(props) {
    return this.native ? global.SkiaDomApi.AtlasNode(props) : new AtlasNode(this.ctx, props);
  }
  ImageSVG(props) {
    return this.native ? global.SkiaDomApi.ImageSVGNode(props) : new ImageSVGNode(this.ctx, props);
  }

  // BlurMaskFilters
  BlurMaskFilter(props) {
    return this.native ? global.SkiaDomApi.BlurMaskFilterNode(props) : new BlurMaskFilterNode(this.ctx, props);
  }

  // ImageFilters
  BlendImageFilter(props) {
    return this.native ? global.SkiaDomApi.BlendImageFilterNode(props) : new BlendImageFilterNode(this.ctx, props);
  }
  DropShadowImageFilter(props) {
    return this.native ? global.SkiaDomApi.DropShadowImageFilterNode(props) : new DropShadowImageFilterNode(this.ctx, props);
  }
  DisplacementMapImageFilter(props) {
    return this.native ? global.SkiaDomApi.DisplacementMapImageFilterNode(props) : new DisplacementMapImageFilterNode(this.ctx, props);
  }
  BlurImageFilter(props) {
    return this.native ? global.SkiaDomApi.BlurImageFilterNode(props) : new BlurImageFilterNode(this.ctx, props);
  }
  OffsetImageFilter(props) {
    return this.native ? global.SkiaDomApi.OffsetImageFilterNode(props) : new OffsetImageFilterNode(this.ctx, props);
  }
  MorphologyImageFilter(props) {
    return this.native ? global.SkiaDomApi.MorphologyImageFilterNode(props) : new MorphologyImageFilterNode(this.ctx, props);
  }
  RuntimeShaderImageFilter(props) {
    return this.native ? global.SkiaDomApi.RuntimeShaderImageFilterNode(props) : new RuntimeShaderImageFilterNode(this.ctx, props);
  }

  // Color Filters
  MatrixColorFilter(props) {
    return this.native ? global.SkiaDomApi.MatrixColorFilterNode(props) : new MatrixColorFilterNode(this.ctx, props);
  }
  BlendColorFilter(props) {
    return this.native ? global.SkiaDomApi.BlendColorFilterNode(props) : new BlendColorFilterNode(this.ctx, props);
  }
  LumaColorFilter() {
    return this.native ? global.SkiaDomApi.LumaColorFilterNode() : new LumaColorFilterNode(this.ctx);
  }
  LinearToSRGBGammaColorFilter() {
    return global.SkiaDomApi && global.SkiaDomApi.LinearToSRGBGammaColorFilterNode ? global.SkiaDomApi.LinearToSRGBGammaColorFilterNode() : new LinearToSRGBGammaColorFilterNode(this.ctx);
  }
  SRGBToLinearGammaColorFilter() {
    return global.SkiaDomApi && global.SkiaDomApi.SRGBToLinearGammaColorFilterNode ? global.SkiaDomApi.SRGBToLinearGammaColorFilterNode() : new SRGBToLinearGammaColorFilterNode(this.ctx);
  }
  LerpColorFilter(props) {
    return this.native ? global.SkiaDomApi.LerpColorFilterNode(props) : new LerpColorFilterNode(this.ctx, props);
  }

  // Shaders
  Shader(props) {
    return this.native ? global.SkiaDomApi.ShaderNode(props) : new ShaderNode(this.ctx, props);
  }
  ImageShader(props) {
    return this.native ? global.SkiaDomApi.ImageShaderNode(props) : new ImageShaderNode(this.ctx, props);
  }
  ColorShader(props) {
    return this.native ? global.SkiaDomApi.ColorShaderNode(props) : new ColorNode(this.ctx, props);
  }
  SweepGradient(props) {
    return this.native ? global.SkiaDomApi.SweepGradientNode(props) : new SweepGradientNode(this.ctx, props);
  }
  Turbulence(props) {
    return this.native ? global.SkiaDomApi.TurbulenceNode(props) : new TurbulenceNode(this.ctx, props);
  }
  FractalNoise(props) {
    return this.native ? global.SkiaDomApi.FractalNoiseNode(props) : new FractalNoiseNode(this.ctx, props);
  }
  LinearGradient(props) {
    return this.native ? global.SkiaDomApi.LinearGradientNode(props) : new LinearGradientNode(this.ctx, props);
  }
  RadialGradient(props) {
    return this.native ? global.SkiaDomApi.RadialGradientNode(props) : new RadialGradientNode(this.ctx, props);
  }
  TwoPointConicalGradient(props) {
    return this.native ? global.SkiaDomApi.TwoPointConicalGradientNode(props) : new TwoPointConicalGradientNode(this.ctx, props);
  }

  // Path Effects
  CornerPathEffect(props) {
    return this.native ? global.SkiaDomApi.CornerPathEffectNode(props) : new CornerPathEffectNode(this.ctx, props);
  }
  DiscretePathEffect(props) {
    return this.native ? global.SkiaDomApi.DiscretePathEffectNode(props) : new DiscretePathEffectNode(this.ctx, props);
  }
  DashPathEffect(props) {
    return this.native ? global.SkiaDomApi.DashPathEffectNode(props) : new DashPathEffectNode(this.ctx, props);
  }
  Path1DPathEffect(props) {
    return this.native ? global.SkiaDomApi.Path1DPathEffectNode(props) : new Path1DPathEffectNode(this.ctx, props);
  }
  Path2DPathEffect(props) {
    return this.native ? global.SkiaDomApi.Path2DPathEffectNode(props) : new Path2DPathEffectNode(this.ctx, props);
  }
  SumPathEffect() {
    return this.native ? global.SkiaDomApi.SumPathEffectNode() : new SumPathEffectNode(this.ctx);
  }
  Line2DPathEffect(props) {
    return this.native ? global.SkiaDomApi.Line2DPathEffectNode(props) : new Line2DPathEffectNode(this.ctx, props);
  }
  Blend(props) {
    return this.native ? global.SkiaDomApi.BlendNode(props) : new BlendNode(this.ctx, props);
  }
  BackdropFilter(props) {
    return this.native ? global.SkiaDomApi.BackdropFilterNode(props) : new BackdropFilterNode(this.ctx, props);
  }
  Box(props) {
    return this.native ? global.SkiaDomApi.BoxNode(props) : new BoxNode(this.ctx, props);
  }
  BoxShadow(props) {
    return this.native ? global.SkiaDomApi.BoxShadowNode(props) : new BoxShadowNode(this.ctx, props);
  }

  // Paragraph
  Paragraph(props) {
    return this.native ? global.SkiaDomApi.ParagraphNode(props) : new ParagraphNode(this.ctx, props);
  }
}
//# sourceMappingURL=JsiSkDOM.js.map