type ContextProps = {
  children: React.ReactNode
  className?: string
  isType: "40" | "50" | "60"
}

export function ModuleContext({children, className, isType = "50"}: ContextProps){

  const widthMap: Record<string, string> = {
    '40': 'basis-[calc(40%-0.75rem)]',
    '50': 'basis-[calc(50%-0.75rem)]',
    '60': 'xl:basis-[calc(59%-0.75rem)] lg:basis-[calc(53%-0.75rem)]',
  };

   return (
    <>
    <div className={`${widthMap[isType] || 'basis-[calc(50%-0.75rem)]'} max-sm:w-full`}>
      <div className={`border border-gray-500 rounded-lg p-5 lg:p-4 2xl:p-6 break-words ${className}`}>
        {children}
      </div>
     </div>
    </>
  )
}