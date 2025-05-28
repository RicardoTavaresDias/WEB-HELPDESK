type Props = {
  children: string
  classname?: string
}

export function Button({children, classname = "bg-gray-200 text-gray-600" }: Props){
  return (
    <div>
      <button type="submit" className={`w-86 max-sm:w-73 h-10 rounded-sm Text-Sm cursor-pointer hover:opacity-80 ${classname}`} >{children}</button>
    </div>
  )
}