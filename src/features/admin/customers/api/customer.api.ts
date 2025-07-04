import { api } from "@/services/api";

const apiCustomer = {
  list: (page: number) => api.get(`user/list/customer?page=${page}&limit=10`),
  update: (id: string, formData: object) => api.patch(`/user/${id}`, formData),
  remove: (id: string) => api.delete(`/user/${id}`)
}

export { apiCustomer }