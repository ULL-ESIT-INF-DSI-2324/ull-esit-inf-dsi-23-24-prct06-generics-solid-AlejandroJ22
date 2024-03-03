"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const impresoras_escaneres_1 = require("../src/ejercicio-4/impresoras-escaneres");
describe("Printable", () => {
    it("debería imprimir correctamente", () => {
        const printable = new impresoras_escaneres_1.Printable();
        (0, chai_1.expect)(printable.print.bind(printable)).to.not.throw();
    });
    it("debería lanzar un error al intentar escanear", () => {
        const printable = new impresoras_escaneres_1.Printable();
        (0, chai_1.expect)(printable.scan.bind(printable)).to.throw(Error, "Printer cannot scan.");
    });
});
describe("Scannable", () => {
    it("debería lanzar un error al intentar imprimir", () => {
        const scannable = new impresoras_escaneres_1.Scannable();
        (0, chai_1.expect)(scannable.print.bind(scannable)).to.throw(Error, "Scanner cannot print.");
    });
    it("debería escanear correctamente", () => {
        const scannable = new impresoras_escaneres_1.Scannable();
        (0, chai_1.expect)(scannable.scan.bind(scannable)).to.not.throw();
    });
});
describe("PrintableScannable", () => {
    it("debería imprimir correctamente", () => {
        const printableScannable = new impresoras_escaneres_1.PrintableScannable();
        (0, chai_1.expect)(printableScannable.print.bind(printableScannable)).to.not.throw();
    });
    it("debería escanear correctamente", () => {
        const printableScannable = new impresoras_escaneres_1.PrintableScannable();
        (0, chai_1.expect)(printableScannable.scan.bind(printableScannable)).to.not.throw();
    });
});
