export function TableHead({children, clas, internalSpacing = "px-4 py-3"}: {children: React.ReactNode, clas?: string, internalSpacing?: string}){
  return (
    <>
      <td className={`${internalSpacing} py-4.5text-left Text-Sm ${clas}`}>
        {children}
      </td>
    </>
  )
}