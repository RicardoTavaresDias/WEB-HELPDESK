import avatar from "../../assets/img/Avatar.svg";
import penLine from "../../assets/icon/pen-line.svg";
import { Status } from "../../components/ui/status";

import { useState } from "react";

const chamados = [
  {
    id: "00003",
    date: "13/04/25 20:56",
    service: { title: "Rede lenta	", description: "Instalação de Rede	" },
    value: "R$ 180,00",
    customer: { avatar: "avatar", name: "André Costa" },
    technical: { avatar: "avatar", name: "Carlos Silva	" },
    status: "open",
  },
  {
    id: "00004",
    date: "12/04/25 15:20",
    service: {
      title: "Backup não está funcionando	",
      description: "Recuperação de Dados	",
    },
    value: "R$ 200,00",
    customer: { avatar: "avatar", name: "André Costa" },
    technical: { avatar: "avatar", name: "Carlos Silva	" },
    status: "open",
  },
  {
    id: "00001",
    date: "12/04/25 09:01",
    service: {
      title: "Computador não liga",
      description: "Manutenção de Hardware	",
    },
    value: "R$ 150,00",
    customer: { avatar: "avatar", name: "Aline Souza" },
    technical: { avatar: "avatar", name: "Carlos Silva	" },
    status: "progress",
  },
  {
    id: "00002",
    date: "10/04/25 10:15",
    service: {
      title: "Instalação de software de gestão",
      description: "Suporte de Software",
    },
    value: "R$ 200,00",
    customer: { avatar: "avatar", name: "Julia Maria" },
    technical: { avatar: "avatar", name: "Ana Oliveira" },
    status: "progress",
  },
  {
    id: "00005",
    date: "11/04/25 15:16",
    service: {
      title: "Meu fone não conecta no computador",
      description: "Suporte de Software	",
    },
    value: "R$ 80,00",
    customer: { avatar: "avatar", name: "Suzane Moura" },
    technical: { avatar: "avatar", name: "Ana Oliveira" },
    status: "close",
  },
];

export function CallList() {
  const [items, setItems] = useState(chamados);

  return (
    <div>
      <div>
        <span className="Text-Xl text-blue-dark">Chamados</span>
      </div>

      <div className=" lg:mt-6 mt-4 mb-25">
        <div className="border-2 rounded-2xl border-gray-500">
          {/* <Grid descktop 8 col> */}
          <div className="max-sm:hidden grid grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto] gap-0 rounded-xl">
            <div className="p-3.5 text-gray-400 justify-start">
              Atualizado em
            </div>
            <div className="p-3.5 text-gray-400 justify-start">Id</div>
            <div className="p-3.5 text-gray-400 justify-start">
              Título e Serviço
            </div>
            <div className="p-3.5 text-gray-400 justify-start">Valor total</div>
            <div className="p-3.5 text-gray-400 justify-start">Cliente</div>
            <div className="p-3.5 text-gray-400 justify-start">Técnico</div>
            <div className="p-3.5 text-gray-400 justify-start">Status</div>
            <div className="p-3.5 text-gray-400 justify-start"></div>

            {/* <Grid desktop row> */}
            {items.map((chamado) => (
              <>
                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  {chamado.date}
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  {chamado.id}
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <div>
                    <span className="flex flex-col Text-Sm ">
                      {chamado.service.title}
                    </span>
                    {chamado.service.description}
                  </div>
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  {chamado.value}
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <div className="flex gap-2 justify-center items-center">
                    <img src={avatar} className="w-5 h-5" />
                    {chamado.customer.name}
                  </div>
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <div className="flex gap-2 justify-center items-center">
                    <img src={avatar} className="w-5 h-5" />
                    {chamado.technical.name}
                  </div>
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <Status
                    type={chamado.status as "open" | "progress" | "close"}
                  />
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <button
                    onClick={() =>
                      setItems((prev) =>
                        prev.filter((value) => value.id !== chamado.id)
                      )
                    }
                  >
                    <img
                      className="w-7 h-7 rounded-md cursor-pointer hover:bg-gray-500 p-1"
                      src={penLine}
                    />
                  </button>
                </div>
              </>
            ))}
            {/* </Grid desktop row> */}
          </div>
          {/* </Grid descktop 8 col> */}

          {/* </Grid mobile 3 col> */}
          <div className="lg:hidden grid grid-cols-[78px_auto_64px_64px] gap-0 rounded-xl ">
            <div className="p-3.5 text-gray-400 justify-start Text-Sm truncate">
              Atualizado em
            </div>
            <div className="p-3.5 text-gray-400 justify-start Text-Sm truncate">
              Título e Serviço
            </div>
            <div className="p-3.5 text-gray-400 justify-start Text-Sm">
              Status
            </div>
            <div className="p-3.5 text-gray-400 justify-start"></div>

            {/* <Grid mobile row> */}
            {items.map((chamado) => (
              <>
                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  {chamado.date}
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <div>
                    <span className="flex flex-col text-sx font-bold mb-1">
                      {chamado.service.title}
                    </span>
                    {chamado.service.description}
                  </div>
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <Status
                    type={chamado.status as "open" | "progress" | "close"}
                    mobile={true}
                  />
                </div>

                <div className="p-3.5 border-t-2 border-gray-500 Text-Xs flex items-center justify-start">
                  <button
                    onClick={() =>
                      setItems((prev) =>
                        prev.filter((value) => value.id !== chamado.id)
                      )
                    }
                  >
                    <img
                      className="w-7 h-7 rounded-md cursor-pointer hover:bg-gray-500 p-1"
                      src={penLine}
                    />
                  </button>
                </div>
              </>
            ))}
            {/* </Grid mobile row> */}
          </div>
          {/* </Grid mobile 3 col> */}
        </div>
      </div>
    </div>
  );
}
