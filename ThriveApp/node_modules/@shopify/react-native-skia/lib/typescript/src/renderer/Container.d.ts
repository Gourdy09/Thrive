import type { GroupProps, DrawingContext, RenderNode, SkDOM } from "../dom/types";
import type { Skia } from "../skia/types";
export declare class Container {
    redraw: () => void;
    getNativeId: () => number;
    private _root;
    Sk: SkDOM;
    constructor(Skia: Skia, redraw: () => void, getNativeId: () => number, native: boolean);
    draw(ctx: DrawingContext): void;
    get root(): RenderNode<GroupProps>;
}
