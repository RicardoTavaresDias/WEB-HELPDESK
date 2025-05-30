import { Status } from "../../components/ui/status"

type Props = {
  children: any
  data: {
    id: string
    status: string
    service: {
      title: string
    }
  }
}

export function DetailsLeftSatus({children, data}: Props){
  return (
    <>
      <div className="border border-gray-500 w-full rounded-lg p-5 lg:p-6 break-words">
        <div className="flex justify-between items-center mb-1">
          <span className="Text-Xs text-gray-300">{data.id}</span>
          <Status type={data.status as "open" | "progress" | "close"} />
        </div>

        <span className="text-gray-200 text-base font-medium">{data.service.title}</span>
        
        {children}
      </div>
    </>
  )
}

export function DetailsLeft({children}: any){
  return (
    <>
     <div className="border border-gray-500 w-full rounded-lg p-5 lg:p-6 break-words">
      {children}
     </div>
    </>
  )
}