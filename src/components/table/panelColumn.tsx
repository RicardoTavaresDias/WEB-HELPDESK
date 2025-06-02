export function PanelColumn({children}: any){
  return (
    <>
      <div className="p-3.5 text-gray-400 justify-start max-sm:Text-Sm max-sm:truncate">
        {children}
      </div>
    </>
  )
}