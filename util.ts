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
    const json = canvas.toJSON();
    const svg = canvas.toSVG();
    const png = canvas.toDataURL({ format: 'png' }).replace(/^data:image\/png;base64,/, '');
    writeFile(`${fileName}.json`, JSON.stringify(json, null, 2));
    writeFile(`${fileName}.svg`, svg);
    writeFile(`${fileName}.png`, Buffer.from(png, 'base64'));
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
