type ModalContextProps = {
  children: React.ReactNode
  className?: string
}

export function ModalContext({children, className}: ModalContextProps) {
  return (
    <>
      <div className={className ? `w-full border-gray-500 p-7 ${className}` : "border-b border-t w-full border-gray-500 mb-6 p-7"}>
        {children}
      </div>
    </>
  )
}