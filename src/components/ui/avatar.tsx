import type { UserSession } from "@/types/users"

type AvatarType = {
  user: UserSession
  size?: string
  onClick?: () => void 
}

export function Avatar({ user, size = "w-10 h-10", onClick }: AvatarType) {
  if(!user) return null
  const firstName = user.name.split(" ")[0]
  const secondName = user.name.split(" ")[1] || null

  if(user?.avatar === "default.svg"){
    return (
      <>
        <div className={`bg-blue-dark ${size} rounded-full flex justify-center items-center text-gray-600 cursor-pointer`} onClick={onClick} >
          <span className="uppercase">
            {`${firstName[0]}${secondName ? secondName[0] : ""}`}
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
        className={`${size} rounded-full cursor-pointer`}
        onClick={onClick}
      />
    </>
  )
}