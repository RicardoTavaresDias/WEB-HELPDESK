export function TableBody({children}: {children: React.ReactNode}){
  return (
    <>
      <tbody className="text-gray-800 ">
        {children}
      </tbody>
    </>
  )
}