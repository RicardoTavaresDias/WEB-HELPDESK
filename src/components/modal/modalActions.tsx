type ModalActionsProps =  {
  children: React.ReactNode
}

export function ModalActions({children}: ModalActionsProps){
  return (
    <>
      <div className={`flex justify-center mb-6 gap-2`}>
        {children}
      </div>
    </>
  )
}