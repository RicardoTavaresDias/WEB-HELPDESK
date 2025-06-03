type RowsProps =  {
  children: React.ReactNode
}

export function PanelRows({children}: RowsProps){
  return (
    <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
      {children}
    </div>
  )
}


export function PanelRowsMobile({children}: RowsProps){
  return (
    <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
      {children}
    </div>
  )
}
