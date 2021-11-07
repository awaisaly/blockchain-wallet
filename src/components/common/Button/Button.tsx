import clsx from "clsx"
import { ButtonType } from "./Button.types"
import "./Button.m.scss"

const Button: React.FC<React.PropsWithChildren<ButtonType>> = ({
  children,
  variant = "primary",
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      {...props}
      className={clsx("btn", { "btn-primary": variant === "primary" }, className)}
    >
      {children}
    </button>
  )
}

export default Button
