interface InputProps {
  title?: string
  type?: "text" | "password" | "email" | "number"
  textAfter?: string
  containerClass?: string
}

export type InputType = InputProps & React.InputHTMLAttributes<HTMLInputElement>
