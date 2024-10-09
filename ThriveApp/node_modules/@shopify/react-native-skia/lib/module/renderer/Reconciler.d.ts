import type { ReactNode } from "react";
import type { Skia } from "../skia/types";
export declare class SkiaRoot {
    private root;
    private container;
    constructor(Skia: Skia, native?: boolean, redraw?: () => void, getNativeId?: () => number);
    render(element: ReactNode): void;
    unmount(): void;
    get dom(): import("..").RenderNode<import("..").GroupProps>;
}
