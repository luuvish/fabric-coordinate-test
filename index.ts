import { createTest1Objects } from "./test1";
import { createTest2Objects } from "./test2";
import { fabric } from "fabric";
import { writeFile } from "fs/promises";

function createCanvas() {
    const canvas = new fabric.StaticCanvas(null, { width: 640, height: 480 });
    canvas.backgroundColor = "#FFFFFF";
    return canvas;
}

function writeFiles(canvas: fabric.StaticCanvas, fileName: string) {
    const json = canvas.toJSON();
    const svg = canvas.toSVG();
    const png = canvas.toDataURL().replace(/^data:image\/png;base64,/, '');
    writeFile(`${fileName}.json`, JSON.stringify(json, null, 2));
    writeFile(`${fileName}.svg`, svg);
    writeFile(`${fileName}.png`, Buffer.from(png, 'base64'));
}

function test1() {
    const canvas = createCanvas();
    const objects = createTest1Objects();
    canvas.add(...objects);
    canvas.renderAll();
    writeFiles(canvas, 'test1');
}

function test2() {
    const canvas = createCanvas();
    const objects = createTest2Objects();
    canvas.add(...objects);
    canvas.renderAll();
    writeFiles(canvas, 'test2');
}

test1();
test2();
