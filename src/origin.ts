import { fabric } from "fabric";
import { wrapOriginCrossbar } from "./util";

export function createOriginOneObject({
  type,
  sized,
  originX,
  originY,
  left,
  top,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: {
  type: 'rect' | 'group',
  sized: boolean,
  originX: string,
  originY: string,
  left: number,
  top: number,
  width: number,
  height: number,
  fill: string,
  stroke: string,
  strokeWidth: number,
}) {
  if (type === 'rect') {
    const rect = new fabric.Rect({
      originX,
      originY,
      left,
      top,
      width,
      height,
      fill,
      stroke,
      strokeWidth,
    });
    return wrapOriginCrossbar(rect);
  }

  if (type === 'group') {
    const rect = new fabric.Rect({
      width,
      height,
      fill,
      stroke,
      strokeWidth,
    });
    const group = new fabric.Group([rect], {
      originX,
      originY,
      left,
      top,
      ...(sized ? { width, height } : {}),
    });
    return wrapOriginCrossbar(group);
  }
  return [];
}

export function createOriginNineObjects({
  type = 'rect',
  sized = false,
  left = 0,
  top = 0,
  strokeWidth = 4,
  text = '',
}: {
  type: 'rect' | 'group',
  left: number,
  top: number,
  strokeWidth: number,
  sized: boolean,
  text: string,
}): fabric.Object[] {

  const label = new fabric.Text('', {
    left: left + 50,
    top: top + 170,
    fill: "#000000",
    fontSize: 10,
    fontWeight: 700,
    text: (text +
           '\noriginX: bottom/center/left' +
           '\noriginY: bottom/center/left'),
  });

  const rectRightBottom = createOriginOneObject({
    type,
    sized,
    originX: 'right',
    originY: 'bottom',
    left: left + 60,
    top: top + 40,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectCenterBottom = createOriginOneObject({
    type,
    sized,
    originX: 'center',
    originY: 'bottom',
    left: left + 110,
    top: top + 40,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectLeftBottom = createOriginOneObject({
    type,
    sized,
    originX: 'left',
    originY: 'bottom',
    left: left + 160,
    top: top + 40,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectRightCenter = createOriginOneObject({
    type,
    sized,
    originX: 'right',
    originY: 'center',
    left: left + 60,
    top: top + 80,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectCenterCenter = createOriginOneObject({
    type,
    sized,
    originX: 'center',
    originY: 'center',
    left: left + 110,
    top: top + 80,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectLeftCenter = createOriginOneObject({
    type,
    sized,
    originX: 'left',
    originY: 'center',
    left: left + 160,
    top: top + 80,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectRightTop = createOriginOneObject({
    type,
    sized,
    originX: 'right',
    originY: 'top',
    left: left + 60,
    top: top + 120,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectCenterTop = createOriginOneObject({
    type,
    sized,
    originX: 'center',
    originY: 'top',
    left: left + 110,
    top: top + 120,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  const rectLeftTop = createOriginOneObject({
    type,
    sized,
    originX: 'left',
    originY: 'top',
    left: left + 160,
    top: top + 120,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth,
  });

  return [
    ...rectRightBottom, ...rectCenterBottom, ...rectLeftBottom,
    ...rectRightCenter, ...rectCenterCenter, ...rectLeftCenter,
    ...rectRightTop, ...rectCenterTop, ...rectLeftTop,
    label,
  ];
}

export function createOriginObjects() {

  const rectStroke0Objects = createOriginNineObjects({
    type: 'rect',
    sized: false,
    left: 60,
    top: 20,
    strokeWidth: 0,
    text: 'rect (strokeWidth: 0)',
  });
  const rectStroke4Objects = createOriginNineObjects({
    type: 'rect',
    sized: false,
    left: 350,
    top: 20,
    strokeWidth: 4,
    text: 'rect (strokeWidth: 4)',
  });

  const groupStroke4Objects = createOriginNineObjects({
    type: 'group',
    sized: false,
    left: 60,
    top: 250,
    strokeWidth: 4,
    text: 'rect in group (strokeWidth: 4)',
  });
  const groupSizedStroke4Objects = createOriginNineObjects({
    type: 'group',
    sized: true,
    left: 350,
    top: 250,
    strokeWidth: 4,
    text: 'rect in group (strokeWidth: 4, group size: 60x40)',
  });

  return [
    ...rectStroke0Objects, ...rectStroke4Objects,
    ...groupStroke4Objects, ...groupSizedStroke4Objects,
  ];
}
