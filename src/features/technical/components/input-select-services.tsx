import { useOpenModal } from "@/hooks/useOpenModal";
import { useListServices } from "../http/use-list-services";
import { Input } from "@/components/ui/input";
import { IconChevronDown } from "@/assets/icon/iconChevronDown";
import { IconCheck } from "@/assets/icon/iconCheck";
import { LoaderSM } from "@/components/ui/loading";
import type { SelectServicesCategoryType } from "./modal-create-services";

type InputSelectServicesProps = {
  selectCategoryServices: SelectServicesCategoryType | null;
  setSelectCategoryServices: React.Dispatch<
    React.SetStateAction<SelectServicesCategoryType | null>
  >;
};

function InputSelectServices({
  selectCategoryServices,
  setSelectCategoryServices,
}: InputSelectServicesProps) {
  const { menuRef, setOpen, open } = useOpenModal();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useListServices();

  const onScrollSelect = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget
    const isButtom = target.scrollHeight - target.scrollTop <= target.clientHeight
    if(isButtom){
      fetchNextPage()
    }
  }

  return (
    <>
      <div className="relative" ref={menuRef}>
        <Input
          type="text"
          placeholder="Selecione tipo de serviço"
          label="categoria de serviço"
          isScren
          defaultValue={selectCategoryServices?.titleService}
          border={open}
          onChange={() => null}
          disabled
        />
        
        <IconChevronDown
          className={`w-5 h-5 absolute top-7 right-1 cursor-pointer  ${
            open ? "rotate-180 fill-blue-base" : "fill-gray-400"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />

        {open && (
          <div
            className="w-full h-60 overflow-y-auto bg-gray-600 border border-gray-400/15 rounded-lg shadow-xl px-5 py-4 text-gray-400 Text-Md"
            onScroll={(e) => onScrollSelect(e)}
            onTouchMove={onScrollSelect}
          >
            <span className="Text-Xxs text-gray-400">opções</span>

            <div className="mt-4  Text-Sm cursor-pointer">
              {data &&
                data?.pages
                  .map((page) => page.data)
                  .flat()
                  .map((value) => (
                    <div
                      className={`py-2 ${
                        selectCategoryServices === value &&
                        "text-gray-200 font-semibold"
                      } flex justify-between group`}
                      onClick={() => {
                        setSelectCategoryServices(value);
                        setOpen(!open);
                      }}
                      key={value.id}
                    >
                      <span className="group-hover:text-gray-200">
                        {value.titleService}
                      </span>
                      {selectCategoryServices === value && (
                        <IconCheck className="w-5 h-5 fill-blue-base" />
                      )}
                    </div>
                  ))}
            </div>

            <button
              type="button"
              className="w-full text-xs flex justify-center text-gray-400 my-5"
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isPending ? (
                <LoaderSM />
              ) : isFetchingNextPage ? (
                <LoaderSM />
              ) : hasNextPage ? (
                data?.pages[0].data.length > 5 && "Carregar mais"
              ) : (
                "Fim da lista"
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export { InputSelectServices };
