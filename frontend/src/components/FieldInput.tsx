import { LabelHTMLAttributes } from "react"
import { Input, InputProps } from "./Input"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string
  htmlFor: string
}

interface FieldInputProps {
  label: LabelProps
  input: InputProps
}

export function FieldInput({ label, input }: FieldInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label {...label} className="font-semibold">
        {label.title}
      </label>
      <Input id={`${label.htmlFor} ${input.id}`} {...input} />
    </div>
  )
}
