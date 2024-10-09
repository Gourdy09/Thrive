import type { AtlasProps, DrawingContext } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
import type { NodeContext } from "../Node";
export declare class AtlasNode extends JsiDrawingNode<AtlasProps, null> {
    protected deriveProps(): null;
    constructor(ctx: NodeContext, props: AtlasProps);
    draw({ canvas, paint }: DrawingContext): void;
}
