import { IconCicloAlert } from "@/assets/icon/iconCicleAlert";
import type { UseFormReturn } from "react-hook-form";
import type { CalledSchemaType } from "../schemas/create-called-schema";

type InputTextareaProps = {
  form: UseFormReturn<CalledSchemaType>
};

function InputTextarea ({ form }: InputTextareaProps) {
  return (
    <>
      <div className="flex flex-col group">
        <label className={`group-focus-within:text-blue-base Text-Xxs  uppercase mt-4 ${form.formState.errors.description ? "text-feedback-danger" : "text-gray-300"} `} >descrição</label>
        <textarea {...form.register("description")} className="group-focus-within:border-blue-base border-b border-gray-500 py-2 mt-1 Text-Md outline-none h-[154px] resize-none"  placeholder="Descreva o que está acontecendo" />
        {form.formState.errors.description &&
          <div className="flex gap-1 mt-2">
            <IconCicloAlert className="w-4 h-4 fill-feedback-danger"/>
            <span className="Text-Xs text-feedback-danger" >{form.formState.errors.description.message}</span>
          </div>
        } 
      </div>
    </>
  )
}

export { InputTextarea }