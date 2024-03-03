import "mocha";
import { expect } from "chai";
import { Printable, Scannable, PrintableScannable } from "../src/ejercicio-4/impresoras-escaneres";

describe("Printable", () => {
  it("debería imprimir correctamente", () => {
    const printable = new Printable();
    expect(printable.print.bind(printable)).to.not.throw();
  });

  it("debería lanzar un error al intentar escanear", () => {
    const printable = new Printable();
    expect(printable.scan.bind(printable)).to.throw(Error, "Printer cannot scan.");
  });
});

describe("Scannable", () => {
  it("debería lanzar un error al intentar imprimir", () => {
    const scannable = new Scannable();
    expect(scannable.print.bind(scannable)).to.throw(Error, "Scanner cannot print.");
  });

  it("debería escanear correctamente", () => {
    const scannable = new Scannable();
    expect(scannable.scan.bind(scannable)).to.not.throw();
  });
});

describe("PrintableScannable", () => {
  it("debería imprimir correctamente", () => {
    const printableScannable = new PrintableScannable();
    expect(printableScannable.print.bind(printableScannable)).to.not.throw();
  });

  it("debería escanear correctamente", () => {
    const printableScannable = new PrintableScannable();
    expect(printableScannable.scan.bind(printableScannable)).to.not.throw();
  });
});