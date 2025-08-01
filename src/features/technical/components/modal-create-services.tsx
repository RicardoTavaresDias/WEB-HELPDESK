import { Modal } from "@/components/modal";
import { Input } from "@/components/ui/input";
import { UiButton } from "@/components/ui/UiButton";
import { currency } from "@/lib/currency";
import { useState } from "react";
import { useCreateServices } from "../http/use-services-create";
import { Alert } from "@/components/ui/alert";
import { InputSelectServices } from "./input-select-services";
import { LoaderSM } from "@/components/ui/loading";

type ModalCreateServicesType = {
  modalServices: boolean;
  setModalServices: (value: boolean) => void;
  idCalled?: number;
};

export interface SelectServicesCategoryType {
  id: string;
  titleService: string;
  price: string;
  serviceStatus: string;
  createdAt: string;
  updatedAt: string;
}

function ModalCreateServices({
  modalServices,
  setModalServices,
  idCalled,
}: ModalCreateServicesType) {
  const [selectCategoryServices, setSelectCategoryServices] =
    useState<SelectServicesCategoryType | null>(null);

  const {
    data: dataServices,
    isSuccess,
    isError,
    mutateAsync: onAddServices,
    isPending,
    error
  } = useCreateServices();

  const onSubmitServices = async () => {
    await onAddServices({
      idCalled,
      idServices: selectCategoryServices?.id,
    } as { idCalled: number; idServices: string });
    setModalServices(!modalServices);
    setSelectCategoryServices(null);
  };

  return (
    <>
      <Alert severity="success" open={isSuccess}>
        {dataServices?.message}
      </Alert>
      <Alert severity="warning" open={isError} >
        {error?.message}
      </Alert>

      <form>
        <Modal.Root isActive={modalServices}>
          <Modal.Title
            title="Serviço adicional"
            onClose={() => { 
              setModalServices(!modalServices)
              setSelectCategoryServices(null)
            }}
          />
          <Modal.Context>
            <InputSelectServices
              selectCategoryServices={selectCategoryServices}
              setSelectCategoryServices={setSelectCategoryServices}
            />

            <Input
              type="text"
              label="Valor"
              placeholder="R$ 0,00"
              defaultValue={
                selectCategoryServices
                  ? currency({ coinFormatCents: selectCategoryServices.price })
                  : ""
              }
              disabled
            />
          </Modal.Context>
          <Modal.Actions>
            <UiButton
              type="button"
              typeSize="xxl"
              typeColor="black"
              onClick={() => onSubmitServices()}
              disabled={isPending}
            >
              {isPending ? <LoaderSM /> : "Salvar"}
            </UiButton>
          </Modal.Actions>
        </Modal.Root>
      </form>
    </>
  );
}

export { ModalCreateServices };
