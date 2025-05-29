import circleHelp from "../../assets/icon/circle-help.svg"
import clock from "../../assets/icon/clock-2.svg"
import checkBig from "../../assets/icon/circle-check-big.svg"

type Props = {
  type: statusType
  mobile?: boolean
}

type statusType = "open" | "progress" | "close"

const status = {
  open: ["bg-feedback-open/20 text-feedback-open", circleHelp, "Aberto"],
  progress: ["bg-feedback-progress/20 text-feedback-progress", clock, "Em atendimento"],
  close: ["bg-feedback-done/20 text-feedback-done", checkBig, "Encerrado"]
}

export function Status({type, mobile}: Props){
  return (
    <div className={`${status[type][0]} p-2 h-7-open Text-Xs rounded-full flex justify-center items-center gap-1.5`}>
      <img className="w-4 h-4" src={status[type][1]} />
      {mobile || status[type][2]}
    </div>
  )
}
