import { useEffect, useMemo } from "react";
import Rea from "./ReanimatedProxy";
export const useDerivedValueOnJS = (fn, deps) => {
  const init = useMemo(() => fn(), [fn]);
  const value = Rea.useSharedValue(init);
  useEffect(() => {
    const mapperId = Rea.startMapper(() => {
      "worklet";

      Rea.runOnJS(fn)();
    }, deps);
    return () => Rea.stopMapper(mapperId);
  }, [deps, fn]);
  return value;
};
//# sourceMappingURL=useDerivedValueOnJS.js.map