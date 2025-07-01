export function TableRoot({children}: {children: React.ReactNode}){
  return (
    <>
      <table className="min-w-full overflow-hidden ">
        {children}
      </table>
    </>
  )
}