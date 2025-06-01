import { Button } from "../ui/button"
import { Link } from "react-router"
import plus from "../../assets/icon/plus.svg"
import arrowLeft from "../../assets/icon/arrow-left.svg"

type Props = {
   children?: any
   header: string
   type?: "twoButtonHeader"
   link: string
}

export function DetailsHeaderButton({children, header, type, link}: Props){
    if(type){
      return  (
        <>
          <div className="flex justify-between items-center m-auto max-sm:flex-col max-sm:items-start">
            <div className="flex flex-col gap-3 ml-2">
              <Link to={link} className="flex items-center gap-1.5">
                <img className="w-3.5 h-3.5" src={arrowLeft} />
                <span className="text-gray-300 Text-Xs">Voltar</span>
              </Link>
              <span className="max-sm:hidden Text-Xl text-blue-dark text-xl font-bold">{header}</span>
              <span className="lg:hidden text-xl font-bold text-blue-dark">{header}</span>
            </div>
            {children}
          </div>
        </>
      )
    }
    
    return (
      <>
        <div className="flex justify-between items-center m-auto">
          <span className="max-sm:hidden Text-Xl text-blue-dark">{header}</span>
          <span className="lg:hidden text-xl font-semibold text-blue-dark">{header}</span>
          <Button typeSize="base" typeColor="black">
            <Link to={link}>
              <div className="flex items-center gap-2 lg:mx-1">
                <img src={plus} className="w-4 h-4" />
                <span className="max-sm:hidden">Novo</span>
              </div>
            </Link>
          </Button>
        </div>
      </>
    )
  
}