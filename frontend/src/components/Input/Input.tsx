import { HTMLAttributes, InputHTMLAttributes } from "react";


interface IInputProps {
  name?: string,
  type?: string,
  placeholder?: string,
  label?: string,
}
export default function Input({ name, placeholder, label, type }: IInputProps) {
  return(
    <input type={type} name={name} placeholder={placeholder}/>
  )
}