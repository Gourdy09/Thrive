function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useCallback, useMemo, forwardRef, useRef } from "react";
import { SkiaDomView } from "../views";
import { Skia } from "../skia/Skia";
import { SkiaJSDomView } from "../views/SkiaJSDomView";
import { SkiaRoot } from "./Reconciler";
import { NATIVE_DOM } from "./HostComponents";
export const useCanvasRef = () => useRef(null);
const useOnSizeEvent = (resultValue, onLayout) => {
  return useCallback(event => {
    if (onLayout) {
      onLayout(event);
    }
    const {
      width,
      height
    } = event.nativeEvent.layout;
    if (resultValue) {
      resultValue.value = {
        width,
        height
      };
    }
  }, [onLayout, resultValue]);
};
export const Canvas = /*#__PURE__*/forwardRef(({
  children,
  style,
  debug,
  mode,
  onTouch,
  onSize: _onSize,
  onLayout: _onLayout,
  ...props
}, forwardedRef) => {
  const onLayout = useOnSizeEvent(_onSize, _onLayout);
  const innerRef = useCanvasRef();
  const ref = useCombinedRefs(forwardedRef, innerRef);
  const redraw = useCallback(() => {
    var _innerRef$current;
    (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.redraw();
  }, [innerRef]);
  const getNativeId = useCallback(() => {
    var _innerRef$current$nat, _innerRef$current2;
    const id = (_innerRef$current$nat = (_innerRef$current2 = innerRef.current) === null || _innerRef$current2 === void 0 ? void 0 : _innerRef$current2.nativeId) !== null && _innerRef$current$nat !== void 0 ? _innerRef$current$nat : -1;
    return id;
  }, [innerRef]);
  const root = useMemo(() => new SkiaRoot(Skia, NATIVE_DOM, redraw, getNativeId), [redraw, getNativeId]);

  // Render effect
  useEffect(() => {
    root.render(children);
  }, [children, root, redraw]);
  useEffect(() => {
    return () => {
      root.unmount();
    };
  }, [root]);
  if (NATIVE_DOM) {
    return /*#__PURE__*/React.createElement(SkiaDomView, _extends({
      ref: ref,
      style: style,
      root: root.dom,
      onTouch: onTouch,
      onLayout: onLayout,
      mode: mode,
      debug: debug
    }, props));
  } else {
    return /*#__PURE__*/React.createElement(SkiaJSDomView, _extends({
      Skia: Skia
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ,
      ref: ref,
      style: style,
      root: root.dom,
      onTouch: onTouch,
      onLayout: onLayout,
      mode: mode,
      debug: debug
    }, props));
  }
});

/**
 * Combines a list of refs into a single ref. This can be used to provide
 * both a forwarded ref and an internal ref keeping the same functionality
 * on both of the refs.
 * @param refs Array of refs to combine
 * @returns A single ref that can be used in a ref prop.
 */
const useCombinedRefs = (...refs) => {
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    refs.forEach(ref => {
      if (ref) {
        if (typeof ref === "function") {
          ref(targetRef.current);
        } else {
          ref.current = targetRef.current;
        }
      }
    });
  }, [refs]);
  return targetRef;
};
//# sourceMappingURL=Canvas.js.map