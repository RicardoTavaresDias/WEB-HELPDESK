export function TableHeader({children}: {children: React.ReactNode}){
  return (
    <>
       <thead className="bg-gray-500/30 rounded-3xl text-gray-400 ">
          <tr>
            {children}
          </tr>
        </thead>
    </>
  )
}