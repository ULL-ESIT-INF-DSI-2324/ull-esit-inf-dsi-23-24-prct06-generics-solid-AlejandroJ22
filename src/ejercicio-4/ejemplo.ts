import {
  Printable,
  Scannable,
  PrintableScannable,
} from "./impresoras-escaneres";

// Ejemplo de uso

// Client code
const printer = new Printable();
// Printing
printer.print();

const scanner = new Scannable();
// Scanning
scanner.scan();

const printerScanner = new PrintableScannable();
// Printing
printer.print();
// Scanning
scanner.scan();