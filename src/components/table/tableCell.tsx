type TableCellType = {
  children: React.ReactNode
  clas?: string
  internalSpacing?: string
}

export function TableCell({children, clas, internalSpacing="px-4 py-4.5"}: TableCellType){
  return (
    <>
      <td className={`${internalSpacing} ${clas} `}>
     
          {children}
        
      </td>
    </>
  )
}