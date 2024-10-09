import React from "react";
import type { SkRect } from "../skia/types";
import type { SkiaDomViewProps } from "./types";
export declare class SkiaDomView extends React.Component<SkiaDomViewProps> {
    constructor(props: SkiaDomViewProps);
    private _nativeId;
    get nativeId(): number;
    componentDidUpdate(prevProps: SkiaDomViewProps): void;
    /**
     * Creates a snapshot from the canvas in the surface
     * @param rect Rect to use as bounds. Optional.
     * @returns An Image object.
     */
    makeImageSnapshot(rect?: SkRect): import("../skia/types").SkImage;
    /**
     * Creates a snapshot from the canvas in the surface
     * @param rect Rect to use as bounds. Optional.
     * @returns An Image object.
     */
    makeImageSnapshotAsync(rect?: SkRect): Promise<import("../skia/types").SkImage>;
    /**
     * Sends a redraw request to the native SkiaView.
     */
    redraw(): void;
    /**
     * Clear up the dom node when unmounting to release resources.
     */
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
