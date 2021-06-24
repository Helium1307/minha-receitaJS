import { useContext } from "react";
import { IsOpenContext } from "../context/IsOpenContextProvider";


export function useIsOpen() {
  const context = useContext(IsOpenContext)

  return context;
}