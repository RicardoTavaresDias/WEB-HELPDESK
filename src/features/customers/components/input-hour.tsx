import { IconChevronDown } from "@/assets/icon/iconChevronDown";
import { Input } from "@/components/ui/input";
import { useOpenModal } from "@/hooks/useOpenModal";
import { day } from "@/lib/day"
import { v4 as uuid } from 'uuid'

type InputSelectHourProps = {
  value: string | undefined;
  onChange: (value: string | null) => void;
  error?: string;
};

function InputHour ({ value, onChange, error }: InputSelectHourProps) {
  const { menuRef, setOpen, open } = useOpenModal();

  return ( 
    <>
      <div className="relative" ref={menuRef}>
        <Input
          type="text"
          placeholder="Selecione horário"
          label="horário"
          isScren
          defaultValue={value ?? ""}
          border={open}
          onChange={() => null}
          error={error}
          disabled
        />
        
        <IconChevronDown
          className={`w-5 h-5 absolute top-7 max-sm:top-6 right-1 max-sm:-right-12 cursor-pointer  ${
            open ? "rotate-180 fill-blue-base" : "fill-gray-400"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />

        {open && (
          <div
            className="lg:w-60 w-73 h-40 absolute top-11 max-sm:top-11 overflow-y-auto bg-gray-600 border border-gray-400/15 rounded-lg shadow-xl px-5 py-4 text-gray-400 Text-Md mt-3"
          >
            <span className="Text-Xxs text-gray-400">opções</span>
            <div className="mt-4 Text-Sm cursor-pointer flex flex-col gap-2 items-start">
              {day.morning.map(morning => 
                <button type="button" onClick={() => onChange(morning)} key={uuid()} >{morning}</button>
              )}
              {day.afternoon.map(afternoon => 
                <button type="button" onClick={() => onChange(afternoon)} key={uuid()} >{afternoon}</button>
              )}
              {day.night.map(night => 
                <button type="button" onClick={() => onChange(night)} key={uuid()} >{night}</button>
              )}
            </div>
          </div>
        )}
          
      
      </div>
    </>
  )
}

export { InputHour }