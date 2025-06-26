import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333"
})

api.interceptors.response.use(
  response => response,
  (error) => {
    console.log(error)
    if(error.response?.data.message === "Token JWT não encontrado" || 
      error.response?.data.message === "Token JWT inválido"){
      localStorage.clear()
      window.location.assign("/")
    }
    return Promise.reject(error)
  }
)