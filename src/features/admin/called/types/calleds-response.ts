type ServicesType = {
  id: string
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
  id: number
  titleCalled: string
  services: { services: ServicesType }[]
  UserCustomer: UserType
  UserTechnical: UserType
  callStatus: "open" | "in_progess" | "close"
  priceTotal: number
  description: string
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
  description: string
}