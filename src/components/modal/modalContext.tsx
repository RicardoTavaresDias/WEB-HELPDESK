type PropsContext = {
  children: any
}

export function ModalContext({children}: PropsContext) {
  return (
    <>
      <div className="border-b border-t w-full border-gray-500 mb-6 p-7">
        {children}
      </div>
    </>
  )
}