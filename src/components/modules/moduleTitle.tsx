import { IconArrowLeft } from "@/assets/icon/iconArrowLeft"

type TitleProps = {
  children?: React.ReactNode
  to?: string
  title: string
  isButton?: Boolean
}

export function ModuleTitle({children, to, title, isButton}: TitleProps){
  return (
    <>
      <div className={`flex justify-between lg:items-center ${isButton || "max-sm:flex-col"} ${isButton && "items-center"}`}>
        <div className="flex flex-col gap-3">
          {to &&
            <IconArrowLeft to={to} >Voltar</IconArrowLeft>
          } 
          <span className="max-sm:hidden Text-Xl text-blue-dark text-xl font-bold mt-1">{title}</span>
          <span className="lg:hidden text-xl font-bold text-blue-dark">{title}</span>
        </div>

        <div className={`flex gap-2 lg:justify-end justify-center items-center ${isButton || "max-sm:mt-4"} max-sm:justify-center`}>
          {children}
        </div>
      </div>
    </>
  )
}