function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export const composeDeclarations = (filters, composer) => {
  if (filters.length <= 1) {
    return filters[0];
  }
  return filters.reverse().reduce((inner, outer) => {
    if (!inner) {
      return outer;
    }
    return composer(outer, inner);
  });
};
class Declaration {
  constructor(composer) {
    this.composer = composer;
    _defineProperty(this, "decls", []);
    _defineProperty(this, "indexes", [0]);
  }
  get index() {
    return this.indexes[this.indexes.length - 1];
  }
  save() {
    this.indexes.push(this.decls.length);
  }
  restore() {
    this.indexes.pop();
  }
  pop() {
    return this.decls.pop();
  }
  push(decl) {
    this.decls.push(decl);
  }
  popAll() {
    return this.decls.splice(this.index, this.decls.length - this.index);
  }
  popAllAsOne() {
    if (!this.composer) {
      throw new Error("No composer for this type of declaration");
    }
    const decls = this.popAll();
    return composeDeclarations(decls, this.composer);
  }
}
export class DeclarationContext {
  constructor(Skia) {
    this.Skia = Skia;
    _defineProperty(this, "paints", void 0);
    _defineProperty(this, "maskFilters", void 0);
    _defineProperty(this, "shaders", void 0);
    _defineProperty(this, "pathEffects", void 0);
    _defineProperty(this, "imageFilters", void 0);
    _defineProperty(this, "colorFilters", void 0);
    const peComp = this.Skia.PathEffect.MakeCompose.bind(this.Skia.PathEffect);
    const ifComp = this.Skia.ImageFilter.MakeCompose.bind(this.Skia.ImageFilter);
    const cfComp = this.Skia.ColorFilter.MakeCompose.bind(this.Skia.ColorFilter);
    this.paints = new Declaration();
    this.maskFilters = new Declaration();
    this.shaders = new Declaration();
    this.pathEffects = new Declaration(peComp);
    this.imageFilters = new Declaration(ifComp);
    this.colorFilters = new Declaration(cfComp);
  }
  save() {
    this.paints.save();
    this.maskFilters.save();
    this.shaders.save();
    this.pathEffects.save();
    this.imageFilters.save();
    this.colorFilters.save();
  }
  restore() {
    this.paints.restore();
    this.maskFilters.restore();
    this.shaders.restore();
    this.pathEffects.restore();
    this.imageFilters.restore();
    this.colorFilters.restore();
  }
}
//# sourceMappingURL=DeclarationContext.js.map