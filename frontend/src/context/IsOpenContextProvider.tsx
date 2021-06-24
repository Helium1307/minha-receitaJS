import { createContext, ReactNode, useState } from "react";


type IsOpenContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

}

type IsOpenContextProviderProps = {
  children: ReactNode
}

export const IsOpenContext = createContext({} as IsOpenContextType)

export function IsOpenContextProvider({ children }: IsOpenContextProviderProps) {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return(
    <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
      { children }
    </IsOpenContext.Provider>
  )
}