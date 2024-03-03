import { RootFileManager, ReadableFile, WriteableFile } from "./gestor-ficheros";

// Ruta del archivo
const filePath = "test.txt";

// Crear un gestor de archivos con permisos completos
const rootFileManager = new RootFileManager(filePath);

// Escribir en el archivo
rootFileManager.writeFile("Hola, mundo!");

// Leer el contenido del archivo
const content1 = rootFileManager.readFile();
console.log("Contenido del archivo con permisos completos:", content1);

// Crear un gestor de archivos con permisos de solo lectura
const readableFile = new ReadableFile(filePath);

// Leer el contenido del archivo
const content2 = readableFile.readFile();
console.log("Contenido del archivo con permisos de solo lectura:", content2);

// Crear un gestor de archivos con permisos de solo escritura
const writeableFile = new WriteableFile(filePath);

// Escribir en el archivo
writeableFile.writeFile("¡Hola de nuevo!");

// Leer el contenido del archivo
const content3 = writeableFile.readFile();
console.log("Contenido del archivo con permisos de solo escritura:", content3);