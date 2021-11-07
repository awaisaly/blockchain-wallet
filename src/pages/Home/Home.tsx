import { useState } from "react"
import Fee from "src/components/Fee"
import Receiver from "src/components/Receiver"
import Sender from "src/components/Sender"
import "./Home.m.scss"

const Home: React.FC = () => {
  const [amount, setAmount] = useState("")

  return (
    <div className="home">
      <Receiver
        onAmountChange={(val: string) => {
          setAmount(val)
        }}
      />
      <Fee />
      <Sender amount={amount} />
    </div>
  )
}

export default Home
