export function ModuleContainer({children}: any){
   return (
    <>
      <div className="flex flex-wrap items-start w-full justify-start gap-6 mt-6 max-sm:flex-col max-sm:mt-4 max-sm:gap-4">
        {children}
      </div>
    </>
  )
}