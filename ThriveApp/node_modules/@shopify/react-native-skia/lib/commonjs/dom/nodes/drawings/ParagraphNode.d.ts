import type { DrawingContext, ParagraphProps } from "../../types";
import { JsiDrawingNode } from "../DrawingNode";
import type { NodeContext } from "../Node";
export declare class ParagraphNode extends JsiDrawingNode<ParagraphProps, null> {
    constructor(ctx: NodeContext, props: ParagraphProps);
    deriveProps(): null;
    draw({ canvas }: DrawingContext): void;
}
