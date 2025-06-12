type ContaineProps =  {
  children: React.ReactNode
}

export function ModuleContainer({children}: ContaineProps){
   return (
    <>
      <div className="flex flex-wrap items-start w-full justify-start gap-6 mt-6 max-sm:flex-col max-sm:mt-4 max-sm:gap-4 min-lg:justify-center">
        {children}
      </div>
    </>
  )
}