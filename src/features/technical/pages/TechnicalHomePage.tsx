import avatar from "@/assets/img/Avatar.svg"

import { Modules } from "@/components/modules";
import { Status } from "@/components/ui/status";
import { UiButton } from "@/components/ui/UiButton";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { IconCicloCheckBig } from "@/assets/icon/iconCicloCheckBig";
import { Link } from "react-router";
import { IconClock } from "@/assets/icon/iconClock";
import { IsProfile } from "@/features/layout/profile";

export function Called(){
  
  return (
    <>
      <IsProfile myProfile="technical" />
      <Modules.Root displauFull>
        <Modules.Title title="Meus chamados" />

        {/* Em atendimento */}
        <div className="mt-7 max-sm:mt-1">
          <Status type="progress" isText />
          <Modules.Container>
            <Modules.Context isType="30" >
              <div className="lg:w-[346px]">
                <div className="flex items-center justify-between">
                  0003
                  <div className="flex gap-1.5 items-center">
                    <Link to={`/chamados/00004`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                    <UiButton icon={IconCicloCheckBig } typeColor="black" typeSize="xxs" color="#F9FAFA" ><span className="px-1">Encerrar</span></UiButton>
                  </div>
                </div>

                <div className="">
                  <span className="text-base font-semibold text-gray-200">Rede Lenta</span>
                  <p className="text-sm">Instalação de Rede	</p>
                </div>

                <div className="flex justify-between mt-4.5 text-base">
                  <span>10/04/25 15:13</span>
                  <span>R$ 200,00</span>
                </div>

                <div className="my-4 border-t-1 border-gray-500/45"></div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1.5">
                    <img src={avatar} className="w-5 h5" />
                    André Costa
                  </div>
                  <Status type="progress" isIcon />
                </div>
              </div>
            </Modules.Context>
          </Modules.Container>
        </div>
        {/* Em atendimento */}

        {/* Aberto */}
        <div className="mt-7">
          <Status type="open" isText />
          <Modules.Container>
            <Modules.Context isType="30">
              <div className="lg:w-[346px]">
                <div className="flex items-center justify-between">
                  0003
                  <div className="flex gap-1.5 items-center">
                    <Link to={`/chamados/00002`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                    <UiButton type="button" icon={IconClock} typeColor="black" typeSize="xxs" color="#F9FAFA" ><span className="px-1">Iniciar</span></UiButton>
                  </div>
                </div>

                <div className="">
                  <span className="text-base font-semibold text-gray-200">Rede Lenta</span>
                  <p className="text-sm">Instalação de Rede	</p>
                </div>

                <div className="flex justify-between mt-4.5 text-base">
                  <span>10/04/25 15:13</span>
                  <span>R$ 200,00</span>
                </div>

                <div className="my-4 border-t-1 border-gray-500/45"></div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1.5">
                    <img src={avatar} className="w-5 h5" />
                    André Costa
                  </div>
                  <Status type="open" isIcon />
                </div>
              </div>
            </Modules.Context>

            <Modules.Context isType="30">
              <div className="lg:w-[346px]">
                <div className="flex items-center justify-between">
                  0003
                  <div className="flex gap-1.5 items-center">
                    <Link to={`/chamados/00002`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                    <UiButton icon={IconClock} typeColor="black" typeSize="xxs" color="#F9FAFA" ><span className="px-1">Iniciar</span></UiButton>
                  </div>
                </div>

                <div className="">
                  <span className="text-base font-semibold text-gray-200">Rede Lenta</span>
                  <p className="text-sm">Instalação de Rede	</p>
                </div>

                <div className="flex justify-between mt-4.5 text-base">
                  <span>10/04/25 15:13</span>
                  <span>R$ 200,00</span>
                </div>

                <div className="my-4 border-t-1 border-gray-500/45"></div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1.5">
                    <img src={avatar} className="w-5 h5" />
                    André Costa
                  </div>
                  <Status type="open" isIcon />
                </div>
              </div>
            </Modules.Context>

            <Modules.Context isType="30">
              <div className="lg:w-[346px]">
                <div className="flex items-center justify-between">
                  0003
                  <div className="flex gap-1.5 items-center">
                    <Link to={`/chamados/00002`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                    <UiButton type="button" icon={IconClock} typeColor="black" typeSize="xxs" color="#F9FAFA" ><span className="px-1">Iniciar</span></UiButton>
                  </div>
                </div>

                <div className="">
                  <span className="text-base font-semibold text-gray-200">Rede Lenta</span>
                  <p className="text-sm">Instalação de Rede	</p>
                </div>

                <div className="flex justify-between mt-4.5 text-base">
                  <span>10/04/25 15:13</span>
                  <span>R$ 200,00</span>
                </div>

                <div className="my-4 border-t-1 border-gray-500/45"></div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1.5">
                    <img src={avatar} className="w-5 h5" />
                    André Costa
                  </div>
                  <Status type="open" isIcon />
                </div>
              </div>
            </Modules.Context>
          </Modules.Container>
        </div>
        {/* Aberto */}

        {/* Encerrado */}
        <div className="mt-7">
          <Status type="close" isText />
          <Modules.Container>
            <Modules.Context isType="30">
              <div className="lg:w-[346px]">
                <div className="flex items-center justify-between">
                  0003
                  <div className="flex gap-1.5 items-center">
                    <Link to={`/chamados/00005`} ><UiButton type="button" icon={IconPenLine} typeColor="gray" typeSize="xxs" /></Link>
                  </div>
                </div>

                <div className="">
                  <span className="text-base font-semibold text-gray-200">Rede Lenta</span>
                  <p className="text-sm">Instalação de Rede	</p>
                </div>

                <div className="flex justify-between mt-4.5 text-base">
                  <span>10/04/25 15:13</span>
                  <span>R$ 200,00</span>
                </div>

                <div className="my-4 border-t-1 border-gray-500/45"></div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1.5">
                    <img src={avatar} className="w-5 h5" />
                    André Costa
                  </div>
                  <Status type="close" isIcon />
                </div>
              </div>
            </Modules.Context>
          </Modules.Container>
        </div>
        {/* Encerrado */}

      </Modules.Root>
    </>
  )
}