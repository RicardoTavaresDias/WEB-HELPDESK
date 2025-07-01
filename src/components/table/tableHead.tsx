export function TableHead({children, clas}: {children: React.ReactNode, clas?: string}){
  return (
    <>
      <td className={`px-4 py-3 py-4.5text-left Text-Sm ${clas}`}>
        {children}
      </td>
    </>
  )
}