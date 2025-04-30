import { fabric } from "fabric";
import { wrapCornerCrossbar } from "./util";

export function createStrokeObjects(): fabric.Object[] {

  const labelRectStrokeWidth = new fabric.Text('', {
    left: 100,
    top: 215,
    fill: "#000000",
    fontSize: 10,
    fontWeight: 700,
    text: 'rect (strokeWidth: 0/4, angle: 0/90)',
  });

  const rectStrokeWidth0 = wrapCornerCrossbar(new fabric.Rect({
    left: 100,
    top: 80,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth: 0,
  }));

  const rectStrokeWidth0_90 = wrapCornerCrossbar(new fabric.Rect({
    left: 100,
    top: 140,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth: 0,
    angle: 90,
  }));

  const rectStrokeWidth4 = wrapCornerCrossbar(new fabric.Rect({
    left: 220,
    top: 80,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth: 4,
  }));

  const rectStrokeWidth4_90 = wrapCornerCrossbar(new fabric.Rect({
    left: 220,
    top: 140,
    width: 60,
    height: 40,
    fill: "#FF0000",
    stroke: "#101010",
    strokeWidth: 4,
    angle: 90,
  }));

  const labelLineStrokeWidth = new fabric.Text('', {
    left: 360,
    top: 215,
    fill: "#000000",
    fontSize: 10,
    fontWeight: 700,
    text: 'polyline (strokeWidth: 4, angle: 0/90)',
  });

  const lineHStrokeWidth4 = wrapCornerCrossbar(new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 60, y: 0 },
  ], {
    left: 360,
    top: 80,
    stroke: "#101010",
    strokeWidth: 4,
  }));

  const lineHStrokeWidth4_90 = wrapCornerCrossbar(new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 60, y: 0 },
  ], {
    left: 360,
    top: 140,
    stroke: "#101010",
    strokeWidth: 4,
    angle: 90,
  }));

  const lineVStrokeWidth4 = wrapCornerCrossbar(new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 0, y: 40 },
  ], {
    left: 480,
    top: 80,
    stroke: "#101010",
    strokeWidth: 4,
  }));

  const lineVStrokeWidth4_90 = wrapCornerCrossbar(new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 0, y: 40 },
  ], {
    left: 480,
    top: 140,
    stroke: "#101010",
    strokeWidth: 4,
    angle: 90,
  }));

  const labelGroupStrokeWidth = new fabric.Text('', {
    left: 100,
    top: 395,
    fill: "#000000",
    fontSize: 10,
    fontWeight: 700,
    text: ('rect in group (strokeWidth: 0/4, angle: 0/90)\n' +
           '              (rect size: 60x40)'),
  });

  const groupStrokeWidth0 = wrapCornerCrossbar(new fabric.Group([
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

  const groupStrokeWidth0_90 = wrapCornerCrossbar(new fabric.Group([
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

  const groupStrokeWidth4 = wrapCornerCrossbar(new fabric.Group([
    new fabric.Rect({
      width: 60,
      height: 40,
      fill: "#FF0000",
      stroke: "#101010",
      strokeWidth: 4,
    })], {
      left: 220,
      top: 260,
    },
  ));

  const groupStrokeWidth4_90 = wrapCornerCrossbar(new fabric.Group([
    new fabric.Rect({
      width: 60,
      height: 40,
      fill: "#FF0000",
      stroke: "#101010",
      strokeWidth: 4,
      angle: 90,
    })], {
      left: 220,
      top: 320,
    },
  ));

  const labelGroupSizedStrokeWidth = new fabric.Text('', {
    left: 360,
    top: 395,
    fill: "#000000",
    fontSize: 10,
    fontWeight: 700,
    text: ('rect in group (strokeWidth: 0/4, angle: 0/90)\n' +
           '              (rect size: 60x40, group size: 60x40)'),
  });

  const groupSizedStrokeWidth0 = wrapCornerCrossbar(new fabric.Group([
    new fabric.Rect({
      width: 60,
      height: 40,
      fill: "#FF0000",
      stroke: "#101010",
      strokeWidth: 0,
    })], {
      left: 360,
      top: 260,
      width: 60,
      height: 40,
    },
  ));

  const groupSizedStrokeWidth0_90 = wrapCornerCrossbar(new fabric.Group([
    new fabric.Rect({
      width: 60,
      height: 40,
      fill: "#FF0000",
      stroke: "#101010",
      strokeWidth: 0,
      angle: 90,
    })], {
      left: 360,
      top: 320,
      width: 60,
      height: 40,
    },
  ));

  const groupSizedStrokeWidth4 = wrapCornerCrossbar(new fabric.Group([
    new fabric.Rect({
      width: 60,
      height: 40,
      fill: "#FF0000",
      stroke: "#101010",
      strokeWidth: 4,
    })], {
      left: 480,
      top: 260,
      width: 60,
      height: 40,
    },
  ));

  const groupSizedStrokeWidth4_90 = wrapCornerCrossbar(new fabric.Group([
    new fabric.Rect({
      width: 60,
      height: 40,
      fill: "#FF0000",
      stroke: "#101010",
      strokeWidth: 4,
      angle: 90,
    })], {
      left: 480,
      top: 320,
      width: 60,
      height: 40,
    },
  ));

  return [
    ...rectStrokeWidth0, ...rectStrokeWidth0_90,
    ...rectStrokeWidth4, ...rectStrokeWidth4_90,
    labelRectStrokeWidth,
    ...lineHStrokeWidth4, ...lineHStrokeWidth4_90,
    ...lineVStrokeWidth4, ...lineVStrokeWidth4_90,
    labelLineStrokeWidth,
    ...groupStrokeWidth0, ...groupStrokeWidth0_90,
    ...groupStrokeWidth4, ...groupStrokeWidth4_90,
    labelGroupStrokeWidth,
    ...groupSizedStrokeWidth0, ...groupSizedStrokeWidth0_90,
    ...groupSizedStrokeWidth4, ...groupSizedStrokeWidth4_90,
    labelGroupSizedStrokeWidth,
  ];
}
