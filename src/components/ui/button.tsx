import trash from "../../assets/icon/trash.svg"
import  ban  from "../../assets/icon/pen-line.svg"

type Props = {
  children?: any
  typeSize?: "base" | "sm" | "md" | "lg" | "xl"
  typeColor?: "black" | "gray"
  onClick?: () => void
  icon?: string;
}

const size ={
  base:"p-2.5 lg:px-6",
  sm: "p-2.5 w-22",
  md: "py-2.5 w-41 lg:w-47",
  lg: "w-86 max-sm:w-73 h-10",
  xl: "py-2.5 w-75 lg:w-96"
}

const color = {
  black: "bg-gray-200 text-gray-600",   
  gray: "bg-gray-500 text-gray-200"
}

export function Button({children, typeSize, typeColor, onClick, icon}: Props){
  if(icon){
    return (
      <button onClick={onClick}>
        <div className="w-7 h-7 p-1.5 rounded-sm hover:bg-gray-500 bg-none cursor-pointer">
          <img src={icon === "ban" ? ban : trash}  />
        </div>
      </button>
    )
  }

  return (
    <div>
      <button type="submit" className={`${typeColor && color[typeColor]} rounded-sm Text-Sm cursor-pointer hover:opacity-80 ${typeSize && size[typeSize]}`} onClick={onClick} >
        {children}
      </button>
    </div>
  )
}
