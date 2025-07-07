export function currency(value: string ): string{
  // Remove tudo que não for número
  const numeric = value.replace(/\D/g, "")

   // Divide por 100 para ter centavos Number(numeric) / 100
  const iscurrency = Number(numeric)

  // Formata para BRL
  const convert = iscurrency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return convert
}
