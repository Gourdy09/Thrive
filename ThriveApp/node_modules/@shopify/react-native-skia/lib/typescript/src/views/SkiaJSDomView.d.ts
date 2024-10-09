import React from "react";
import type { Skia, SkRect } from "../skia/types";
import type { SkiaDomViewProps } from "./types";
export declare class SkiaJSDomView extends React.Component<SkiaDomViewProps & {
    Skia: Skia;
}> {
    constructor(props: SkiaDomViewProps & {
        Skia: Skia;
    });
    private _nativeId;
    get nativeId(): number;
    componentDidUpdate(prevProps: SkiaDomViewProps & {
        Skia: Skia;
    }): void;
    /**
     * Creates a snapshot from the canvas in the surface
     * @param rect Rect to use as bounds. Optional.
     * @returns An Image object.
     */
    makeImageSnapshot(rect?: SkRect): import("../skia/types").SkImage;
    /**
     * Sends a redraw request to the native SkiaView.
     */
    redraw(): void;
    private draw;
    /**
     * Clear up the dom node when unmounting to release resources.
     */
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
