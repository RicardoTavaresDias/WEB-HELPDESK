import { Panel } from "@/components/table"
import { Avatar } from "@/components/ui/avatar";
import { IconPenLine } from "@/assets/icon/iconPenLine";

import { ButtonTime } from "@/components/ui/buttonTime";
import { Modules } from "@/components/modules";
import { Link } from "react-router";
import { UiButton } from "@/components/ui/UiButton";
import { IconPlus } from "@/assets/icon/iconPlus";
import { Fragment } from "react";
import { useTechnicalHome } from "../hooks/useTechnicalsHome"
import { Alert } from "@/components/ui/alert";
import { Loading } from "@/components/ui/loading";


import { Table } from "@/components/table"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Technical(){
  const { 
    users, 
    isLoading, 
    messageError,
    pagination,
    setPage,
    page
  } = useTechnicalHome()


  return ( 
    <>
      {/* {isLoading && <Loading />} */}
        <Alert severity="error" open={!!messageError}>{messageError}</Alert>
      
      <div className="mb-7">
        <Modules.Title title="Técnicos" isButton={true} >
          <Link to={"/tecnicos/novo"}>
            <UiButton type="button" icon={IconPlus} typeColor="black" typeSize="xs" color="#F9FAFA" >{<span className="max-sm:hidden">Novo</span>}</UiButton>
          </Link>
        </Modules.Title>
      </div>

      {/* DESKTOP */}
      <div className="border-1 border-gray-500 rounded-md max-sm:hidden">
      <Table.Root>
        <Table.Header>
          <Table.Head >Nome</Table.Head>
          <Table.Head >Email</Table.Head>
          <Table.Head >Disponibilidade</Table.Head>
          <Table.Head >{""}</Table.Head>
        </Table.Header>

        <Table.Body>
          {
            users && users.map(user => (
              <tr className="border-t border-gray-500 text-left" key={user.id} >
                <Table.Cell>
                  <div className="flex gap-2">
                    <Avatar user={{ name: user.name, avatar: "default.svg" }} size="w-7 h-7" sizeText="text-[11px]" />
                    {user.name}
                  </div>
                </Table.Cell>
                <Table.Cell>
                    {user.email}
                </Table.Cell>
                <Table.Cell clas="w-55">
                  <div className="flex gap-2  w-fit">
                    {
                      user.userHours.flat().map((hour, index) => {
                        return (
                          <Fragment key={index}>
                            <ButtonTime type="read">{hour}</ButtonTime>
                          </Fragment>
                        )
                      }).slice(0, 4)
                    }
                    {
                      user.userHours.flat().length > 4 &&
                        <ButtonTime type="read">{("+" + (user.userHours.flat().length- 4))}</ButtonTime>
                    }
                  </div>
                </Table.Cell>
                <Table.Cell clas="flex justify-end ">
                  <Link to={`/tecnicos/edicao/${user.id}`} ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
                </Table.Cell>
              </tr>
            ))
          }
          
        </Table.Body>
      </Table.Root>
      </div>
      {/* DESKTOP */}

      {/* MOBILE */}
      <div className="border-1 border-gray-500 rounded-md lg:hidden">
        <Table.Root>
          <Table.Header>
            <Table.Head >Nome</Table.Head>
            <Table.Head >Disponibilidade</Table.Head>
            <Table.Head >{""}</Table.Head>
          </Table.Header>

          <Table.Body>
            {
              users && users.map(user => (
                <tr className="border-t border-gray-500 text-left" key={user.id} >
                  <Table.Cell>
                    <div className="flex gap-2">
                      <Avatar user={{ name: user.name, avatar: "default.svg" }} size="w-7 h-7" sizeText="text-[11px]" />
                      <span className="text-sm truncate w-19">{user.name}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell clas="w-55">
                    <div className="flex gap-2  w-fit">
                       {
                        user.userHours.flat().map((hour, index) => (
                          <Fragment key={index}>
                            <ButtonTime type="read">{hour}</ButtonTime>
                          </Fragment>
                        )).slice(0, 1)
                      }
                      {
                        user.userHours.flat().length > 1 &&
                          <div className="border rounded-full w-10 text-center border-gray-500 text-gray-400">{"+" + (user.userHours.flat().length - 1)}</div>
                      }
                    </div>
                  </Table.Cell>
                  <Table.Cell clas="flex justify-end ">
                    <Link to={`/tecnicos/edicao/${user.id}`} ><UiButton type="button" typeColor="gray" typeSize="xxs" icon={IconPenLine} /></Link>
                  </Table.Cell>
                </tr>
              ))
            }
            
          </Table.Body>
        </Table.Root>
      </div>
      {/* MOBILE */}



      {/* PAGINAÇÃO */}
      <div className=" flex justify-end py-2 px-5 gap-2 mt-2 max-sm:justify-center">
        <button className="hover:bg-gray-500/50 h-7.5 px-3 rounded-lg flex Text-Sm items-center justify-center cursor-pointer transition-colors" onClick={() => setPage(page - 1)} disabled={pagination?.previous ? false : true} >
          <ChevronLeft className="w-4"/> Previus
        </button>
        
        <div className="flex gap-2 items-center justify-center Text-Sm">
          {pagination && pagination.previous &&
            <div className="text-center cursor-pointer h-7.5  px-1.5 flex justify-center items-center" onClick={() => setPage(pagination.previous as number)} >
              {pagination && pagination.previous}
            </div>
          }         
          <div className="flex justify-center items-center h-7.5  px-1.5 border-1 rounded-lg w-8 border-gray-500 transition-colors">
            {pagination && pagination.previous ? pagination.previous + 1 : 1 }
          </div>

          {pagination && pagination.next &&
            <>
              <div className="cursor-pointer h-7.5  px-1.5 flex justify-center items-center" onClick={() => setPage(pagination.next as number)}>
                {pagination && pagination.next}
              </div>
              
              <div className="cursor-pointer h-7.5  px-1.5 flex justify-center items-center" onClick={() => setPage(pagination.totalPage)}>
                ...
              </div>
            </>
          }
        </div>

        <button className="hover:bg-gray-500/50 h-7.5  px-3 rounded-lg flex Text-Sm items-center justify-center cursor-pointer transition-colors" onClick={() => setPage(page + 1)} disabled={pagination?.next ? false : true} >
          Next <ChevronRight className="w-4"/> 
        </button>
      </div>
      {/* PAGINAÇÃO */}

    </>
  )
}