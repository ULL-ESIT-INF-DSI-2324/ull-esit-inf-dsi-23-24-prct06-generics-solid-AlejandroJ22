import { Houseware, Box } from "./mudanza";

// Ejemplo de uso
const box = new Box<Houseware<{ name: string }>>(); // Crear una caja genérica

// Añadir algunos enseres a la caja
const mesa = new Houseware({ name: "Mesa" });
const silla = new Houseware({ name: "Silla" });
const nevera = new Houseware({ name: "Nevera" });

box.addHouseware(mesa);
box.addHouseware(silla);
box.addHouseware(nevera);

// Listar enseres en la caja
console.log(box.listHouseware());

// Buscar un enser en la caja
if (box.searchHouseware("Mesa")) {
  console.log("Encontrado");
} else {
  console.log("El enser no se encontró.");
}

// Eliminar un enser de la caja
box.removeHouseware("Mesa");
console.log(box.listHouseware());