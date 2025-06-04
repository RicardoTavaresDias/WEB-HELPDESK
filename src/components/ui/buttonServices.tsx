import { IconCicleHelp } from "../../assets/icon/iconCicleHelp";
import { IconCicloCheckBig } from "../../assets/icon/iconCicloCheckBig";
import { IconClock } from "../../assets/icon/iconClock";

type StatusProps = {
  status: "open" | "progress" | "close"
  onClick?: () => void
  backgroud?: string
  iconColor?: string
}

export function ButtonServices({status, onClick, backgroud = "bg-gray-500", iconColor = "#535964"}: StatusProps){
  if(status === "progress"){
    return (
      <>
        <button className={`flex items-center gap-1.5 ${backgroud} px-5 py-2.5 rounded Text-Sm`} onClick={onClick}>
          <IconClock color={iconColor} className="w-4 h-4" /> {backgroud !== "bg-gray-500" ? "Iniciar atendimento" : "Em atendimento"}
        </button>
      </>
    )
  }else if(status === "close"){
    return (
      <>
        <button className={`flex items-center gap-1.5 ${backgroud} px-5 py-2.5 rounded Text-Sm`} onClick={onClick}>
          <IconCicloCheckBig color={iconColor} className="w-4 h-4" /> Encerrado
        </button>
      </>
    )
  }

  return (
      <>
        <button className={`flex items-center gap-1.5 ${backgroud} px-5 py-2.5 rounded Text-Sm`} onClick={onClick}>
          <IconCicleHelp color={iconColor} className="w-4 h-4" /> Aberto
        </button>
      </>
    )
  
  
}