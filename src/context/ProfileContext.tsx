import { createContext } from "react";
import { useState } from "react";

type ProfileContextType = {
  profileModal: boolean;
  isModal: () => void;
};

export const ProfileContext = createContext({} as ProfileContextType)

type ProfileProviderProps = {
  children: React.ReactNode;
};

export function ProfileProvider({children}: ProfileProviderProps){
  const [profileModal, setProfileModal] = useState(false)

  function isModal(){
    setProfileModal(!profileModal)
  }

  return(
    <ProfileContext.Provider value={{ profileModal, isModal }}>
      {children}
    </ProfileContext.Provider>
  )
}