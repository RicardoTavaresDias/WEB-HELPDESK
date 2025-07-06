import { api } from "@/services/api";

const apiAuth = {
  create: (data: object) => api.post("/user/customer", data),
  login: (data: object) =>  api.post("/", data)
}

export { apiAuth }