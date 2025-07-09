type currency = {
  price?: string
  formatPrice?: string
}

export function currency({ price, formatPrice}: currency): string{

  // Remove tudo que não for número
  const numeric = price ? price.replace(/\D/g, "") : formatPrice?.replace(/\D/g, "")

  // Divide por 100 para ter centavos Number(numeric) / 100
  const iscurrency = price ? Number(numeric) : Number(numeric) / 100

  const convert = iscurrency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return convert
}