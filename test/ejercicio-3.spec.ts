import "mocha";
import { expect } from "chai";
import * as fs from "fs";
import { RootFileManager, ReadableFile, WriteableFile } from "../src/ejercicio-3/gestor-ficheros";

describe("FileManager", () => {
  describe("RootFileManager", () => {
    const testFilePath = "test.txt";
    const testFileContent = "Test content";

    it("debería leer el contenido de un archivo correctamente", () => {
      fs.writeFileSync(testFilePath, testFileContent, "utf-8");
      const fileManager = new RootFileManager(testFilePath);
      expect(fileManager.readFile()).to.equal(testFileContent);
      fs.unlinkSync(testFilePath);
    });

    it("debería escribir datos en un archivo correctamente", () => {
      const fileManager = new RootFileManager(testFilePath);
      fileManager.writeFile(testFileContent);
      expect(fs.readFileSync(testFilePath, "utf-8")).to.equal(testFileContent);
      fs.unlinkSync(testFilePath);
    });
  });

  describe("ReadableFile", () => {
    const testFilePath = "test.txt";
    const testFileContent = "Test content";

    it("debería leer el contenido de un archivo correctamente", () => {
      fs.writeFileSync(testFilePath, testFileContent, "utf-8");
      const fileManager = new ReadableFile(testFilePath);
      expect(fileManager.readFile()).to.equal(testFileContent);
      fs.unlinkSync(testFilePath);
    });

    it("debería lanzar un error al intentar escribir en un archivo", () => {
      const fileManager = new ReadableFile(testFilePath);
      expect(() => fileManager.writeFile(testFileContent)).to.throw(Error, "No existen permisos de escritura.");
    });
  });

  describe("WriteableFile", () => {
    const testFilePath = "test.txt";
    const testFileContent = "Test content";

    it("debería lanzar un error al intentar leer un archivo", () => {
      const fileManager = new WriteableFile(testFilePath);
      expect(() => fileManager.readFile()).to.throw(Error, "No existen permisos de lectura.");
    });

    it("debería escribir datos en un archivo correctamente", () => {
      const fileManager = new WriteableFile(testFilePath);
      fileManager.writeFile(testFileContent);
      expect(fs.readFileSync(testFilePath, "utf-8")).to.equal(testFileContent);
      fs.unlinkSync(testFilePath);
    });
  });
});