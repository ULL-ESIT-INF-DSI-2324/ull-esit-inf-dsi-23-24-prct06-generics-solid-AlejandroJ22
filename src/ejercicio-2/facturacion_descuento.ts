import { Invoice } from "./facturacion_basica";

/**
 * Subclase con un atributo descuento.
 */
export class DiscountedInvoice extends Invoice {
    private discount: number;
  
    /**
     * Crea una instancia de factura con descuento.
     * @param issuer Identificación completa del emisor.
     * @param receiver Identificación del receptor.
     * @param concept Descripción del concepto.
     * @param baseAmount Base imponible sobre la que girarán los impuestos o retenciones.
     * @param taxRate Tipo de IVA aplicado.
     * @param discount Porcentaje de descuento aplicado.
     */
    constructor(
      issuer: string,
      receiver: string,
      concept: string,
      baseAmount: number,
      taxRate: number,
      discount: number,
    ) {
      super(issuer, receiver, concept, baseAmount, taxRate);
      this.discount = discount;
    }
  
    /**
     * Implementación del método para calcular el total de la factura con descuento.
     * @returns Total de la factura con descuento.
     */
    getTotal(): number {
      const taxAmount = this.baseAmount * (this.taxRate / 100);
      const discountedAmount = this.baseAmount * (this.discount / 100);
      return this.baseAmount - discountedAmount + taxAmount;
    }
  
    /**
     * Implementación del método para obtener la representación de la factura con descuento en forma de texto.
     * @returns Representación en texto de la factura con descuento.
     */
    toString(): string {
      return `
              FACTURA CON DESCUENTO
              Fecha: ${this.date.toLocaleDateString()}
              Emisor: ${this.issuer}
              Receptor: ${this.receiver}
              Concepto: ${this.concept}
              Base Imponible: ${this.baseAmount.toFixed(2)}€
              Tasa aplicada: ${this.taxRate}%
              Descuento: ${this.discount}%
              Total: ${this.getTotal().toFixed(2)}€
          `;
    }
  }