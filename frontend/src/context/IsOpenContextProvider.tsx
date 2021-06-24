import { createContext, ReactNode, useState } from "react";


type IsOpenContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  resetIsOpen: () => void;
}

type IsOpenContextProviderProps = {
  children: ReactNode
}

export const IsOpenContext = createContext({} as IsOpenContextType)

export function IsOpenContextProvider({ children }: IsOpenContextProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function resetIsOpen() {
    setIsOpen(false);
  }

  return(
    <IsOpenContext.Provider value={{ isOpen, setIsOpen, resetIsOpen }}>
      { children }
    </IsOpenContext.Provider>
  )
}