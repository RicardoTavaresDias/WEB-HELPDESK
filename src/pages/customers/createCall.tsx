import { Modules } from "../../components/modules";
import { IsProfile } from "../../components/profile";
import { UiButton } from "../../components/ui/UiButton";
import circleAlert from "../../assets/icon/circle-alert.svg"

import { useState } from "react";
import { Input } from "../../components/ui/input";
import { useOpenModal } from "../../hooks/useOpenModal"
import { IconChevronDown } from "../../assets/icon/iconChevronDown";
import { IconCheck } from "../../assets/icon/iconCheck";

export function CreateCall(){
  const [error, setError] = useState("")
  const [option, setOption] = useState(["Rede", "Formatação", "Instação de software"])
  const [select, setSelect] = useState("")
  const { menuRef, setOpen, open } = useOpenModal()

  
  return (
    <>
      <IsProfile myProfile="customers" /> 
      
      <Modules.Root>
        <Modules.Title title="Novo chamado" />
      </Modules.Root>

      <Modules.Root>
        <Modules.Container>
          <Modules.Context isType="60" >
            <div className="flex flex-col gap-1">
              <span className="Text-Md text-gray-200 font-semibold">Informações</span>
              <span className="text-gray-300 Text-Xs">Configure os dias e horários em que você está disponível para atender chamados</span>
            </div>

            <div className="mt-6">

              <form className="flex flex-col">
                {/* Text */}
                <Input type="text" label="Título" placeholder="Digite um título para o chamado" isScren />

                {/* Textarea */}
                <div className="flex flex-col group">
                  <label className={`group-focus-within:text-blue-base Text-Xxs  uppercase mt-4 ${error ? "text-feedback-danger" : "text-gray-300"} `} >descrição</label>
                  <textarea className="group-focus-within:border-blue-base border-b border-gray-500 py-2 mt-1 Text-Md outline-none h-[154px] resize-none"  placeholder="Descreva o que está acontecendo"/>
                  {error &&
                    <div className="flex gap-1 mt-2">
                      <img src={circleAlert} className="w-4 h-4"/>
                      <span className="Text-Xs text-feedback-danger" >{error}</span>
                    </div>
                  } 
                </div>

                {/* Select */}
                <div className="relative" ref={menuRef} >
                  <Input type="text" placeholder="Selecione a categoria de atendimento" label="categoria de serviço" isScren value={select} disabled border={open} />
                  <IconChevronDown className={`w-5 h-5 absolute top-10.5 right-1 cursor-pointer  ${open ? "rotate-180 fill-blue-base" : "fill-gray-400"}`} onClick={() => setOpen(!open)}/>

                  {open &&
                    <div className="w-full bg-gray-600 border border-gray-400/15 rounded-lg shadow-xl px-5 py-4 text-gray-400 Text-Md" >
                      <span className="Text-Xxs text-gray-400">opções</span>

                      <div className="mt-4  Text-Sm cursor-pointer">
                        {option && option.map((value, index) => (
                          <>
                            <div key={index} className={`py-2 ${select === value ? "text-gray-200 font-semibold" : ""} flex justify-between`} onClick={() => { setSelect(value); setOpen(!open)} }>
                              <span className="hover:text-gray-200">{value}</span>
                              {select === value && <IconCheck className="w-5 h-5 fill-blue-base" />}
                            </div>
                          </>
                        ))}
                      </div>
                    
                    </div>
                  }
                </div>
              </form>

            </div>
          </Modules.Context>

          <Modules.Context isType="40" >
              <div>
                <span className="text-md font-semibold text-gray-200" >Resumo</span>
                <p className="Text-Xs text-gray-300 ">Valores e detalhes</p>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                <span className="Text-Xs text-gray-300 ">Categoria de serviço</span>
                <span className="text-sm text-gray-200">Erro de rede</span>
              </div>

              <div className="mt-6 flex flex-col gap-0.5">
                <span className="Text-Xs text-gray-300 ">Custo inicial</span>

                <div className="mt-1">
                  <span className="Text-Sm text-gray-200 ">R$</span>
                  <span className="text-xl font-semibold text-gray-200"> 200,00</span>
                </div>
              </div>

              <p className="Text-Xs my-6 text-gray-300">O chamado será automaticamente atribuído a um técnico disponível</p>

              <UiButton typeColor="black" typeSize="base">Criar chamado</UiButton>
          </Modules.Context>
        </Modules.Container>
      </Modules.Root>

    </>
  )
}