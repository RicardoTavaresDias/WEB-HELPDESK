import { useSearchParams } from "react-router";
import { Pagination } from "../pagination";
import { useEffect, useRef } from "react";

type PaginationComponentType = {
  pagination: {
    previous?: number
    next?: number
    totalPage: number
  } | null
}

function PaginationIndex ({ pagination }: PaginationComponentType) {
  const [searchParams, setSearchParams] = useSearchParams()
  const paginationRef = useRef<typeof pagination>(null)

  useEffect(() => {
    if(pagination) {
      paginationRef.current = pagination
    }
  }, [pagination])

  // usa a paginação mais atual (API ou cache)
  const paginationToShow = pagination ?? paginationRef.current

  if(!searchParams.get("page")) setSearchParams({ page: String(1) })
   
  return (
    <>
      <Pagination.Root>
        <Pagination.Previous previous={paginationToShow?.previous} onClick={() => setSearchParams({ page: String(Number(searchParams.get("page")) - 1) })} />
          <Pagination.Body 
            pagination={paginationToShow} 
            onClickPrevius={() => setSearchParams({ page: String(paginationToShow?.previous) })} 
            onClickNext={() => setSearchParams({ page: String(paginationToShow?.next) })}
            page={Number(searchParams.get("page"))}
          />
          <Pagination.Next next={paginationToShow?.next} onClick={() => setSearchParams({ page: String(Number(searchParams.get("page")) + 1) })} />
      </Pagination.Root>
    </>
  )
}

export { PaginationIndex }