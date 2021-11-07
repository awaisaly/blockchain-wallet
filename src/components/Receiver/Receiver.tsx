import { useEffect, useState } from "react"
import Card from "src/components/common/Card"
import { ACCOUNTS_ADDRESSES, DEFAULT_ACCOUNT_ADDRESS } from "src/utils/constants"
import { NumberInput } from "src/components/common/Input"
import Select from "src/components/common/Select"
import "./Receiver.m.scss"
import { ReceiverProps } from "./Receiver.types"

const Receiver: React.FC<ReceiverProps> = ({ onAmountChange, onAddressChange }) => {
  const [selectedAccount, setSelectedAccount] = useState(DEFAULT_ACCOUNT_ADDRESS)
  const [amount, setAmount] = useState("")

  useEffect(() => {
    onAddressChange(selectedAccount)
  }, [])

  return (
    <Card title="Receiver">
      <div className="receiver-content">
        <div className="w-100">
          <Select
            title="Option"
            options={ACCOUNTS_ADDRESSES}
            value={selectedAccount}
            onChange={e => {
              setSelectedAccount(e.target.value)
              onAddressChange(e.target.value)
            }}
            containerClass="receiver-select-container"
          />
        </div>
        <div className="w-100">
          <NumberInput
            title="Amount"
            value={amount}
            onChange={e => {
              setAmount(e.target.value)
              onAmountChange(e.target.value)
            }}
            textAfter="BOA"
            containerClass="receiver-input-container"
          />
        </div>
      </div>
    </Card>
  )
}

export default Receiver
