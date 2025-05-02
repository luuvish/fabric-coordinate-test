import { createStrokeObjects } from "./stroke";
import { createOriginObjects } from "./origin";
import { createCoordsObjects } from "./coords";
import { createCanvas, writeCanvas } from "./util";

function test(fileName: string, createObjects: () => fabric.Object[]) {
  const canvas = createCanvas({ width: 640, height: 480 });
  const objects = createObjects();
  canvas.add(...objects);
  canvas.renderAll();
  writeCanvas(canvas, fileName);
}

test('stroke', createStrokeObjects);
test('origin', createOriginObjects);
test('coords', createCoordsObjects);
