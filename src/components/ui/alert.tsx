import { CircleAlert, TriangleAlert, Info, CircleCheckBig } from "lucide-react";

type AlertType = {
  severity: "success" | "info" | "warning" | "error"
  children: React.ReactNode, 
  open: boolean
}

const backGraund = {
  success: [" stroke-[#2e7d32]", "bg-success"],
  info: [" stroke-[#0288d1]", "bg-info"],
  warning: [" stroke-[#ed6c02]", "bg-warning"],
  error: [" stroke-[#d32f2f]", "bg-error"]
}

export function Alert({ severity, open = true, children }: AlertType) {
  
  return (
    <>
      <div className={`w-1/4 ${backGraund[severity][1]} p-3 rounded absolute bottom-7 right-7 ${open ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}  transition ease-out duration-300`}>
        <div className="flex gap-2">
          {severity === "success" && <CircleCheckBig className={`w-4.5 ${backGraund[severity][0]}`} />}
          {severity === "info" && <Info className={`w-4.5 ${backGraund[severity][0]}`} />}
          {severity === "warning" && <TriangleAlert className={`w-4.5 ${backGraund[severity][0]}`} />}
          {severity === "error" && <CircleAlert className={`w-4.5 ${backGraund[severity][0]}`} />}
          <div className="flex flex-col">
            <span className="text-md font-semibold ">{severity[0].toUpperCase() + severity.substring(1)}</span>
            <span className="text-sm">
              {children}
            </span>
          </div>
        </div>
      </div>
    </>
  );  
}
