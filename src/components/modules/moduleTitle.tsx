import { Link } from "react-router"
import arrowLeft from "../../assets/icon/arrow-left.svg"

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
            <Link to={to} className="flex items-center gap-1.5">
              <img className="w-3.5 h-3.5" src={arrowLeft} />
              <span className="text-gray-300 Text-Xs">Voltar</span>
            </Link>
          } 
          <span className="max-sm:hidden Text-Xl text-blue-dark text-xl font-bold">{title}</span>
          <span className="lg:hidden text-xl font-bold text-blue-dark">{title}</span>
        </div>

        <div className={`flex gap-2 lg:justify-end justify-center items-center ${isButton || "max-sm:mt-4"} max-sm:justify-center`}>
          {children}
        </div>
      </div>
    </>
  )
}