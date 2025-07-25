import { Pagination } from "../pagination";

type PaginationComponentType = {
  pagination: {
    previous?: number
    next?: number
    totalPage: number
  } | null
  setPage: (value: number) => void
  page: number
}

function PaginationIndex ({ pagination, page, setPage }: PaginationComponentType) {
  return (
    <>
      <Pagination.Root>
        <Pagination.Previous previous={pagination?.previous} onClick={() => setPage(page - 1)} />
          <Pagination.Body 
            pagination={pagination} 
            onClickPrevius={() => setPage(pagination?.previous as number)} 
            onClickNext={() => setPage(pagination?.next as number)}
            page={page}
          />
          <Pagination.Next next={pagination?.next} onClick={() => setPage(page + 1)} />
      </Pagination.Root>
    </>
  )
}

export { PaginationIndex }