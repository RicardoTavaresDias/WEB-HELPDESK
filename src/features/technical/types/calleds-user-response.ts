export interface CalledsUserTecnicalType {
  result: Result
  data: Called[]
}

export interface Result {
  totalPage: number
}

export interface Called {
  updatedAt: string
  id: number
  titleCalled: string
  description: string
  createdAt: string
  services: Service[]
  UserCustomer: UserCustomer
  UserTechnical: UserTechnical
  callStatus: string
  priceTotal: number
  basePrice: BasePrice
}

export interface Service {
  id: string
  titleService: string
  price: string
}

export interface UserCustomer {
  id: string
  name: string
  avatar: string
}

export interface UserTechnical {
  id: string
  name: string
  email: string
  avatar: string
}

export interface BasePrice {
  description: string
  price: number
}