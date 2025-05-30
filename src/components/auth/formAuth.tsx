import { Button } from "../ui/button"

type Props = {
  children: any
  textTitle: string
  textSpan: string
  label: string
}

export function FormAuth({ children, textTitle, textSpan, label }: Props){
  return (
    <div className="w-max p-1.5 py-7 px-14 max-sm:px-6 border-2 border-gray-500 rounded-lg m-auto">
      <div className="mb-10">
        <h3 className="mb-0.5 Text-Lg text-gray-200">{textTitle}</h3>
        <span className="Text-Xs text-gray-300 mb-10">{textSpan}</span>
      </div>
      <div className="">
        {children}
      </div>
      <div className="mt-10">
        <Button type="lg" typeColor="black" >{label}</Button>
      </div>
    </div>
  )
}