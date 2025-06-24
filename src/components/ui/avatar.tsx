export function Avatar({ user, ...props }: any) {
  if(user?.avatar === "default.svg"){

    return (
      <>
        <div className="bg-blue-dark w-10 h-10 rounded-full flex justify-center items-center text-gray-600 cursor-pointer" {...props} >
          <span className="uppercase">
            {
              `${user.name.split(" ")[0][0].toUpperCase()}${user.name.split(" ")[1] ? user.name.split(" ")[1][0].toUpperCase() : ""}`
            }
          </span>
        </div>
      </>
    )
  }

  return (
    <>
      <img 
        src={`/public/${user?.avatar}`} 
        alt="foto do usuario" 
        className="w-10 h-10 rounded-full cursor-pointer"
        {...props}
      />
    </>
  )
  
}