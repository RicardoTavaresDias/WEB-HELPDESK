import { createContext } from "react";
import { useState } from "react";

type ProfileContextType = {
  profileModal: boolean;
  isModal: () => void;

  teste: string // remover
  setTeste : string //remover
};

export const ProfileContext = createContext({} as ProfileContextType)

type ProfileProviderProps = {
  children: React.ReactNode;
};

export function ProfileProvider({children}: ProfileProviderProps){
  const [profileModal, setProfileModal] = useState(false)

  
  const [teste, setTeste] = useState("") // Remover


  function isModal(){
    setProfileModal(!profileModal)
  }

  return(
    <ProfileContext.Provider value={{ profileModal, isModal, teste, setTeste }}>
      {children}
    </ProfileContext.Provider>
  )
}