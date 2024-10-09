"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDerivedValueOnJS = void 0;
var _react = require("react");
var _ReanimatedProxy = _interopRequireDefault(require("./ReanimatedProxy"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useDerivedValueOnJS = (fn, deps) => {
  const init = (0, _react.useMemo)(() => fn(), [fn]);
  const value = _ReanimatedProxy.default.useSharedValue(init);
  (0, _react.useEffect)(() => {
    const mapperId = _ReanimatedProxy.default.startMapper(() => {
      "worklet";

      _ReanimatedProxy.default.runOnJS(fn)();
    }, deps);
    return () => _ReanimatedProxy.default.stopMapper(mapperId);
  }, [deps, fn]);
  return value;
};
exports.useDerivedValueOnJS = useDerivedValueOnJS;
//# sourceMappingURL=useDerivedValueOnJS.js.map