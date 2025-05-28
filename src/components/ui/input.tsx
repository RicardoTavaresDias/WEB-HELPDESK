type Props = {
  type: string
  placeholder: string
  label: string
  error?: string
  onChange: any
  value: string
}

export function Input({ type, placeholder, label, error, onChange, value}: Props){
  return (
    <div className="group flex flex-col mt-4">
      <label className={" text-gray-300 Text-Xxs group-focus-within:text-blue-base"}>{label}</label>
      <input type={type} className="border-b-1 border-gray-500 w-86 max-sm:w-73 Heading-Md my-2 pb-2 outline-none group-focus-within:border-blue-base" placeholder={placeholder}  onChange={onChange} value={value} />
      <span className="Text-Xs text-gray-400" >{error}</span>
    </div>
  )
}