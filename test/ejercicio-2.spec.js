"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const facturacion_basica_1 = require("../src/ejercicio-2/facturacion-basica");
const facturacion_descuento_1 = require("../src/ejercicio-2/facturacion-descuento");
describe("Facturación básica:", () => {
    describe("SimpleInvoice:", () => {
        it("debería calcular el total correctamente", () => {
            const invoice = new facturacion_basica_1.SimpleInvoice("Emisor", "Receptor", "Concepto", 100, 21);
            (0, chai_1.expect)(invoice.getTotal()).to.equal(121);
        });
        it("debería devolver una representación de la factura en texto", () => {
            const invoice = new facturacion_basica_1.SimpleInvoice("Emisor", "Receptor", "Concepto", 100, 21);
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
            (0, chai_1.expect)(invoice.toString()).to.equal(expectedOutput);
        });
    });
    describe("DiscountedInvoice:", () => {
        it("debería calcular el total correctamente", () => {
            const invoice = new facturacion_descuento_1.DiscountedInvoice("Emisor", "Receptor", "Concepto", 100, 21, 10);
            (0, chai_1.expect)(invoice.getTotal()).to.equal(111); // El descuento sería de 10. 121 - 10.
        });
        it("debería devolver una representación de la factura con descuento en texto", () => {
            const invoice = new facturacion_descuento_1.DiscountedInvoice("Emisor", "Receptor", "Concepto", 100, 21, 10);
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
            (0, chai_1.expect)(invoice.toString()).to.equal(expectedOutput);
        });
    });
});
