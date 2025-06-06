import { Button } from "../ui/button"
import { Link } from "react-router";

type AccountProps = {
  textButton: string
  texttitle: string
  subTitle: string
  to: string
}

export function Account({ textButton, texttitle, subTitle, to }: AccountProps){
  
  return (
    <div className="w-max p-1.5 py-7 px-14 max-sm:px-6 border-2 border-gray-500 rounded-lg m-auto mt-3">    
      <div className="mb-10">
        <h3 className="mb-0.5 Text-Lg text-gray-200">{texttitle}</h3>
        <span className="Text-Xs text-gray-300 mb-10">{subTitle}</span>
      </div>
      <div>
        <Link to={to}>
          <Button typeSize="lg" typeColor="gray" >{textButton}</Button>
        </Link>
      </div>
    </div>
  )
}         