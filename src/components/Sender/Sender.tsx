import Card from "src/components/common/Card"
import Button from "src/components/common/Button/"
import "./Sender.m.scss"
import { SenderProps } from "./Sender.types"

const Sender: React.FC<SenderProps> = ({ amount }) => {
  return (
    <Card className="sender-card">
      <div className="card-header">
        <span>Sender</span>
        <Button
          onClick={() => {
            console.log("Add Sender Button Clicked")
          }}
        >
          Add Sender
        </Button>
      </div>
      Sender Content: {amount}
    </Card>
  )
}

export default Sender
