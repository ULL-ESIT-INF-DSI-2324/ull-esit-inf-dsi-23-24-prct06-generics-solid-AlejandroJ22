/**
 * Interfaz que representa un dispositivo capaz de imprimir y escanear
 */
interface PrinterScannerInterface {
  /**
   * Method to print.
   */
  print(): void;

  /**
   * Method to scan.
   */
  scan(): void;
}

/**
 * Clase abstracta que representa un dispositivo de impresora y escáner.
 * Las clases que amplían esta clase abstracta deben proporcionar implementación
 * para los métodos de impresión y escaneo.
 */
abstract class PrinterScanner implements PrinterScannerInterface {
  /**
   * Método abstracto para imprimir.
   * Las subclases deben proporcionar implementación para la impresión.
   */
  abstract print(): void;

  /**
   * Método abstracto para escanear.
   * Las subclases deben proporcionar implementación para el escaneo.
   */
  abstract scan(): void;
}

/**
 * Clase que representa un dispositivo de impresora.
 * Implementa la interfaz PrinterScanner.
 */
export class Printable extends PrinterScanner {
  /**
   * Method to print.
   */
  print(): void {
    console.log("Printing...");
  }

  /**
   * Método para escanear.
   * No puede escanear.
   */
  scan(): void {
    throw new Error("Printer cannot scan.");
  }
}

/**
 * Clase que representa un dispositivo de escáner.
 * Implementa la interfaz PrinterScanner.
 */
export class Scannable extends PrinterScanner {
  /**
   * Método para imprimir.
   * No puede imprimir.
   */
  print(): void {
    throw new Error("Scanner cannot print.");
  }

  /**
   * Método para escánear.
   */
  scan(): void {
    console.log("Scanning...");
  }
}

/**
 * Clase que puede imprimir y escanear.
 */
export class PrintableScannable extends PrinterScanner {
  /**
   * Método para imprimir.
   */
  print(): void {
    console.log("Printing...");
  }

  /**
   * Método para escanear.
   */
  scan(): void {
    console.log("Scanning...");
  }
}