import { SimpleInvoice } from "./facturacion_basica";
import { DiscountedInvoice } from "./facturacion_descuento";

// Ejemplo de uso
const simple_invoice = new SimpleInvoice(
    "Empresa Emisora S.L.",
    "Cliente Receptor S.L.",
    "Venta de productos",
    1000,
    21
  );

const discount_invoice = new DiscountedInvoice(
  "Empresa Emisora S.L.",
  "Cliente Receptor S.L.",
  "Venta de productos",
  1000,
  21,
  20,
);

console.log(simple_invoice.toString());
console.log(discount_invoice.toString());