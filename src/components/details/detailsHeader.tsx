import arrowLeft from "../../assets/icon/arrow-left.svg"
import { Link } from "react-router" 

type Props = {
  children: any
  to: string
  title: string
}

export function DetailsHeader({children, to, title}: Props){
  return (
    <>
      <div className="flex justify-between lg:items-center max-sm:flex-col">
        <div className="flex flex-col gap-3">
          <Link to={to} className="flex items-center gap-1.5">
            <img className="w-3.5 h-3.5" src={arrowLeft} />
            <span className="text-gray-300 Text-Xs">Voltar</span>
          </Link>
          <span className="max-sm:hidden Text-Xl text-blue-dark text-xl font-bold">{title}</span>
          <span className="lg:hidden text-xl font-bold text-blue-dark">{title}</span>
        </div>

        <div className="flex gap-2 justify-end items-center max-sm:mt-4">
          {children}
        </div>
      </div>
    </>
  )
}