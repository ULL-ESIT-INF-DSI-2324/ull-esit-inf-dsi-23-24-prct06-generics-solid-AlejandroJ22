/**
 * Interfaz para representar cualquier tipo de mueble.
 * @note Por ahora solo con un atributo string.
 */
interface HousewareInterface {
  name: string;
}

/**
 * Interfaz para representar una caja que puede almacenar muebles
 * de cualquier tipo.
 */
interface BoxInterface<T extends Houseware<any>> {
  addHouseware(houseware: T): void;
  removeHouseware(name: string): void;
  listHouseware(): string[];
  searchHouseware(name: string): boolean;
}

/**
 * Clase genérica Houseware que puede representar cualquier tipo de mueble.
 */
class Houseware<T extends HousewareInterface> {
  /**
   * Crea una nueva instancia de la clase Houseware.
   * @param houseware El mueble.
   */
  constructor(public houseware: T) {}
}

/**
 * Clase Box que puede almacenar muebles de cualquier tipo.
 */
class Box<T extends Houseware<any>> {
  private housewares: T[];

  /**
   * Crea una nueva instancia de la clase Box.
   */
  constructor() {
    this.housewares = [];
  }

  /**
   * Añade un mueble a la caja.
   * @param houseware El mueble a añadir.
   */
  addHouseware(houseware: T): void {
    this.housewares.push(houseware);
  }

  /**
   * Elimina un mueble de la caja por su nombre.
   * @param name El nombre del mueble a eliminar.
   */
  removeHouseware(name: string): void {
    this.housewares = this.housewares.filter(
      (item) => item.houseware.name !== name,
    );
  }

  /**
   * Lista todos los muebles de la caja por consola.
   * @note Se guardan en un array y luego se muestran desde dicho array por preferencia personal.
   */
  listHouseware(): string[] {
    console.log("Enseres en la caja:");
    let housewares_array: string[] = [];
    this.housewares.forEach((item) =>
      housewares_array.push(item.houseware.name),
    );
    return housewares_array;
  }

  /**
   * Busca un mueble en la caja por su nombre.
   * @param name El nombre del mueble a buscar.
   * @returns El mueble encontrado o undefined si no se encuentra.
   */
  searchHouseware(name: string): boolean {
    if (this.housewares.find((item) => item.houseware.name === name)) {
      return true;
    } else return false;
  }
}

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