type Props = {
  children: any
  isActive?: boolean
  type?: "read"
  onclick?: () => void
}

export function ButtonTime({children, isActive, type, onclick}: Props){

  if(isActive){
    return (
      <button className="cursor-pointer" onClick={onclick} >
        <div className="bg-blue-base p-2 rounded-2xl w-14 h-7 flex justify-center items-center text-gray-600 Text-Xs text-center">
          {children}
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
    <button className="cursor-pointer" onClick={onclick}>
      <div className="border border-gray-500 p-1.5 w-14 h-7 flex justify-center items-center rounded-2xl text-gray-200 Text-Xs cursor-pointer text-center hover:bg-gray-500" >
        {children}
      </div>
    </button>
  )
}