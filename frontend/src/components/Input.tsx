import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute
}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 text-white py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none"
    />
  )
}
