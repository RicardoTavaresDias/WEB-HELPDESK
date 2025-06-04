import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

type ProfileContextType = {
  profileModal: boolean;
  isModal: () => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

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

export const useProfile = () => useContext(ProfileContext)