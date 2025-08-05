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
  appointmentTime: string
  services: Service[]
  UserCustomer: UserCustomer
  UserTechnical: UserTechnical
  callStatus: string
  calledComments: CalledComment[]
  priceTotal: number
  basePrice: string
}

export interface Service {
  id: string
  titleService: string
  price: string
}

export interface CalledComment {
  comment: Comment
  user: User
}

export interface Comment {
  id: string
  description: string
  type: "followUp" | "task"
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  name: string
  avatar: string
  role: string
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

export interface SelectServicesCategoryType {
  id: string;
  titleService: string;
  price: string;
  serviceStatus: string;
  createdAt: string;
  updatedAt: string;
}