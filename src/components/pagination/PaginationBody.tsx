import type { PaginationType } from "./index"
import type { MouseEventHandler } from "react";

type onClickType = {
  onClickPrevius: MouseEventHandler<HTMLButtonElement>
  onClickNext: MouseEventHandler<HTMLButtonElement>
  page: number
} & PaginationType

export function PaginationBody({pagination, onClickPrevius, onClickNext, page}: onClickType){
  return (
    <>
      <div className="flex gap-2 items-center justify-center Text-Sm">
          {pagination && pagination.previous &&
            <button type="button" className="text-center cursor-pointer h-7.5  px-1.5 flex justify-center items-center" onClick={onClickPrevius} >
              {pagination && pagination.previous}
            </button>
          }         
          <div className="flex justify-center items-center h-7.5  px-1.5 border-1 rounded-lg w-8 border-gray-500 transition-colors">
            {pagination && pagination.previous ? pagination.previous + 1 : 1 }
          </div>

          {pagination && pagination.next &&
            <>
              <button type="button" className="cursor-pointer h-7.5  px-1.5 flex justify-center items-center" onClick={onClickNext} >
                {pagination && pagination.next}
              </button>
              {pagination.totalPage > page && (page + 1) < pagination.totalPage &&
                <button type="button" className="h-7.5  px-1.5 flex justify-center items-center" >
                  ...
                </button>
              }
            </>
          }
        </div>
    </>
  )
}