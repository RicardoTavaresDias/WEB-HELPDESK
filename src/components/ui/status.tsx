import circleHelp from "../../assets/icon/circle-help.svg"
import clock from "../../assets/icon/clock-2.svg"
import checkBig from "../../assets/icon/circle-check-big.svg"

import ban from "../../assets/icon/ban.svg"
import cicleCheck from "../../assets/icon/circle-check.svg"

type StatusProps = {
  type: "open" | "progress" | "close" | "active" | "inactive"
  isIcon?: boolean
  isButton?: boolean // true só icon e false com text
}

const status = {
  open: ["bg-feedback-open/20 text-feedback-open", circleHelp, "Aberto"],
  progress: ["bg-feedback-progress/20 text-feedback-progress", clock, "Em atendimento"],
  close: ["bg-feedback-done/20 text-feedback-done", checkBig, "Encerrado"],
  active: ["bg-feedback-done/20 text-feedback-done", cicleCheck, "Ativo"],
  inactive: ["bg-feedback-open/20 text-feedback-open", ban, "Inativo"]
}

export function Status({type, isIcon, isButton}: StatusProps){
  if(isIcon || isButton){
    return (
      <div className={`${status[type][0]} p-2 px-4 h-7-open Text-Xs rounded-full flex justify-center items-center gap-1.5 w-fit`}>
        {isButton || <img className="w-4 h-4" src={status[type][1]} />}
        {isIcon || <div className="">{status[type][2]}</div>}
      </div>
    )
  }

   return (
    <div className={`${status[type][0]} p-2 h-7-open Text-Xs rounded-full flex justify-center items-center gap-1.5 w-fit`}>
      <img className="w-4 h-4" src={status[type][1]} />
      <div className="max-sm:hidden">{status[type][2]}</div> 
    </div>
  )
}
