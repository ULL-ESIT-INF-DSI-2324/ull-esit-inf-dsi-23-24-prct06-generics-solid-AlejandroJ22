import * as fs from "fs";

/**
 * Interfaz de un gestor de archivos.
 */
interface FileManagerInterface {
  /**
   * Lee el contenido del archivo.
   * @returns El contenido del archivo como una cadena de texto.
   */
  readFile(): string;

  /**
   * Escribe datos en el archivo.
   * @param data Los datos a escribir en el archivo.
   */
  writeFile(data: string): void;
}

/**
 * Clase base abstracta para la gestión de archivos.
 * Implementa la interfaz FileManagerInterface.
 */
abstract class FileManager implements FileManagerInterface {
  constructor(protected filePath: string) {}

  abstract readFile(): string;
  abstract writeFile(data: string): void;
}

/**
 * Gestor de archivos con permisos completos de lectura y escritura.
 * Hereda de FileManager.
 */
export class RootFileManager extends FileManager {
  constructor(filePath: string) {
    super(filePath);
  }

  /**
   * Lee el contenido del archivo.
   * @returns El contenido del archivo como una cadena de texto.
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      throw new Error("Error al leer el archivo:");
    }
  }

  /**
   * Escribe datos en el archivo.
   * @param data Los datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      throw new Error("Error al escribir en el archivo:");
    }
  }
}

/**
 * Gestor de archivos con permisos de solo lectura.
 * Hereda de FileManager.
 */
export class ReadableFile extends FileManager {
  constructor(filePath: string) {
    super(filePath);
  }

  /**
   * Lee el contenido del archivo.
   * @returns El contenido del archivo como una cadena de texto.
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      throw new Error("Error al leer el archivo:");
    }
  }

  /**
   * Escribe datos en el archivo.
   * @throws Error ya que no hay permisos de escritura.
   */
  public writeFile(data: string): void {
    throw new Error("No existen permisos de escritura.");
  }
}

/**
 * Gestor de archivos con permisos de solo escritura.
 * Hereda de FileManager.
 */
export class WriteableFile extends FileManager {
  constructor(filePath: string) {
    super(filePath);
  }

  /**
   * Lee el contenido del archivo.
   * @throws Error ya que no hay permisos de lectura.
   */
  public readFile(): string {
    throw new Error("No existen permisos de lectura.");
  }

  /**
   * Escribe datos en el archivo.
   * @param data Los datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      throw new Error("Error al escribir en el archivo:");
    }
  }
}
