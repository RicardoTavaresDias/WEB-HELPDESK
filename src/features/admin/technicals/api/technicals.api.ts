import { api } from "@/services/api";

const apiTechnicals = {
  list: (page: number) => api.get(`/user/list/technical?page=${page}&limit=10`),
  update: (id: string, formData: object) => api.patch(`/user/${id}`, formData),
  //remove: (id: string) => api.delete(`/user/${id}`),
   byUser: (id: string) => api.get(`/user/${id}`)
}

export { apiTechnicals }