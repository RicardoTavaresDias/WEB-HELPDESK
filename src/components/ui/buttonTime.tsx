import { IconX } from "../../assets/icon/iconX.tsx"

type ButtonTimeProps = {
  children: React.ReactNode
  isActive?: boolean
  type?: "read"
  onClick?: () => void
}

export function ButtonTime({children, isActive, type, onClick}: ButtonTimeProps){

  if(isActive){
    return (
      <button className="cursor-pointer" onClick={onClick} >
        <div className="bg-blue-base p-2 rounded-2xl w-17 h-7 flex justify-center items-center text-gray-600 Text-Xs text-center">
          {children}
          <IconX className="w-3.5 h-3.5 ml-1.5 fill-gray-600"/>
        </div>
      </button>
    )
  }

  if(type === "read"){
    return (
      <div className="border border-gray-500 w-14 h-7 flex justify-center items-center rounded-2xl text-gray-400 Text-Xs text-center" >
        {children}
      </div>
    )
  }

  return (
    <button className="cursor-pointer" onClick={onClick}>
      <div className="border border-gray-500 p-1.5 w-14 h-7 flex justify-center items-center rounded-2xl text-gray-200 Text-Xs cursor-pointer text-center hover:bg-gray-500" >
        {children}
      </div>
    </button>
  )
}