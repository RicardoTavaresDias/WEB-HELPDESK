import Logo_IconDark from "../../assets/img/Logo_IconDark.svg"

export function LogoAuth(){
  return (
    <div className="w-max mx-auto mb-8 max-sm:mb-6 flex justify-center items-center gap-3">
      <div>
      <img src={Logo_IconDark} className="w-10 h-10"/>
      </div>
      <div>
        <h1 className="Text-Xl text-blue-dark">HelpDesk</h1>
      </div>
    </div>
  )
}