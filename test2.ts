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

export function createTest2Objects() {

    const rectRightBottom = wrapCross(new fabric.Rect({
        left: 80,
        top: 60,
        width: 60,
        height: 40,
        originX: 'right',
        originY: 'bottom',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectCenterBottom = wrapCross(new fabric.Rect({
        left: 150,
        top: 60,
        width: 60,
        height: 40,
        originX: 'center',
        originY: 'bottom',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectLeftBottom = wrapCross(new fabric.Rect({
        left: 220,
        top: 60,
        width: 60,
        height: 40,
        originX: 'left',
        originY: 'bottom',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectRightCenter = wrapCross(new fabric.Rect({
        left: 80,
        top: 130,
        width: 60,
        height: 40,
        originX: 'right',
        originY: 'center',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectCenterCenter = wrapCross(new fabric.Rect({
        left: 150,
        top: 130,
        width: 60,
        height: 40,
        originX: 'center',
        originY: 'center',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectLeftCenter = wrapCross(new fabric.Rect({
        left: 220,
        top: 130,
        width: 60,
        height: 40,
        originX: 'left',
        originY: 'center',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectRightTop = wrapCross(new fabric.Rect({
        left: 80,
        top: 200,
        width: 60,
        height: 40,
        originX: 'right',
        originY: 'top',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectCenterTop = wrapCross(new fabric.Rect({
        left: 150,
        top: 200,
        width: 60,
        height: 40,
        originX: 'center',
        originY: 'top',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const rectLeftTop = wrapCross(new fabric.Rect({
        left: 220,
        top: 200,
        width: 60,
        height: 40,
        originX: 'left',
        originY: 'top',
        fill: "#FF0000",
        stroke: "#101010",
        strokeWidth: 4,
    }));

    const groupRightBottom = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 410,
            top: 60,
            originX: 'right',
            originY: 'bottom',
        },
    ));

    const groupCenterBottom = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 470,
            top: 60,
            originX: 'center',
            originY: 'bottom',
        },
    ));

    const groupLeftBottom = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 530,
            top: 60,
            originX: 'left',
            originY: 'bottom',
        },
    ));

    const groupRightCenter = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 410,
            top: 130,
            originX: 'right',
            originY: 'center',
        },
    ));

    const groupCenterCenter = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 470,
            top: 130,
            originX: 'center',
            originY: 'center',
        },
    ));

    const groupLeftCenter = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 530,
            top: 130,
            originX: 'left',
            originY: 'center',
        },
    ));

    const groupRightTop = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 410,
            top: 200,
            originX: 'right',
            originY: 'top',
        },
    ));

    const groupCenterTop = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 470,
            top: 200,
            originX: 'center',
            originY: 'top',
        },
    ));

    const groupLeftTop = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 530,
            top: 200,
            originX: 'left',
            originY: 'top',
        },
    ));

    const groupSizedRightBottom = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 410,
            top: 300,
            width: 60,
            height: 40,
            originX: 'right',
            originY: 'bottom',
        },
    ));

    const groupSizedCenterBottom = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 470,
            top: 300,
            width: 60,
            height: 40,
            originX: 'center',
            originY: 'bottom',
        },
    ));

    const groupSizedLeftBottom = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 530,
            top: 300,
            width: 60,
            height: 40,
            originX: 'left',
            originY: 'bottom',
        },
    ));

    const groupSizedRightCenter = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 410,
            top: 360,
            width: 60,
            height: 40,
            originX: 'right',
            originY: 'center',
        },
    ));

    const groupSizedCenterCenter = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 470,
            top: 360,
            width: 60,
            height: 40,
            originX: 'center',
            originY: 'center',
        },
    ));

    const groupSizedLeftCenter = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 530,
            top: 360,
            width: 60,
            height: 40,
            originX: 'left',
            originY: 'center',
        },
    ));

    const groupSizedRightTop = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 410,
            top: 430,
            width: 60,
            height: 40,
            originX: 'right',
            originY: 'top',
        },
    ));

    const groupSizedCenterTop = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 470,
            top: 430,
            width: 60,
            height: 40,
            originX: 'center',
            originY: 'top',
        },
    ));

    const groupSizedLeftTop = wrapCross(new fabric.Group([
        new fabric.Rect({
            width: 60,
            height: 40,
            fill: "#FF0000",
            stroke: "#101010",
            strokeWidth: 4,
        })], {
            left: 530,
            top: 430,
            width: 60,
            height: 40,
            originX: 'left',
            originY: 'top',
        },
    ));

    return [
        ...rectRightBottom, ...rectCenterBottom, ...rectLeftBottom,
        ...rectRightCenter, ...rectCenterCenter, ...rectLeftCenter,
        ...rectRightTop, ...rectCenterTop, ...rectLeftTop,
        ...groupRightBottom, ...groupCenterBottom, ...groupLeftBottom,
        ...groupRightCenter, ...groupCenterCenter, ...groupLeftCenter,
        ...groupRightTop, ...groupCenterTop, ...groupLeftTop,
        ...groupSizedRightBottom, ...groupSizedCenterBottom, ...groupSizedLeftBottom,
        ...groupSizedRightCenter, ...groupSizedCenterCenter, ...groupSizedLeftCenter,
        ...groupSizedRightTop, ...groupSizedCenterTop, ...groupSizedLeftTop,
    ];
}
