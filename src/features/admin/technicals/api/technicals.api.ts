import { api } from "@/services/api";

const apiTechnicals = {
  list: (page: number) => api.get(`/user/list/technical?page=${page}&limit=10`),
  update: (id: string, formData: object) => api.patch(`/user/${id}`, formData),
  create: (data: object) => api.post(`/user/technical`, data),
  byUser: (id: string) => api.get(`/user/${id}`)
}

export { apiTechnicals }