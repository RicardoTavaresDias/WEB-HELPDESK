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
  createdAt: Date
  id: number
  titleCalled: string
  services:  ServicesType[]
  UserCustomer: UserType
  UserTechnical: UserType
  calledComments: CalledComment[]
  callStatus: "open" | "in_progess" | "close"
  priceTotal: number
  description: string
  basePrice: number
}

export interface CalledComment {
  comment: Comment
  user: User
}

export interface User {
  id: string
  name: string
  avatar: string
  role: string
}