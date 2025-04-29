import { fabric } from "fabric";

function wrapCross(object: fabric.Object): fabric.Object[] {
    const left = object.get('left') ?? 0;
    const top = object.get('top') ?? 0;
    const width = object.get('width') ?? 0;
    const height = object.get('height') ?? 0;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const right = left + width;
    const bottom = top + height;

    const leftTopH = new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 10, y: 0 },
    ], {
        left: left - 5,
        top: top,
        stroke: "#00FFFF",
        strokeWidth: 1,
    });
    const leftTopV = new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 0, y: 10 },
    ], {
        left: left,
        top: top - 5,
        stroke: "#00FFFF",
        strokeWidth: 1,
    });

    const centerH = new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 10, y: 0 },
    ], {
        left: centerX - 5,
        top: centerY,
        stroke: "#00FF00",
        strokeWidth: 1,
    });
    const centerV = new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 0, y: 10 },
    ], {
        left: centerX,
        top: centerY - 5,
        stroke: "#00FF00",
        strokeWidth: 1,
    });

    const rightBottomH = new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 10, y: 0 },
    ], {
        left: right - 5,
        top: bottom,
        stroke: "#00FFFF",
        strokeWidth: 1,
    });
    const rightBottomV = new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 0, y: 10 },
    ], {
        left: right,
        top: bottom - 5,
        stroke: "#00FFFF",
        strokeWidth: 1,
    });

    return [object, leftTopH, leftTopV, centerH, centerV, rightBottomH, rightBottomV];
}

export function createTest1Objects() {
    const rectStrokeWidth0 = wrapCross(new fabric.Rect({
        left: 100,
        top: 60,
        width: 60,
        height: 40,
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 0,
    }));

    const rectStrokeWidth0_90 = wrapCross(new fabric.Rect({
        left: 100,
        top: 120,
        width: 60,
        height: 40,
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 0,
        angle: 90,
    }));

    const rectStrokeWidth4 = wrapCross(new fabric.Rect({
        left: 210,
        top: 60,
        width: 60,
        height: 40,
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectStrokeWidth4_90 = wrapCross(new fabric.Rect({
        left: 210,
        top: 120,
        width: 60,
        height: 40,
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
        angle: 90,
    }));

    const lineHStrokeWidth4 = wrapCross(new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 60, y: 0 },
    ], {
        left: 340,
        top: 60,
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const lineHStrokeWidth4_90 = wrapCross(new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 60, y: 0 },
    ], {
        left: 340,
        top: 120,
        stroke: "#101010",
        strokeWidth: 4,
        angle: 90,
    }));

    const lineVStrokeWidth4 = wrapCross(new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 0, y: 40 },
    ], {
        left: 450,
        top: 60,
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const lineVStrokeWidth4_90 = wrapCross(new fabric.Polyline([
        { x: 0, y: 0 },
        { x: 0, y: 40 },
    ], {
        left: 450,
        top: 120,
        stroke: "#101010",
        strokeWidth: 4,
        angle: 90,
    }));

    const groupStrokeWidth0 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 0,
        })], {
            left: 100,
            top: 260,
        },
    ));

    const groupStrokeWidth0_90 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 0,
            angle: 90,
        })], {
            left: 100,
            top: 320,
        },
    ));

    const groupStrokeWidth4 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 210,
            top: 260,
        },
    ));

    const groupStrokeWidth4_90 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
            angle: 90,
        })], {
            left: 210,
            top: 320,
        },
    ));

    const groupSizedStrokeWidth0 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 0,
        })], {
            left: 340,
            top: 260,
            width: 60,
            height: 40,
        },
    ));

    const groupSizedStrokeWidth0_90 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 0,
            angle: 90,
        })], {
            left: 340,
            top: 320,
            width: 60,
            height: 40,
        },
    ));

    const groupSizedStrokeWidth4 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 450,
            top: 260,
            width: 60,
            height: 40,
        },
    ));

    const groupSizedStrokeWidth4_90 = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
            angle: 90,
        })], {
            left: 450,
            top: 320,
            width: 60,
            height: 40,
        },
    ));

    return [
        ...rectStrokeWidth0, ...rectStrokeWidth0_90,
        ...rectStrokeWidth4, ...rectStrokeWidth4_90,
        ...lineHStrokeWidth4, ...lineHStrokeWidth4_90,
        ...lineVStrokeWidth4, ...lineVStrokeWidth4_90,
        ...groupStrokeWidth0, ...groupStrokeWidth0_90,
        ...groupStrokeWidth4, ...groupStrokeWidth4_90,
        ...groupSizedStrokeWidth0, ...groupSizedStrokeWidth0_90,
        ...groupSizedStrokeWidth4, ...groupSizedStrokeWidth4_90,
    ];
}
