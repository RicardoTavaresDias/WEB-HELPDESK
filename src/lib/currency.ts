type currency = {
  coinFormatCents?: string 
  formatPriceInput?: string 
}

export function currency({ coinFormatCents, formatPriceInput }: currency): string{

  if(coinFormatCents) {
    const format = new Intl.NumberFormat("pt-BR", {
      style: 'currency',
      currency: "BRL"
    }).format(Number(coinFormatCents))

    return format
  }

  // Remove tudo que não for número
  const numeric = formatPriceInput?.replace(/\D/g, "")

  // Divide por 100 para ter centavos Number(numeric) / 100
  const iscurrency =  Number(numeric) / 100

  const convert = iscurrency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return convert
}