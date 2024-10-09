import type { InputRRect, SkRRect } from "../../../skia/types";
import type { DrawingContext, RoundedRectProps } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
import type { NodeContext } from "../Node";
export declare class RRectNode extends JsiDrawingNode<RoundedRectProps, InputRRect> {
    rect?: SkRRect;
    constructor(ctx: NodeContext, props: RoundedRectProps);
    protected deriveProps(): InputRRect;
    draw({ canvas, paint }: DrawingContext): void;
}
