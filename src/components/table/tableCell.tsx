export function TableCell({children, clas}: { children: React.ReactNode, clas?: string }){
  return (
    <>
      <td className={`px-4 py-4.5  ${clas} `}>
     
          {children}
        
      </td>
    </>
  )
}