import circleAlert from "../../assets/icon/circle-alert.svg"

type InputProps = {
  type: string
  placeholder?: string
  label: string
  error?: string
  onChange?: any
  value?: string
  textLabel?: string
}

export function Input({ type, placeholder, label, error, onChange, value, textLabel}: InputProps){
  return (
    <div className="group flex flex-col mt-4">
      <label className={`Text-Xxs group-focus-within:text-blue-base ${error ? "text-feedback-danger" : "text-gray-300"}`}>{label}</label>
      <input type={type} className="border-b-1 border-gray-500 w-86 max-sm:w-73 Heading-Md my-2 pb-2 outline-none group-focus-within:border-blue-base" placeholder={placeholder}  onChange={onChange} value={value} />
      {error &&
        <div className="flex gap-1">
          <img src={circleAlert} className="w-4 h-4"/>
          <span className="Text-Xs text-feedback-danger" >{error}</span>
        </div>
      } 
      {label &&
        <span className="Text-Xs text-gray-400" >{textLabel}</span>
      }
    </div>
  )
}