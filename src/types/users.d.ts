export type InputsRegisterUser = {
  name: string
  email: string
  password: string
}

export type InputsSigninUser = {
  email: string
  password: string
}

export type UserSession = {
  id: string
  name: string
  email: string
  role: string
  avatar: string
}