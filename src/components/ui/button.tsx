import { useNavigate } from "react-router";

type Props = {
  children: any
  type: "sm" | "md" | "lg"
  path?: string
  typeColor: "black" | "gray"
}

const size ={
  sm: "w-30 h-10",
  md: "w-40 h-10",
  lg: "w-86 max-sm:w-73 h-10"
}

const color = {
  black: "bg-gray-200 text-gray-500",
  gray: "bg-gray-500 text-gray-200"
}

export function Button({children, type, path, typeColor}: Props){

  const navigate = useNavigate()

  return (
    <div>
      <button type="submit" className={`${color[typeColor]} rounded-sm Text-Sm cursor-pointer hover:opacity-80 ${size[type]}`} onClick={() => path && navigate(path)}>{children}</button>
    </div>
  )
}