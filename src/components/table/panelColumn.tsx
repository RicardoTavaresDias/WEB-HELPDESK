type ColumnProps =  {
  children: React.ReactNode
}

export function PanelColumn({children}: ColumnProps){
  return (
    <>
      <div className="p-3.5 text-gray-400 justify-start max-sm:Text-Sm max-sm:truncate">
        {children}
      </div>
    </>
  )
}