import type { ButtonHTMLAttributes, ElementType } from "react"

type VariantProps = {
  children?: React.ReactNode,
  icon?: ElementType
  typeColor: "black" | "gray" | "hoverGray" | "none"
  typeSize: "base" | "xxs" | "xs" | "md" | "lg" | "llg" | "xl"
} & ButtonHTMLAttributes<HTMLButtonElement>

const variant = {
  size: {
    base: " py-3 w-full rounded-md justify-center",
    xxs: " p-1.5 rounded-md", //botão dos icons escrita e exclusão
    xs: " py-3 max-sm:py-2.5 px-4 max-sm:px-3 rounded-md", // botão plus
    md: " py-3 px-5 rounded-md max-sm:px-6.5", // botão cancelar e salvar e botões status dos chamados admin
    lg: " py-3 px-15 max-sm:px-10 rounded-md", // botões duplos modal cancelar e excluir
    llg: " py-3 px-8 max-sm:px-15 rounded-md", // botões duplos edição cancelar e salva na pagina admin tecnico
    xl: " lg:px-43 px-35 py-3 rounded-md" // botão grande salvar Modal unico
  },
  typeColor: {
    gray: " bg-gray-500 text-gray-200",
    black: " bg-gray-200 text-gray-600",
    hoverGray: " hover:bg-gray-500 cursor-pointer",
    none: ""
  }

}

export function UiButton({children, typeColor, typeSize, color = "#535964", icon: Icon, ...props}: VariantProps){
  return (
    <>
      <button className={
        "Text-Sm flex items-center gap-1.5 cursor-pointer hover:shadow-lg/15" + 
          variant.typeColor[typeColor] + 
          variant.size[typeSize] 
          }
          {...props}
      >
        {Icon && <Icon className="w-4.5 h-4.5" color={color} />}
        {children}
      </button>
    </>
  )
}