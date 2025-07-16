export type ServicesType = {
  titleService: string
  price: number
}

type UserType = {
  id: string
  name: string
  email: string
  avatar: string
}

type BasePriceType = {
  description: string
  price: number
}

export type CalledsType = {
  updatedAt: Date
  createdAt: Date
  id: number
  titleCalled: string
  services:  ServicesType[]
  UserCustomer: UserType
  UserTechnical: UserType
  callStatus: "open" | "in_progess" | "close"
  priceTotal: number
  description: string
  basePrice: BasePriceType
}