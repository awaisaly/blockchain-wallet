import clsx from "clsx"
import "./Card.m.scss"
import { CardProps } from "./Card.types"

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children, title, className }) => {
  return (
    <div className={clsx("card", className)}>
      {title && <span className="card-header">{title}</span>}
      {children}
    </div>
  )
}

export default Card
