import circleUser from "../../assets/icon/circle-user.svg"
import logOut from "../../assets/icon/log-out.svg"

type Props = {
  classmobile?: string
  classLg?: string
}

export function MenuLogOut({ classLg, classmobile }: Props){
  return (
    <>
      <div className={`${classmobile} ${classLg} absolute z-50 scale-y-0 group-focus:scale-y-100 origin-top duration-200 bg-gray-100 flex flex-col gap-3 rounded-xl p-4`}>
        
        <div className="flex"> 
          <span className="Text-Xxs text-gray-400">opções</span>
        </div>

        <div>
          <ul className="mt-4 flex flex-col gap-1">
            <li className="flex items-center gap-3 Text-Sm text-gray-600 cursor-pointer rounded-md  h-11 hover:bg-gray-200">
              <img src={circleUser} className="ml-3 w-5 h-5" />
              <a href="#" className="">Perfil</a>
            </li>

            <li className="flex items-center gap-3 Text-Sm text-feedback-danger cursor-pointer rounded-md h-11 hover:bg-gray-200">
              <img src={logOut} className="ml-3 w-5 h-5" />
              <a href="#" className="">Sair</a>
            </li>
          </ul>
        </div>

        </div>
    </>
  )
}