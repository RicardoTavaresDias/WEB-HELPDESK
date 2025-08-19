import { useOpenModal } from "@/hooks/useOpenModal";
import { useListServices } from "../http/use-list-services";
import { Input } from "@/components/ui/input";
import { IconChevronDown } from "@/assets/icon/iconChevronDown";
import { IconCheck } from "@/assets/icon/iconCheck";
import { LoaderSM } from "@/components/ui/loading";
import type { SelectServicesCategoryType } from "../types/calleds-useCustomers-response";

type InputSelectServicesProps = {
  value: SelectServicesCategoryType | undefined;
  onChange: (value: SelectServicesCategoryType | null) => void;
  error?: string;
};

function InputSelectServices({ value, onChange, error }: InputSelectServicesProps) {
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
          defaultValue={value?.titleService ?? ""}
          border={open}
          onChange={() => null}
          error={error}
          disabled
        />
        
        <IconChevronDown
          className={`w-5 h-5 absolute top-10 right-1 cursor-pointer  ${
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
          >
            <span className="Text-Xxs text-gray-400">opções</span>

            <div className="mt-4  Text-Sm cursor-pointer">
              {data &&
                data?.pages
                  .map((page) => page.data)
                  .flat()
                  .map((items) => (
                    <div
                      className={`py-2 ${
                        value?.id === items.id &&
                        "text-gray-200 font-semibold"
                      } flex justify-between group`}
                      onClick={() => {
                        onChange(items);
                        setOpen(!open);
                      }}
                      key={items.id}
                    >
                      <span className="group-hover:text-gray-200">
                        {items.titleService}
                      </span>
                      {value?.id === items.id && (
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