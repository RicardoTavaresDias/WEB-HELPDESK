import { useLocation } from "react-router";
import { IconPlus } from "@/assets/icon/iconPlus";
import { IconCicleUser } from "@/assets/icon/iconCicleUser";
import { IconBriefcaseBusiness } from "@/assets/icon/iconBriefcaseBusiness";
import { IconWrench } from "@/assets/icon/iconWrench";
import { IconClipboardList } from "@/assets/icon/iconClipboardList";
import { useNavigate } from "react-router";

type MenuType = {
  element: "admin" | "técnico" | "cliente"
  open?: boolean
  setOpen?: (value: boolean) => void
}

export function Menu({ element, open, setOpen }: MenuType ) {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const navigate = useNavigate();

  const button = {
    active: "text-gray-600 bg-blue-dark",
    notActive: "text-gray-400 hover:bg-gray-200 hover:text-gray-600 ",
  }

  return (
    <>
      <div>
        <ul className="mt-4 flex flex-col gap-1">
          {element === "admin" && (
            <>
              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "" || currentPath === "chamados"
                    ? button.active
                    : button.notActive
                } cursor-pointer rounded-md h-11 group/list`}
                onClick={() => {
                  navigate("/?page=1");
                  setOpen && setOpen(!open);
                }}
              >
                <IconClipboardList
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "" || currentPath === "chamados"
                      ? "fill-gray-600"
                      : "fill-gray-400 group-hover/list:fill-gray-500"
                  }`}
                />
                Chamados
              </li>

              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "tecnicos" ? button.active : button.notActive
                } cursor-pointer rounded-md h-11 group/user`}
                onClick={() => {
                  navigate("/tecnicos/?page=1");
                  setOpen && setOpen(!open);
                }}
              >
                <IconCicleUser
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "tecnicos"
                      ? "fill-gray-600"
                      : "fill-gray-400 group-hover/user:fill-gray-500"
                  }`}
                />
                Técnicos
              </li>

              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "clientes" ? button.active : button.notActive
                } cursor-pointer rounded-md h-11 group/business`}
                onClick={() => {
                  navigate("/clientes/?page=1");
                  setOpen && setOpen(!open);
                }}
              >
                <IconBriefcaseBusiness
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "clientes"
                      ? "fill-gray-600"
                      : "fill-gray-400 group-hover/business:fill-gray-500"
                  }`}
                />
                Clientes
              </li>

              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "servicos" ? button.active : button.notActive
                } cursor-pointer rounded-md h-11 group/wrench`}
                onClick={() => {
                  navigate("/servicos/?page=1");
                  setOpen && setOpen(!open);
                }}
              >
                <IconWrench
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "servicos"
                      ? "fill-gray-600"
                      : "fill-gray-400 group-hover/wrench:fill-gray-500"
                  }`}
                />
                Serviços
              </li>
            </>
          )}

          {element === "técnico" && (
            <>
              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "" || currentPath === "chamados"
                    ? button.active
                    : button.notActive
                } cursor-pointer rounded-md h-11 group/list`}
                onClick={() => {
                  navigate("/");
                  setOpen && setOpen(!open);
                }}
              >
                <IconClipboardList
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "" || currentPath === "chamados"
                      ? "fill-gray-600"
                      : "fill-gray-400 group-hover/list:fill-gray-500"
                  }`}
                />
                Meus Chamados
              </li>
            </>
          )}

          {element === "cliente" && (
            <>
              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "" || currentPath === "chamados"
                    ? button.active
                    : button.notActive
                } cursor-pointer rounded-md h-11 group/list`}
                onClick={() => {
                  navigate("/");
                  setOpen && setOpen(!open);
                }}
              >
                <IconClipboardList
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "" || currentPath === "chamados"
                      ? "fill-gray-600"
                      : "fill-gray-400 group-hover/list:fill-gray-500"
                  }`}
                />
                Meus Chamados
              </li>

              {/* Arrumar Icon, remover fill */}
              <li
                className={`flex items-center gap-3 Text-Sm ${
                  currentPath === "criar_chamado"
                    ? button.active
                    : button.notActive
                } cursor-pointer rounded-md h-11 group/plus`}
                onClick={() => {
                  navigate("/criar_chamado");
                  setOpen && setOpen(!open);
                }}
              >
                <IconPlus
                  className={`ml-3 w-5 h-5  ${
                    currentPath === "chamados"
                      ? "fill-gray-400 group-hover/plus:fill-gray-500"
                      : "fill-gray-600"
                  }`}
                />
                Criar chamado
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
