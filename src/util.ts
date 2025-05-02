import { fabric } from "fabric";
import { writeFile } from "fs/promises";

export function createCanvas({
  width = 640,
  height = 480,
}: {
  width: number,
  height: number,
}): fabric.StaticCanvas {
  const canvas = new fabric.StaticCanvas(null, { width, height });
  canvas.backgroundColor = "#FFFFFF";
  return canvas;
}

export function writeCanvas(canvas: fabric.StaticCanvas, fileName: string) {
    const json = toSimpleJSON(canvas);
    const svg = canvas.toSVG();
    const png = canvas.toDataURL({ format: 'png' }).replace(/^data:image\/png;base64,/, '');
    writeFile(`${fileName}.json`, JSON.stringify(json, null, 2));
    writeFile(`${fileName}.svg`, svg);
    writeFile(`${fileName}.png`, Buffer.from(png, 'base64'));
}

type BoundingRect = {
  left: number;
  top: number;
  width: number;
  height: number;
}

type FabricPoint = {
  x: number;
  y: number;
}

type SimpleJSON = {
  type: string;
  originX: string;
  originY: string;
  left: number;
  top: number;
  width: number;
  height: number;
  boundingRect: BoundingRect;
  strokeWidth: number;
  points?: FabricPoint[];
  centerPoint?: FabricPoint;
  objects?: SimpleJSON[];
};

function getAbsoluteBoundingRect(object: fabric.Object): BoundingRect {
  const { left, top, width, height } = object.getBoundingRect(true);
  if (object.group) {
    const vpt = fabric.util.qrDecompose(object.group.calcTransformMatrix());
    return {
      left: left * vpt.scaleX + vpt.translateX,
      top: top * vpt.scaleY + vpt.translateY,
      width: width * vpt.scaleX,
      height: height * vpt.scaleY,
    }
  }
  return { left, top, width, height };
}

export function toSimpleJSON(canvasOrGroup?: fabric.StaticCanvas | fabric.Group): SimpleJSON[] {
  return (canvasOrGroup?.getObjects() ?? []).map((object: fabric.Object) => {
    return {
      type: object.type ?? '',
      originX: object.originX ?? 'left',
      originY: object.originY ?? 'top',
      left: object.left ?? 0,
      top: object.top ?? 0,
      width: object.width ?? 0,
      height: object.height ?? 0,
      boundingRect: getAbsoluteBoundingRect(object),
      strokeWidth: object.get('strokeWidth') ?? 0,
      ...(object.type === 'polyline' ? { points: (object as fabric.Polyline).points } : {}),
      ...(object.type === 'group' ? { centerPoint: (object as fabric.Group).getCenterPoint() } : {}),
      ...(object.type === 'group' ? { objects: toSimpleJSON(object as fabric.Group) } : {}),
    };
  }) ?? [];
}

export function wrapCornerCrossbar(object: fabric.Object): fabric.Object[] {

  const width = object.get('width') ?? 0;
  const height = object.get('height') ?? 0;
  const left = object.get('left') ?? 0;
  const top = object.get('top') ?? 0;
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
    stroke: "#0000FF",
    strokeWidth: 1,
  });
  const leftTopV = new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 0, y: 10 },
  ], {
    left: left,
    top: top - 5,
    stroke: "#0000FF",
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
    stroke: "#0000FF",
    strokeWidth: 1,
  });
  const rightBottomV = new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 0, y: 10 },
  ], {
    left: right,
    top: bottom - 5,
    stroke: "#0000FF",
    strokeWidth: 1,
  });

  return [object, leftTopH, leftTopV, centerH, centerV, rightBottomH, rightBottomV];
}

export function wrapOriginCrossbar(object: fabric.Object): fabric.Object[] {

  const left = object.get('left') ?? 0;
  const top = object.get('top') ?? 0;

  const originH = new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 10, y: 0 },
  ], {
    left: left - 5,
    top: top,
    stroke: "#0000FF",
    strokeWidth: 1,
  });
  const originV = new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 0, y: 10 },
  ], {
    left: left,
    top: top - 5,
    stroke: "#0000FF",
    strokeWidth: 1,
  });

  return [object, originH, originV];
}
