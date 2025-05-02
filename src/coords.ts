import { fabric } from "fabric";

function createCoordsSingles({
  left = 0,
  top = 0,
}: {
  left?: number,
  top?: number,
}): fabric.Object[] {

  const background = new fabric.Rect({
    left,
    top,
    width: 180,
    height: 120,
    fill: "yellow",
    strokeWidth: 0,
  });

  const rect1 = new fabric.Rect({
    left: left + 20,
    top: top + 10,
    width: 60,
    height: 40,
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
  });

  const rect2 = new fabric.Rect({
    left: left + 140,
    top: top + 10,
    width: 60,
    height: 40,
    angle: 90,
    scaleX: 0.5,
    scaleY: 0.5,
    fill: "blue",
    stroke: "black",
    strokeWidth: 4,
  });

  const text3 = new fabric.Text('', {
    left: left + 20,
    top: top + 80,
    width: 60,
    height: 40,
    fill: "green",
    fontSize: 10,
    fontWeight: 700,
    text: 'Text',
  });

  const line4 = new fabric.Polyline([
    { x: 0, y: 0 },
    { x: 60, y: 0 },
    { x: 0, y: 40 },
    { x: 60, y: 40 },
  ], {
    left: left + 100,
    top: top + 60,
    width: 60,
    height: 40,
    fill: 'transparent',
    stroke: "black",
    strokeWidth: 4,
    strokeLineCap: "round",
  });

  return [background, rect1, rect2, text3, line4];
}

function createCoordsGroup1({
  left = 0,
  top = 0,
}: {
  left?: number,
  top?: number,
}): fabric.Group {

  const background = new fabric.Rect({
    left: 0,
    top: 0,
    width: 200,
    height: 140,
    fill: "pink",
    strokeWidth: 0,
  });

  const singles = createCoordsSingles({ left: 10, top: 10 });

  const text1 = new fabric.Text('', {
    originX: "center",
    originY: "top",
    left: 100,
    top: 0,
    width: 200,
    height: 20,
    fill: "skyblue",
    fontSize: 10,
    fontWeight: 700,
    text: 'Group 1',
  });

  const group1 = new fabric.Group([background, ...singles, text1], { left, top });

  return group1;
}

function createCoordsGroup2({
  left = 0,
  top = 0,
}: {
  left?: number,
  top?: number,
}): fabric.Group {

  const background = new fabric.Rect({
    left: 0,
    top: 0,
    width: 250,
    height: 160,
    fill: "teal",
    strokeWidth: 0,
  });

  const group1 = createCoordsGroup1({ left: 10, top: 10 });
  group1.set({
    left: 80,
    top: 20,
    scaleX: 0.5,
    scaleY: 0.5,
    flipX: true,
    angle: 45,
  })

  const rect2 = new fabric.Rect({
    originX: "center",
    originY: "center",
    left: 200,
    top: 90,
    width: 20,
    height: 30,
    stroke: "black",
    strokeWidth: 4,
    fill: "lime",
    scaleX: 2.0,
    scaleY: 2.0,
    flipX: true,
    angle: 45,
  });

  const text2 = new fabric.Text('', {
    originX: "center",
    originY: "top",
    left: 120,
    top: 0,
    width: 250,
    height: 20,
    fill: "white",
    fontSize: 10,
    fontWeight: 700,
    text: 'Group 2',
  });

  const group2 = new fabric.Group([background, group1, rect2, text2], { left, top });

  return group2;
}

function createCoordsGroup3({
  left = 0,
  top = 0,
}: {
  left?: number,
  top?: number,
}): fabric.Group {

  const background = new fabric.Rect({
    left: 0,
    top: 0,
    width: 240,
    height: 160,
    fill: "violet",
    strokeWidth: 0,
  });

  const group1 = createCoordsGroup1({ left: 10, top: 10 });

  const group2 = createCoordsGroup2({});
  group2.set({
    left: 150,
    top: 100,
    scaleX: 0.5,
    scaleY: 0.5,
  })

  const text3 = new fabric.Text('', {
    originX: "center",
    originY: "top",
    left: 120,
    top: 0,
    width: 240,
    height: 20,
    fill: "green",
    fontSize: 10,
    fontWeight: 700,
    text: 'Group 3',
  });

  const group3 = new fabric.Group([background, group1, group2, text3], { left, top });

  return group3;
}

export function createCoordsObjects(): fabric.Object[] {

  const singles = createCoordsSingles({ left: 80, top: 70 });
  const group1 = createCoordsGroup1({ left: 350, top: 60 });
  const group2 = createCoordsGroup2({ left: 50, top: 250 });
  const group3 = createCoordsGroup3({ left: 330, top: 250 });

  return [...singles, group1, group2, group3];
}
