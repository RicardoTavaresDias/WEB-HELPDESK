type RootProps =  {
  children: React.ReactNode,
  displauFull?: boolean
}


export function ModuleRoot({children, displauFull}: RootProps){
   return (
    <>
      <div className={displauFull ? "m-auto" : "2xl:px-20 max-w-[1156px] m-auto" }>
        {children}
      </div>
    </>
  )
}