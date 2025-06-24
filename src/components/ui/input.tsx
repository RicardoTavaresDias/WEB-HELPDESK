import type { InputHTMLAttributes } from "react"
import { IconCicloAlert } from "@/assets/icon/iconCicleAlert"

type InputProps = {
  label: string
  error?: string
  textLabel?: string
  isScren?: boolean
  border?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ label, error, textLabel, isScren,  border, ...props }: InputProps){
  return (
    <div className="group flex flex-col mt-4">
      <label className={`Text-Xxs group-focus-within:text-blue-base ${error ? "text-feedback-danger" : "text-gray-300"}`}>{label}</label>
      <input className={` ${isScren && "w-full"} border-b-1 ${border ? "border-blue-base" : "border-gray-500"} max-sm:w-73 Heading-Md my-2 pb-2 outline-none group-focus-within:border-blue-base`} {...props} />

      {error &&
        <div className="flex gap-1">
          <IconCicloAlert className="w-4 h-4 fill-feedback-danger"/>
          <span className="Text-Xs text-feedback-danger" >{error}</span>
        </div>
      } 
      {label &&
        <span className="Text-Xs text-gray-400" >{textLabel}</span>
      }
    </div>
  )
}