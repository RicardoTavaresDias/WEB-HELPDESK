import { Panel } from "../../components/table"
import { Button } from "../../components/ui/button";
import { Status } from "../../components/ui/status";

import { IconBan } from "../../assets/icon/iconBan";
import { IconPenLine } from "../../assets/icon/iconPenLine";
import { UiButton } from "../../components/ui/UiButton";
import { IconClock } from "../../assets/icon/iconClock";
import { IconPlus } from "../../assets/icon/iconPlus";

export function Services(){
  return (
    <>
     <Panel.Root className="grid-cols-[auto_auto_auto_auto_auto_auto_auto_80px]">
        <Panel.Column>Teste 1</Panel.Column>
        <Panel.Column>Teste 2</Panel.Column>
        <Panel.Column>Teste 3</Panel.Column>
        <Panel.Column>Teste 4</Panel.Column>
        <Panel.Column>Teste 5</Panel.Column>
        <Panel.Column>Teste 6</Panel.Column>
        <Panel.Column>Teste 7</Panel.Column>
        <Panel.Column>icon</Panel.Column>

        <Panel.Rows>teste 1</Panel.Rows>
        <Panel.Rows>teste 2</Panel.Rows>
        <Panel.Rows>teste 3</Panel.Rows>
        <Panel.Rows>teste 4</Panel.Rows>
        <Panel.Rows>teste 5</Panel.Rows>
        <Panel.Rows>teste 6</Panel.Rows>
        <Panel.Rows>teste 7</Panel.Rows>
        <Panel.Rows>icon</Panel.Rows>
     </Panel.Root>

     <Panel.Root mobile={true} className="grid-cols-4" >
        <Panel.Column>Teste 1</Panel.Column>
        <Panel.Column>Teste 2</Panel.Column>
        <Panel.Column>Teste 3</Panel.Column>
        <Panel.Column>icon</Panel.Column>
        
        <Panel.Rows>teste 1</Panel.Rows>
        <Panel.Rows>teste 2</Panel.Rows>
        <Panel.Rows>teste 3</Panel.Rows>
        <Panel.Rows>icon</Panel.Rows>
     </Panel.Root>

      <IconPenLine to={"/tecnicos/edicao"} />
     
    </>
  )
}




export function Teste(){
  return (
    <>
      <div className="flex gap-2">
        Com Icone
        <Status type="open" />
        <Status type="progress" />
        <Status type="close" />
      </div>

      <div className="flex gap-2 mt-5">
        Sem Icone
        <Status type="open" isIcon={true} />
        <Status type="progress" isIcon={true} />
        <Status type="close" isIcon={true} />
      </div>

      <div className="flex gap-2 mt-5">
        So Texto
        <Status type="open" isButton={true} />
        <Status type="progress" isButton={true} />
        <Status type="close" isButton={true} />
      </div>

      <div className="flex gap-2 mt-5">
        Com Icone Ativos
        <Status type="active" />
        <Status type="inactive" />
      </div>

      <div className="flex gap-2 mt-5">
        So texto Ativos
        <Status type="active" isButton={true} />
        <Status type="inactive" isButton={true} />
      </div>


      {/* Icon Button */}
      <IconPenLine color="red" onClick={() => alert("Deu certo Icon!")} className="hover:bg-gray-500 cursor-pointer p-1.5 w-7 h-7 rounded-md" />

      <div className="flex gap-3">
        <UiButton typeColor="gray" typeSize="md" >Cancelar</UiButton>
        <UiButton typeColor="black" typeSize="md" >Salvar </UiButton>
      </div>
      
      
    </>
  )
}

import { Modules } from "../../components/modules"
import { IconArrowLeft } from "../../assets/icon/IconArrowLeft";



export function Module(){
  return (
    <>
      <Modules.Root>
        <Modules.Title title="Teste" to="/chamados"/>
        <Modules.Container>
          <Modules.Context isType="50"><div className="lg:w-[480px]"></div></Modules.Context>
          <Modules.Context isType="50"><div className="lg:w-[296px]"></div></Modules.Context>
          
        </Modules.Container>
      </Modules.Root>
    </>
  )
}

//grid-cols-[78px_auto_64px_64px]