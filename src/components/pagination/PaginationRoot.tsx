export function PaginationRoot({children}: {children: React.ReactNode}) {
  return(
    <>
      <div className=" flex justify-end py-2 px-5 gap-2 mt-2 max-sm:justify-center">
        {children}
      </div>
    </>
  )
}