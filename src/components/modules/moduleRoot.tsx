type RootProps =  {
  children: React.ReactNode
}


export function ModuleRoot({children}: RootProps){
   return (
    <>
      <div className="2xl:px-20 max-w-[1156px] m-auto">
        {children}
      </div>
    </>
  )
}