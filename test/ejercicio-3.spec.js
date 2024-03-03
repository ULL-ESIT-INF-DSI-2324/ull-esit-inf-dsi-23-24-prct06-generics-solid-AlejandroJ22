"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const fs = require("fs");
const gestor_ficheros_1 = require("../src/ejercicio-3/gestor-ficheros");
describe("FileManager", () => {
    describe("RootFileManager", () => {
        const testFilePath = "test.txt";
        const testFileContent = "Test content";
        it("debería leer el contenido de un archivo correctamente", () => {
            fs.writeFileSync(testFilePath, testFileContent, "utf-8");
            const fileManager = new gestor_ficheros_1.RootFileManager(testFilePath);
            (0, chai_1.expect)(fileManager.readFile()).to.equal(testFileContent);
            fs.unlinkSync(testFilePath);
        });
        it("debería escribir datos en un archivo correctamente", () => {
            const fileManager = new gestor_ficheros_1.RootFileManager(testFilePath);
            fileManager.writeFile(testFileContent);
            (0, chai_1.expect)(fs.readFileSync(testFilePath, "utf-8")).to.equal(testFileContent);
            fs.unlinkSync(testFilePath);
        });
    });
    describe("ReadableFile", () => {
        const testFilePath = "test.txt";
        const testFileContent = "Test content";
        it("debería leer el contenido de un archivo correctamente", () => {
            fs.writeFileSync(testFilePath, testFileContent, "utf-8");
            const fileManager = new gestor_ficheros_1.ReadableFile(testFilePath);
            (0, chai_1.expect)(fileManager.readFile()).to.equal(testFileContent);
            fs.unlinkSync(testFilePath);
        });
        it("debería lanzar un error al intentar escribir en un archivo", () => {
            const fileManager = new gestor_ficheros_1.ReadableFile(testFilePath);
            (0, chai_1.expect)(() => fileManager.writeFile(testFileContent)).to.throw(Error, "No existen permisos de escritura.");
        });
    });
    describe("WriteableFile", () => {
        const testFilePath = "test.txt";
        const testFileContent = "Test content";
        it("debería lanzar un error al intentar leer un archivo", () => {
            const fileManager = new gestor_ficheros_1.WriteableFile(testFilePath);
            (0, chai_1.expect)(() => fileManager.readFile()).to.throw(Error, "No existen permisos de lectura.");
        });
        it("debería escribir datos en un archivo correctamente", () => {
            const fileManager = new gestor_ficheros_1.WriteableFile(testFilePath);
            fileManager.writeFile(testFileContent);
            (0, chai_1.expect)(fs.readFileSync(testFilePath, "utf-8")).to.equal(testFileContent);
            fs.unlinkSync(testFilePath);
        });
    });
});
