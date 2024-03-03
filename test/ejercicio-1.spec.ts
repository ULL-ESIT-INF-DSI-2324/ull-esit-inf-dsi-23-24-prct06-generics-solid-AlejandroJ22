import "mocha";
import { expect } from "chai";

// Importar las clases del programa
import { Box, Houseware } from "../src/ejercicio-1/mudanza";

describe("Box y Houseware:", () => {
  // Creamos una caja para usarla en todas las pruebas
  let box: Box<Houseware<{ name: string }>>;

  // Antes de cada prueba, creamos una nueva caja
  beforeEach(() => {
    box = new Box<Houseware<{ name: string }>>();
  });

  it("debería listar los muebles en la caja", () => {
    const mesa = new Houseware({ name: "Mesa" });
    const silla = new Houseware({ name: "Silla" });
    box.addHouseware(mesa);
    box.addHouseware(silla);
    expect(box.listHouseware()).to.deep.equal(["Mesa", "Silla"]);
  });

  it("debería añadir un mueble a la caja", () => {
    const mesa = new Houseware({ name: "Mesa" });
    box.addHouseware(mesa);
    expect(box.listHouseware()).to.deep.equal(["Mesa"]);
  });

  it("debería eliminar un mueble de la caja", () => {
    const mesa = new Houseware({ name: "Mesa" });
    const silla = new Houseware({ name: "Silla" });
    box.addHouseware(mesa);
    box.addHouseware(silla);
    box.removeHouseware("Mesa");
    expect(box.listHouseware()).to.deep.equal(["Silla"]);
  });

  it("debería buscar un mueble en la caja", () => {
    const mesa = new Houseware({ name: "Mesa" });
    box.addHouseware(mesa);
    expect(box.searchHouseware("Mesa")).to.equal(true);
    expect(box.searchHouseware("Silla")).to.equal(false);
  });
});