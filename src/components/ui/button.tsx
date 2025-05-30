type Props = {
  children: any
  type: "sm" | "md" | "lg"
  typeColor: "black" | "gray"
  onClick?: () => void
}

const size ={
  sm: "p-2.5",
  md: "p-2.5",
  lg: "w-86 max-sm:w-73 h-10"
}

const color = {
  black: "bg-gray-200 text-gray-500",
  gray: "bg-gray-500 text-gray-200"
}

export function Button({children, type, typeColor, onClick}: Props){
  return (
    <div>
      <button type="submit" className={`${color[typeColor]} rounded-sm Text-Sm cursor-pointer hover:opacity-80 ${size[type]}`} onClick={onClick} >{children}</button>
    </div>
  )
}

// () => path && navigate(path)