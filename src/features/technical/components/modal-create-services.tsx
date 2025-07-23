import { IconCheck } from "@/assets/icon/iconCheck"
import { IconChevronDown } from "@/assets/icon/iconChevronDown"
import { Modal } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { UiButton } from "@/components/ui/UiButton"
import { useOpenModal } from "@/hooks/useOpenModal"
import { currency } from "@/lib/currency"
import { useState } from "react"

import { useGetServices } from "../http/use-services-create"
import { useQueryClient } from "@tanstack/react-query"

type ModalCreateServicesType = {
  modalServices: boolean
  setModalServices: (value: boolean) => void
}

export interface SelectServicesCategoryType {
  id: string
  titleService: string
  price: string
  serviceStatus: string
  createdAt: string
  updatedAt: string
}


function ModalCreateServices ({ modalServices, setModalServices }: ModalCreateServicesType) {
  const { menuRef, setOpen, open } = useOpenModal()
  const [selectCategoryServices, setSelectCategoryServices] = useState<SelectServicesCategoryType | null>(null)

  // TESTE

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetServices()
  const queryClient = useQueryClient()

  // TESTE
  
  return (
    <>
      <form >
        <Modal.Root isActive={modalServices}>
          <Modal.Title title="Serviço adicional" onClose={() => setModalServices(!modalServices)} />
          <Modal.Context>
            {/* <Input type="text" name="description" label="Descrição" placeholder="Assinatura de backup"/> */}


              <div className="relative" ref={menuRef} >
                <Input type="text" placeholder="Selecione tipo de serviço" label="categoria de serviço" isScren value={selectCategoryServices?.titleService} border={open} onChange={() => null} disabled/>
                <IconChevronDown className={`w-5 h-5 absolute top-7 right-1 cursor-pointer  ${open ? "rotate-180 fill-blue-base" : "fill-gray-400"}`} 
                  onClick={() => {
                    setOpen(!open)
                    queryClient.removeQueries({ queryKey: ["add_services_tecnical"] })
                  }}/>

                {open &&
                  <div className="w-full h-70 overflow-y-auto bg-gray-600 border border-gray-400/15 rounded-lg shadow-xl px-5 py-4 text-gray-400 Text-Md" >
                    <span className="Text-Xxs text-gray-400">opções</span>
                    <div className="mt-4  Text-Sm cursor-pointer">
                      {data && data?.pages.map(page => page.data).flat().map(value => (
                        <div className={`py-2 ${selectCategoryServices === value && "text-gray-200 font-semibold"} flex justify-between group`} onClick={() => { setSelectCategoryServices(value); setOpen(!open)} } >
                          <span className="group-hover:text-gray-200">{value.titleService}</span>
                          {selectCategoryServices === value.titleService && <IconCheck className="w-5 h-5 fill-blue-base" />}
                        </div>
                      ))}
                    </div>

                    <button type="button" className="w-full text-xs" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} >
                      {isFetchingNextPage ? "Carregando..." : hasNextPage ? "Carregar mais" : "Fim da lista"}
                    </button>
                  </div>
                }
              </div>


            <Input type="text" label="Valor" placeholder="R$ 0,00" value={ selectCategoryServices ? currency({ coinFormatCents: selectCategoryServices.price }) : "" } disabled />
          </Modal.Context>
          <Modal.Actions>
            <UiButton type="submit" typeSize="xxl" typeColor="black">Salvar</UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  )
}

export { ModalCreateServices }