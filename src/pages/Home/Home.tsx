import { useState } from "react"
import Fee from "src/components/Fee"
import Receiver from "src/components/Receiver"
import Sender from "src/components/Sender"
import "./Home.m.scss"

const Home: React.FC = () => {
  const [amount, setAmount] = useState("")
  const [address, setAddress] = useState("")

  return (
    <div className="home">
      <Receiver
        onAmountChange={(val: string) => {
          setAmount(val)
        }}
        onAddressChange={(val: string) => {
          setAddress(val)
        }}
      />
      <Fee />
      <Sender amount={amount} address={address} />
    </div>
  )
}

export default Home
