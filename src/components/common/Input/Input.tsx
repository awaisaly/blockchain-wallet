import clsx from "clsx"
import { InputType } from "./Input.types"
import "./Input.m.scss"

const Input: React.FC<InputType> = ({ title, type = "text", textAfter, className, containerClass, ...domProps }) => {
  return (
    <div className={containerClass}>
      {title && <p className="input-title">{title}</p>}
      <div className="input-wrapper">
        <input type={type} {...domProps} className={clsx("input", className)} />
        {textAfter && <span className="input-text-after">{textAfter}</span>}
      </div>
    </div>
  )
}

export default Input
