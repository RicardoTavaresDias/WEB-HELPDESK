import { IconCicleHelp } from "../../assets/icon/iconCicleHelp"
import { IconClock } from "../../assets/icon/iconClock"
import { IconCheck } from "../../assets/icon/iconCheck"
import { IconCicloCheckBig } from "../../assets/icon/iconCicloCheckBig"
import { IconBan } from "../../assets/icon/iconBan"

type StatusProps = {
  type: "open" | "progress" | "close" | "active" | "inactive"
  isIcon?: boolean
  isButton?: boolean // true só icon e false com text
  isText?: boolean
}

const status = {
  open: {color:"bg-feedback-open/20 text-feedback-open", Icon: IconCicleHelp , state: "Aberto", fill: "fill-feedback-open"},
  progress: {color: "bg-feedback-progress/20 text-feedback-progress", Icon: IconClock, state: "Em atendimento", fill: "fill-feedback-progress"},
  close: {color: "bg-feedback-done/20 text-feedback-done", Icon: IconCicloCheckBig, state: "Encerrado", fill: "fill-feedback-done"},
  active: {color: "bg-feedback-done/20 text-feedback-done", Icon: IconCheck, state:"Ativo", fill: "fill-feedback-done"},
  inactive: {color: "bg-feedback-open/20 text-feedback-open", Icon: IconBan, state: "Inativo", fill: "fill-feedback-open"}
}

export function Status({type, isIcon, isButton, isText}: StatusProps){
  const { color, Icon, state, fill } = status[type]

  if(isIcon || isButton){
    return (
      <div className={`${status[type].color} p-2 px-2 h-7-open Text-Xs rounded-full flex justify-center items-center gap-1.5 w-fit`}>
        {isButton || <Icon className={"w-4 h-4 " +  fill}  />}
        {isIcon || <div className="">{state}</div>}
      </div>
    )
  }

   return (
    <div className={`${color} p-2 h-7-open Text-Xs rounded-full flex justify-center items-center gap-1.5 w-fit`}>
      <Icon className={"w-4 h-4 " + fill}  />
      <div className={"max-sm:hidden"}>{state}</div> 
      {isText && <div className="lg:hidden">{state}</div>}
    </div>
  )
}
