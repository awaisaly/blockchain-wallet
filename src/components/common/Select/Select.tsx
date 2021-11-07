import clsx from "clsx"
import { SelectType } from "./Select.types"
import "./Select.m.scss"

const Select: React.FC<SelectType> = ({ title, options, containerClass, className, ...domProps }) => {
  return (
    <div className={containerClass}>
      {title && <p className="select-title">{title}</p>}
      <select {...domProps} className={clsx("select", className)}>
        {options.map(({ value, label }, idx) => (
          <option key={`Select-${value}-${idx}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
