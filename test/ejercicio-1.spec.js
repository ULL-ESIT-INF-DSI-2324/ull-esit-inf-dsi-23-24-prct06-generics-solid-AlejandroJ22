"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
// Importar las clases del programa
const mudanza_1 = require("../src/ejercicio-1/mudanza");
describe("Box y Houseware:", () => {
    // Creamos una caja para usarla en todas las pruebas
    let box;
    // Antes de cada prueba, creamos una nueva caja
    beforeEach(() => {
        box = new mudanza_1.Box();
    });
    it("debería listar los muebles en la caja", () => {
        const mesa = new mudanza_1.Houseware({ name: "Mesa" });
        const silla = new mudanza_1.Houseware({ name: "Silla" });
        box.addHouseware(mesa);
        box.addHouseware(silla);
        (0, chai_1.expect)(box.listHouseware()).to.deep.equal(["Mesa", "Silla"]);
    });
    it("debería añadir un mueble a la caja", () => {
        const mesa = new mudanza_1.Houseware({ name: "Mesa" });
        box.addHouseware(mesa);
        (0, chai_1.expect)(box.listHouseware()).to.deep.equal(["Mesa"]);
    });
    it("debería eliminar un mueble de la caja", () => {
        const mesa = new mudanza_1.Houseware({ name: "Mesa" });
        const silla = new mudanza_1.Houseware({ name: "Silla" });
        box.addHouseware(mesa);
        box.addHouseware(silla);
        box.removeHouseware("Mesa");
        (0, chai_1.expect)(box.listHouseware()).to.deep.equal(["Silla"]);
    });
    it("debería buscar un mueble en la caja", () => {
        const mesa = new mudanza_1.Houseware({ name: "Mesa" });
        box.addHouseware(mesa);
        (0, chai_1.expect)(box.searchHouseware("Mesa")).to.equal(true);
        (0, chai_1.expect)(box.searchHouseware("Silla")).to.equal(false);
    });
});
