import { Button } from "../ui/button"
import { useNavigate } from "react-router";

type Props = {
  label: string
  h3: string
  span: string
  path: string
}

export function Account({ label, h3, span, path }: Props){
  const navigate = useNavigate()
  
  return (
    <div className="w-max p-1.5 py-7 px-14 max-sm:px-6 border-2 border-gray-500 rounded-lg m-auto mt-3">    
      <div className="mb-10">
        <h3 className="mb-0.5 Text-Lg text-gray-200">{h3}</h3>
        <span className="Text-Xs text-gray-300 mb-10">{span}</span>
      </div>
      <div>
        <Button type="lg" typeColor="gray" onClick={() => path && navigate(path)} >{label}</Button>
      </div>
    </div>
  )
}         