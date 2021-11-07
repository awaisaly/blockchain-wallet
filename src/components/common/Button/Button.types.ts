interface ButtonVariant {
  variant?: "primary"
}
export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariant
