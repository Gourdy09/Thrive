import React from "react";
import type { SkRect } from "../skia/types";
import type { SkiaPictureViewProps } from "./types";
export declare class SkiaPictureView extends React.Component<SkiaPictureViewProps> {
    constructor(props: SkiaPictureViewProps);
    private _nativeId;
    get nativeId(): number;
    componentDidUpdate(prevProps: SkiaPictureViewProps): void;
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
    render(): React.JSX.Element;
}
