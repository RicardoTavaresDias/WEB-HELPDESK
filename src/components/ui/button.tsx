type Props = {
  children: any
  typeSize: "base" | "sm" | "md" | "lg"
  typeColor: "black" | "gray"
  onClick?: () => void
}

const size ={
  base:"p-2.5",
  sm: "p-2.5 w-22",
  md: "py-2.5 w-42",
  lg: "w-86 max-sm:w-73 h-10"
}

const color = {
  black: "bg-gray-200 text-gray-600",
  gray: "bg-gray-500 text-gray-200"
}

export function Button({children, typeSize, typeColor, onClick}: Props){
  return (
    <div>
      <button type="submit" className={`${color[typeColor]} rounded-sm Text-Sm cursor-pointer hover:opacity-80 ${size[typeSize]}`} onClick={onClick} >{children}</button>
    </div>
  )
}