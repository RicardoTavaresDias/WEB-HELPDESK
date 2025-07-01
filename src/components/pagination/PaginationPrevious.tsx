import { ChevronLeft } from "lucide-react";
import type { MouseEventHandler } from "react";
import type { PaginationType } from "./index"

type PreviousType = {
  previous?: number
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function PaginationPrevious({previous, onClick}: PreviousType) {
  
  return (
    <>
      <button type="button" className="hover:bg-gray-500/50 h-7.5 px-3 rounded-lg flex Text-Sm items-center justify-center cursor-pointer transition-colors" 
      onClick={onClick} 
      disabled={previous ? false : true} 
      >
        <ChevronLeft className="w-4"/> Previus
      </button>
    </>
  ) 
}