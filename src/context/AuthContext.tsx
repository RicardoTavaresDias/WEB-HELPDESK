import { createContext } from "react";

type AuthContextType = {
 save: any
 remove: any
 load: any
};

type AuthProviderType = {children: React.ReactNode}

const LOCAL_STORAGE_KEY = "@helpDesk"
export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: AuthProviderType ){
  function save(){}

  function remove(){}

  function load(){}

  return (
    <AuthContext.Provider value={{ save, remove, load }}>
      {children}
    </AuthContext.Provider>
  )
}