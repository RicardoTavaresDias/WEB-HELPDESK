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

export type CalledsType = {
  updatedAt: Date
  createAt: Date
  id: number
  titleCalled: string
  services:  ServicesType[]
  UserCustomer: UserType
  UserTechnical: UserType
  callStatus: "open" | "in_progess" | "close"
  priceTotal: number
  description: string
}