import { IconBan } from "@/assets/icon/iconBan";
import { IconCicloCheck } from "@/assets/icon/iconCicloCheck";
import { IconPenLine } from "@/assets/icon/iconPenLine";
import { UiButton } from "@/components/ui/UiButton";
import { type DataServicesType } from "../types/data-services";
import { useUpdateStatus } from "../http/use-update-status";
import { Alert } from "@/components/ui/alert";
import { LoaderSM } from "@/components/ui/loading";

type UpdateServicesStatusType = {
  modalEdition: boolean;
  setModalEdition: (value: boolean) => void;
  service: DataServicesType;
  setServices: (data: DataServicesType) => void
};

export const UpdateStatus = ({
  service,
  setModalEdition,
  modalEdition,
  setServices
}: UpdateServicesStatusType) => {
  const {
    error,
    isError,
    isPending,
    mutateAsync: onUpdateStatus
  } = useUpdateStatus()

  return (
    <>
      <Alert severity="error" open={isError}>{error?.message}</Alert>
    
      <div className="flex items-center gap-1 mr-2.5 max-sm:hidden">
        {service.serviceStatus === "active" && (
          <>
            {isPending ? <LoaderSM /> :
              <IconBan
                className="w-4 h-4 cursor-pointer"
                onClick={() =>
                  onUpdateStatus({
                    id: service.id,
                    status: service.serviceStatus,
                  })
                }
              />
            }
            Desativar
          </>
        )}
        
        {service.serviceStatus === "inactive" && (
          <>
            {isPending ? <LoaderSM /> :
              <IconCicloCheck
                className="w-4 h-4 cursor-pointer"
                onClick={() =>
                  onUpdateStatus({
                    id: service.id,
                    status: service.serviceStatus,
                  })
                }
              />
           }
            Reativar
          </>
        )}
      </div>

      <div className="flex items-center gap-1 mr-2.5 lg:hidden">
        {service.serviceStatus === "active" && (
          <IconBan
            className="w-4 h-4 cursor-pointer"
            onClick={() =>
              onUpdateStatus({
                id: service.id,
                status: service.serviceStatus,
              })
            }
          />
        )}
        {service.serviceStatus === "inactive" && (
          <IconCicloCheck
            className="w-4 h-4 cursor-pointer"
            onClick={() =>
              onUpdateStatus({
                id: service.id,
                status: service.serviceStatus,
              })
            }
          />
        )}
      </div>

      <UiButton
        type="button"
        typeColor="gray"
        typeSize="xxs"
        icon={IconPenLine}
        onClick={() => {
          setModalEdition(!modalEdition);
          setServices(service);
        }}
      />
    </>
  );
};