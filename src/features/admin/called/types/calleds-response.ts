type ServicesType = {
  id: string
  titleService: string
  price: number
}

type UserType = {
  id: string
  name: string
  role: "customer" | "technical" | null
}

export type CalledsType = {
  updatedAt: Date
  id: number
  titleCalled: string
  services: { services: ServicesType }[]
  UserCustomer: UserType
  UserTechnical: UserType
  callStatus: "open" | "in_progess" | "close"
  priceTotal: number
}

export type CalledsMapType = {
  updatedAt: Date
  id: number
  titleCalled: string
  services: {
    titleServices: string 
  }
  UserCustomer: UserType
  UserTechnical: UserType
  callStatus: "open" | "in_progess" | "close"
  priceTotal: number
}