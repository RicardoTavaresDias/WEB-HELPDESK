import { UiButton } from "./UiButton"

type FormProps = {
  children: React.ReactNode
  textTitle: string
  subtitle: string
  textButton: string
  isLoading: boolean
}

export function Form({ children, textTitle, subtitle, textButton, isLoading }: FormProps){

  return (
    <div className="w-full p-1.5 py-7 px-7 max-sm:px-6 border-2 border-gray-500 rounded-lg m-auto">
      <div className="mb-5">
        <h3 className="mb-0.5 Text-Lg text-gray-200">{textTitle}</h3>
        <span className="Text-Xs text-gray-300 mb-10">{subtitle}</span>
      </div>
      <div className="">
        {children}
      </div>
      <div className="mt-10">
        <UiButton type="submit" typeSize="base" typeColor="black" disabled={isLoading} >{textButton}</UiButton>
      </div>
    </div>
  )
}