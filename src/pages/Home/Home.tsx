import Card from "src/components/common/Card"
import "./Home.m.scss"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Card title="Receiver">Receiver Content</Card>
      <Card title="Fee">Fee Content</Card>
      <Card title="Sender" className="sender-card">
        Sender Content
      </Card>
    </div>
  )
}

export default Home
