import { CircleAlert, TriangleAlert, Info, CircleCheckBig, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AlertType = {
  severity: "success" | "info" | "warning" | "error"
  children: React.ReactNode, 
  open: {
    id: string
    status: boolean
  }
}

const backGraund = {
  success: [" stroke-[#2e7d32]", "bg-success"],
  info: [" stroke-[#0288d1]", "bg-info"],
  warning: [" stroke-[#ed6c02]", "bg-warning"],
  error: [" stroke-[#d32f2f]", "bg-error"]
}

export function Alert({ severity, open, children }: AlertType) {
  const [active, setActive] = useState(open.status)
  const timeRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setActive(open.status)
    if(active) {
      timeRef.current = setTimeout(() => {
        setActive(false)
        timeRef.current = null
      }, 7000)
    }
  }, [open])

  return (
    <>
      <div className={`
        w-1/4 max-sm:w-full
        ${backGraund[severity][1]}
        p-3 max-sm:py-5 rounded 
        absolute z-60 max-sm:top-0 max-sm:left-0 lg:bottom-7 lg:right-7
        ${active ? "translate-y-0 opacity-100" : "max-sm:-translate-y-40 translate-y-40 opacity-0"}
        transition ease-out duration-300 fixed
      `}>
        <div className="flex justify-between items-center"> 
          <div className="flex gap-2 w-full items-center mr-2"> 
            {severity === "success" && <CircleCheckBig className={`w-5 h-5 flex-shrink-0 ${backGraund[severity][0]}`} />}
            {severity === "info" && <Info className={`w-5 h-5 flex-shrink-0 ${backGraund[severity][0]}`} />}
            {severity === "warning" && <TriangleAlert className={`w-5 h-5 flex-shrink-0 ${backGraund[severity][0]}`} />}
            {severity === "error" && <CircleAlert className={`w-5 h-5 flex-shrink-0 ${backGraund[severity][0]}`} />}
            <div className="flex flex-col flex-grow min-w-0"> {/* Use flex-grow e min-w-0 */}
              <span className="text-md font-semibold">{severity[0].toUpperCase() + severity.substring(1)}</span>
              <span className="text-sm break-words overflow-hidden text-ellipsis">
                {children}
              </span>
            </div>
          </div>
          <X className="stroke-gray-400 w-4 h-4 cursor-pointer flex-shrink-0" 
            onClick={() => {
              if (timeRef.current) {
                clearTimeout(timeRef.current);
                timeRef.current = null;
              }
                          
              setActive(!active)
            }} 
          />
        </div>
      </div>
    </>
  );
}
