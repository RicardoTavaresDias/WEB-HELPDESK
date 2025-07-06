import { api } from "@/services/api";

const apiServices = {
  list: (page: number) => api.get(`/services?page=${page}&limit=10`),
  update: (id: string, formData: object) => api.patch(`/services/${id}`, formData),
  create: (data: object) => api.post(`/services`, data)
}

export { apiServices }