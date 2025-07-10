import { Modal } from "@/components/modal"
import { ButtonTime } from "@/components/ui/buttonTime"
import { useAuth } from "@/hooks/useAuth"
import { hourFormatList } from "@/lib/formatHours"

type SessionUser = {
  id: string
  name: string
  avatar: string
  useHours: {
    startTime: string; // pode virar Date depois
    endTime: string;
  }[]
}

type FormattedHour = {
  id: string;
  name: string
  avatar: string
  userHours: string[][]; // ou string[][]
};


export const FormHoursTechnical = () => {
   const { session } = useAuth()

  
  const data: FormattedHour[] = hourFormatList(session?.user as any)

  return (
    <Modal.Context className="border-t border-b mb-6">
      <div >
        <div>
          <span className="Text-Sm">Disponibilidade</span>
          <p className="Text-Xs text-gray-300">Horários de atendimento definidos pelo admin</p>
        </div>
        {
          data && data.map((user) => (
            <div className="flex gap-1 mt-3" key={user.id}>
              {
                user.userHours.flat().slice(0,6).map((useHours) => (
                <>
                  <ButtonTime type="read" >{useHours}</ButtonTime>
                </>
                ))
              }
            </div>
          ))
        } 
      </div>
    </Modal.Context>
  )
}