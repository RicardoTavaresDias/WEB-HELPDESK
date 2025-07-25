import { createContext, useEffect, useState } from "react";
import { api } from "@/services/api";

type User = {
  token: string
  user: {
    id: string
    name: string
    email: string
    role: string
    avatar: string
  } 
}

type AuthContextType = {
  save: (data: User) => void
  remove: () => void
  session: User | null
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  loadUser: () => void
};

type AuthProviderType = {children: React.ReactNode}

const LOCAL_STORAGE_KEY = "@helpDesk"
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthProviderType ){
  const [session, setSession] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  function save(data: User){
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)
    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

    setSession(data)
  }

  function remove(){
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`)
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`)

    window.location.assign("/")
    console.log("Auth Provider", "removido")
  }

  function loadUser(){
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setSession({
        token,
        user: JSON.parse(user)
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider value={{ session, save, remove, setIsLoading, isLoading, loadUser }}>
      {children}
    </AuthContext.Provider>
  )
}
