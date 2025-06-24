import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3333"
})

api.interceptors.response.use(
  response => response,
  (error) => {
    console.log(error)
    if(error.response?.data.message === "JWT token not found" || 
      error.response?.data.message === "Invalid JWT token"){
      localStorage.clear()
      window.location.assign("/")
    }
    return Promise.reject(error)
  }
)