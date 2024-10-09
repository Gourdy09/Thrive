"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindReanimatedProps = bindReanimatedProps;
exports.extractReanimatedProps = extractReanimatedProps;
exports.unbindReanimatedNode = void 0;
var _ReanimatedProxy = _interopRequireDefault(require("./ReanimatedProxy"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable @typescript-eslint/no-explicit-any */

let HAS_REANIMATED = false;
let HAS_REANIMATED_3 = false;
try {
  require("react-native-reanimated");
  HAS_REANIMATED = true;
  const reanimatedVersion = require("react-native-reanimated/package.json").version;
  if (reanimatedVersion && (reanimatedVersion >= "3.0.0" || reanimatedVersion.includes("3.0.0-"))) {
    HAS_REANIMATED_3 = true;
  }
} catch (e) {
  HAS_REANIMATED = false;
}
const _bindings = new WeakMap();
const unbindReanimatedNode = node => {
  if (!HAS_REANIMATED) {
    return;
  }
  const previousMapperId = _bindings.get(node);
  if (previousMapperId !== undefined) {
    _ReanimatedProxy.default.stopMapper(previousMapperId);
  }
};
exports.unbindReanimatedNode = unbindReanimatedNode;
function extractReanimatedProps(props) {
  if (!HAS_REANIMATED) {
    return [props, {}];
  }
  const reanimatedProps = {};
  const otherProps = {};
  for (const propName in props) {
    if (propName === "children") {
      continue;
    }
    const propValue = props[propName];
    if (_ReanimatedProxy.default.isSharedValue(propValue)) {
      reanimatedProps[propName] = propValue;
      otherProps[propName] = propValue.value;
    } else {
      otherProps[propName] = propValue;
    }
  }
  return [otherProps, reanimatedProps];
}
function bindReanimatedProps2(container, node, reanimatedProps) {
  const sharedValues = Object.values(reanimatedProps);
  const previousMapperId = _bindings.get(node);
  if (previousMapperId !== undefined) {
    _ReanimatedProxy.default.stopMapper(previousMapperId);
  }
  if (sharedValues.length > 0) {
    const viewId = container.getNativeId();
    const {
      SkiaViewApi
    } = global;
    const updateProps = () => {
      for (const propName in reanimatedProps) {
        node && node.setProp(propName, reanimatedProps[propName].value);
      }
      // On React Native we use the SkiaViewApi to redraw because it can
      // run on the worklet thread (container.redraw can't)
      // if SkiaViewApi is undefined, we are on web and container.redraw()
      // can safely be invoked
      if (SkiaViewApi) {
        SkiaViewApi.requestRedraw(viewId);
      } else {
        container.redraw();
      }
    };
    const mapperId = _ReanimatedProxy.default.startMapper(() => {
      "worklet";

      _ReanimatedProxy.default.runOnJS(updateProps)();
    }, sharedValues);
    _bindings.set(node, mapperId);
  }
}
function bindReanimatedProps(container, node, reanimatedProps) {
  if (HAS_REANIMATED && !HAS_REANIMATED_3) {
    return bindReanimatedProps2(container, node, reanimatedProps);
  }
  if (!HAS_REANIMATED) {
    return;
  }
  const sharedValues = Object.values(reanimatedProps);
  const previousMapperId = _bindings.get(node);
  if (previousMapperId !== undefined) {
    _ReanimatedProxy.default.stopMapper(previousMapperId);
  }
  if (sharedValues.length > 0) {
    const viewId = container.getNativeId();
    const {
      SkiaViewApi
    } = global;
    const mapperId = _ReanimatedProxy.default.startMapper(() => {
      "worklet";

      if (node) {
        for (const propName in reanimatedProps) {
          node.setProp(propName, reanimatedProps[propName].value);
        }
      }
      // On React Native we use the SkiaViewApi to redraw because it can
      // run on the worklet thread (container.redraw can't)
      // if SkiaViewApi is undefined, we are on web and container.redraw()
      // can safely be invoked
      if (SkiaViewApi) {
        SkiaViewApi.requestRedraw(viewId);
      } else {
        container.redraw();
      }
    }, sharedValues);
    _bindings.set(node, mapperId);
  }
}
//# sourceMappingURL=renderHelpers.js.map