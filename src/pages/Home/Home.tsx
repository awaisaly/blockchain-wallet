import Fee from "src/components/Fee"
import Receiver from "src/components/Receiver"
import Sender from "src/components/Sender"
import "./Home.m.scss"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Receiver />
      <Fee />
      <Sender />
    </div>
  )
}

export default Home
