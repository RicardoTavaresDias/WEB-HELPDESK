import { ChevronRight } from "lucide-react";
import type { MouseEventHandler } from "react";

type NextType = {
  next?: number
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function PaginationNext({next, onClick}: NextType) {
  return (
    <>
      <button type="button" className="hover:bg-gray-500/50 h-7.5  px-3 rounded-lg flex Text-Sm items-center justify-center cursor-pointer transition-colors" 
      onClick={onClick} 
      disabled={next ? false : true} 
      >
        Next <ChevronRight className="w-4"/> 
      </button>
    </>
  )
}