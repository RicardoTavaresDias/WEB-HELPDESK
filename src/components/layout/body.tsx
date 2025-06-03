type BodyProps = {
  children: React.ReactNode
  title: string
}

export function Body({ children, title = "Title" }: BodyProps){
  return (
    <div>
      <div>
        <span className="Text-Xl text-blue-dark">{title}</span>
      </div>

      <div className="lg:mt-6 mt-4 h-150 mb-25">
        {children}
      </div>
    </div>
  )
}