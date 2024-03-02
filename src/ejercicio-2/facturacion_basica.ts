/**
 * Interfaz para una factura.
 */
interface InvoiceInterface {
  getTotal(): number;
  toString(): string;
}

/**
 * Clase abstracta que representa una factura.
 */
export abstract class Invoice implements InvoiceInterface {
  protected date: Date;
  protected issuer: string;
  protected receiver: string;
  protected concept: string;
  protected baseAmount: number;
  protected taxRate: number;

  /**
   * Crea una instancia de factura.
   * @param issuer Identificación del emisor.
   * @param receiver Identificación del receptor.
   * @param concept Descripción del concepto.
   * @param baseAmount Base imponible sobre la que girarán los impuestos o retenciones.
   * @param taxRate Tasa aplicada.
   */
  constructor(
    issuer: string,
    receiver: string,
    concept: string,
    baseAmount: number,
    taxRate: number,
  ) {
    this.date = new Date();
    this.issuer = issuer;
    this.receiver = receiver;
    this.concept = concept;
    this.baseAmount = baseAmount;
    this.taxRate = taxRate;
  }

  /**
   * Método abstracto para calcular el total de la factura.
   * Las subclases deben implementar este método.
   * @returns Total de la factura.
   */
  abstract getTotal(): number;

  /**
   * Obtiene la representación de la factura en forma de texto.
   * @returns Representación en texto de la factura.
   */
  abstract toString(): string;
}

/**
 * Subclase más simple posible, no se añaden atributos.
 */
export class SimpleInvoice extends Invoice {
  /**
   * Crea una instancia de factura simple.
   * @param issuer Identificación completa del emisor.
   * @param receiver Identificación del receptor.
   * @param concept Descripción del concepto.
   * @param baseAmount Base imponible sobre la que girarán los impuestos o retenciones.
   * @param taxRate Tasa aplicada.
   */
  constructor(
    issuer: string,
    receiver: string,
    concept: string,
    baseAmount: number,
    taxRate: number,
  ) {
    super(issuer, receiver, concept, baseAmount, taxRate);
  }

  /**
   * Implementación del método para calcular el total de la factura según la tasa aplicada.
   * @returns Total de la factura.
   */
  getTotal(): number {
    const taxAmount = this.baseAmount * (this.taxRate / 100);
    return this.baseAmount + taxAmount;
  }

  /**
   * Implementación del método para obtener la representación de la factura con descuento en forma de texto.
   * @returns Representación en texto de la factura con descuento.
   */
  toString(): string {
    return `
            FACTURA
            Fecha: ${this.date.toLocaleDateString()}
            Emisor: ${this.issuer}
            Receptor: ${this.receiver}
            Concepto: ${this.concept}
            Base Imponible: ${this.baseAmount.toFixed(2)}€
            Tasa aplicada: ${this.taxRate}%
            Total: ${this.getTotal().toFixed(2)}€
        `;
  }
}
