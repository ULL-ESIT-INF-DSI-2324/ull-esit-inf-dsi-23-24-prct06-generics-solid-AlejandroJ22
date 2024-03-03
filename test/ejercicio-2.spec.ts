import "mocha";
import { expect } from "chai";
import { SimpleInvoice } from "../src/ejercicio-2/facturacion-basica";
import { DiscountedInvoice } from "../src/ejercicio-2/facturacion-descuento";

describe("Facturación básica:", () => {
  describe("SimpleInvoice:", () => {
    it("debería calcular el total correctamente", () => {
      const invoice = new SimpleInvoice("Emisor", "Receptor", "Concepto", 100, 21);
      expect(invoice.getTotal()).to.equal(121);
    });

    it("debería devolver una representación de la factura en texto", () => {
      const invoice = new SimpleInvoice("Emisor", "Receptor", "Concepto", 100, 21);
      const expectedOutput = `
            FACTURA
            Fecha: ${new Date().toLocaleDateString()}
            Emisor: Emisor
            Receptor: Receptor
            Concepto: Concepto
            Base Imponible: 100.00€
            Tasa aplicada: 21%
            Total: 121.00€
        `;
      expect(invoice.toString()).to.equal(expectedOutput);
    });
  });

  describe("DiscountedInvoice:", () => {
    it("debería calcular el total correctamente", () => {
      const invoice = new DiscountedInvoice("Emisor", "Receptor", "Concepto", 100, 21, 10);
      expect(invoice.getTotal()).to.equal(111); // El descuento sería de 10. 121 - 10.
    });

    it("debería devolver una representación de la factura con descuento en texto", () => {
      const invoice = new DiscountedInvoice("Emisor", "Receptor", "Concepto", 100, 21, 10);
      const expectedOutput = `
              FACTURA CON DESCUENTO
              Fecha: ${new Date().toLocaleDateString()}
              Emisor: Emisor
              Receptor: Receptor
              Concepto: Concepto
              Base Imponible: 100.00€
              Tasa aplicada: 21%
              Descuento: 10%
              Total: 111.00€
          `;
      expect(invoice.toString()).to.equal(expectedOutput);
    });
  });
});