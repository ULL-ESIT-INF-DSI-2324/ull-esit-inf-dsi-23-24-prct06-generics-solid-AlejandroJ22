/**
 * Interfaz de colecciones de cualquier tipo que implementan 
 * las funciones addItem, getItem, removeItem y getNumberOfItems
 */
export interface Collectable<T> {
  addItem(newitem: T): void; // Añade un item al final de la cola.
  getItem(index: number): T; // Devuelve el ultimo item de la cola
  removeItem(): void; // Elimina el último item
  getNumberOfItems(): number; // Devuelve el numero de items en el array
}

/**
 * Interfaz de colecciones en las que hay un metodo search que devuelve un 
 * array del mismo tipo, que el elemento que se busca.
 */
export interface Searchable<T> extends Collectable<T> {
  search(filter: T): T[];
}

/**
 * Clase abstacta de colección de elementos de cualquier tipo en las que se puede buscar un elemento
 */
abstract class SearchableCollection<T> implements Searchable<T> {
  /**
   * 
   * @param searchableCollection array de los elementos
   */
  constructor(public searchableCollection: T[]) {}
  /**
   * Añade el item al final del array.
   * @param newitem item a añadir
   */
  addItem(newitem: T): void {
    this.searchableCollection.push(newitem);
  }
  /**
   * Devuelve un elemento del array según el indice
   * @param index indice
   * @returns elemento en el indice.
   */
  getItem(index: number): T {
    if (index < 0 || index >= this.getNumberOfItems()) {
      console.log("Error, la posición a la que trata de acceder no existe.");
      process.exit(1); // Termina el programa con un código de error.
    }
    return this.searchableCollection[index];
  }
  /**
   * Elimina el último eleemtno del array.
   */
  removeItem(): void {
    this.searchableCollection.pop();
  }
  getNumberOfItems(): number {
    return this.searchableCollection.length;
  }
  abstract search(filter: T): T[];
}

/**
 * Clase de colección de number en las que se puede buscar un elemento
 */
export class NumericSearchableCollection extends SearchableCollection<number>
{
  /**
   * 
   * @param numericSearchableCollection array de number.
   */
  constructor(public numericSearchableCollection: number[]) {
    super(numericSearchableCollection);
  }
  /**
   * Función para buscar coincidencias con un número.
   * @param item numero a buscar.
   * @returns array de number coincidentes.
   */
  search(item: number): number[] {
    let conincidences: number[] = [];
    this.numericSearchableCollection.forEach((element) => {
      if (element === item) {
        conincidences.push(element);
      }
    })
    return conincidences;
  }
}
/**
 * Clase de colección de strings en las que se puede buscar un elemento
 */
export class StringSearchableCollection extends SearchableCollection<string>
{
  /**
   * 
   * @param stringSearchableCollection array de strings
   */
  constructor(public stringSearchableCollection: string[]) {
    super(stringSearchableCollection);
  }
  /**
   * Función que busca cadenas de las que forme parte la 
   * cadena que se le pasa como parametro.
   * @param item cadena a buscar.
   * @returns array con las coincidencias de la substring.
   */
  search(item: string): string[] {
    let conincidences: string[] = [];
    this.stringSearchableCollection.forEach((element) => {
        if (element.toLowerCase().includes(item.toLowerCase())) {
            conincidences.push(element);
        }
    })
    return conincidences;
  }
}

// let myNumericCollection = new NumericSearchableCollection([1, 2, 3, 4]);
// console.log(myNumericCollection.getNumberOfItems());
// console.log(myNumericCollection.search(5));
// console.log(myNumericCollection.addItem(5));
// console.log(myNumericCollection.getNumberOfItems());
// console.log(myNumericCollection.search(5));
// console.log(myNumericCollection.removeItem());
// console.log(myNumericCollection.getNumberOfItems());
// console.log(myNumericCollection.search(5));

// let myStringCollection = new StringSearchableCollection(["desarrollo", "sistemas"]);
// console.log(myStringCollection.getNumberOfItems());
// console.log(myStringCollection.search("desarrollo de sistemas"));
// console.log(myStringCollection.addItem("desarrollo de sistemas"));
// console.log(myStringCollection.getNumberOfItems());
// console.log(myStringCollection.search("desarrollo"));
// console.log(myStringCollection.removeItem());
// console.log(myStringCollection.getNumberOfItems());
// console.log(myStringCollection.search("desarrollo"));