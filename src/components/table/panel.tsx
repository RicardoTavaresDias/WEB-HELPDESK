const panel = {
  lg: ["grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]"],
  md: ["grid-cols-[auto_auto_auto_auto]"],
  sm: ["grid-cols-[auto_auto_auto]"]
}

type Props = {
  A1: string
  B1: string
  C1: string
  D1?: string
  E1?: string
  F1?: string
  G1?: string
  type: "lg" | "md" | "sm"
  children: any
}


export function Panel({children, type, A1, B1, C1, D1, E1, F1, G1 }: Props){
  return (
    <div className="max-sm:hidden border-2 rounded-2xl border-gray-500">
      {/* <Grid descktop 8 col> */}
      <div className={`grid ${panel[type]} gap-0 rounded-xl`}>
        <div className="p-3.5 text-gray-400 justify-start">
          {A1}
        </div>
        <div className="p-3.5 text-gray-400 justify-start">{B1}</div>
        <div className="p-3.5 text-gray-400 justify-start">
          {C1}
        </div>

        {D1 && <div className="p-3.5 text-gray-400 justify-start">{D1}</div>}
        {E1 && <div className="p-3.5 text-gray-400 justify-start">{E1}</div>}
        {F1 && <div className="p-3.5 text-gray-400 justify-start">{F1}</div>}
        {G1 && <div className="p-3.5 text-gray-400 justify-start">{G1}</div>}
        <div className="p-3.5 text-gray-400 justify-start"></div>
          {children}
      </div>
    </div>
  )
}


const panelMobile = {
  lg: ["grid-cols-[78px_auto_64px_64px]"],
  md: ["grid-cols-[auto_auto_auto]"]
}

type PropsMobile = {
  A1: string
  B1: string
  C1?: string
  type: "lg" | "md"
  children?: any
}


export function PanelMobile({children, A1, B1, C1, type}: PropsMobile){
  return (
    <div className="lg:hidden border-2 rounded-2xl border-gray-500">
      <div className={`lg:hidden grid ${panelMobile[type]} gap-0 rounded-xl`}>
        <div className="p-3.5 text-gray-400 justify-start Text-Sm truncate">
          {A1}
        </div>
        <div className="p-3.5 text-gray-400 justify-start Text-Sm truncate">
          {B1}
        </div>

        {C1 &&
          <div className="p-3.5 text-gray-400 justify-start Text-Sm">
            {C1}
          </div>
        }

        <div className="p-3.5 text-gray-400 justify-start"></div>
        {children}
      </div>
    </div>
  )
}