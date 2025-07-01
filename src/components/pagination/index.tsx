import { PaginationBody } from "./PaginationBody"
import { PaginationNext} from "./PaginationNext"
import { PaginationPrevious} from "./PaginationPrevious"
import { PaginationRoot} from "./PaginationRoot"

export type PaginationType = {
  pagination: {
    previous?: number 
    next?: number
    totalPage: number 
  } | null
}

export const Pagination = {
  Root: PaginationRoot,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Body: PaginationBody
}