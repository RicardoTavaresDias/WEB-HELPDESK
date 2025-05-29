import { useNavigate } from "react-router";

type Props = {
  children: string
  classname?: string
  path?: string
}

export function Button({children, classname = "bg-gray-200 text-gray-600", path }: Props){

  const navigate = useNavigate()

  return (
    <div>
      <button type="submit" className={`w-86 max-sm:w-73 h-10 rounded-sm Text-Sm cursor-pointer hover:opacity-80 ${classname}`} onClick={() => path && navigate(path)}>{children}</button>
    </div>
  )
}