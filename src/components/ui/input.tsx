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
      <label className={"font-display text-gray-300 text-sm font-bold uppercase group-focus-within:text-blue-base"}>{label}</label>
      <input type={type} className="border-b-1 border-gray-500 w-86 max-sm:w-73 text-base font-normal my-2 pb-2 outline-none group-focus-within:border-blue-base" placeholder={placeholder}  onChange={onChange} value={value} />
      <span className="text-xs text-gray-400 font-normal font-display" >{error}</span>
    </div>
  )
}