import axios from "axios"

export const api = axios.create({
  baseURL: "https://api-helpdesk-kky6.onrender.com"
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