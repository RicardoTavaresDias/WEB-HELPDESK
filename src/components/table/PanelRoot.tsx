type TableProps = {
  children: React.ReactNode
  mobile?: boolean
  className: string
}

export function PanelRoot({children, mobile, className}: TableProps){
  if(mobile){
     return (
    <div className="lg:hidden border-2 rounded-2xl border-gray-500">
      <div className={`lg:hidden grid ${className} gap-0 rounded-xl`}>
        {children}
      </div>
    </div>
  )
  }

  return (
    <div className="max-sm:hidden border-2 rounded-2xl border-gray-500 max-w-[1280px] m-auto">
      <div className={`grid ${className} gap-0 rounded-xl`}>
        {children}
      </div>
    </div>
  )
}