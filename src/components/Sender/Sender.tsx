import Card from "src/components/common/Card"
import Button from "src/components/common/Button/"
import "./Sender.m.scss"

const Sender: React.FC = () => {
  return (
    <Card className="sender-card">
      <div className="card-header">
        <span>Sender</span>
        <Button
          onClick={() => {
            console.log("Button Clicked")
          }}
        >
          Add Sender
        </Button>
      </div>
      Sender Content
    </Card>
  )
}

export default Sender
