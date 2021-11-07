import { useState } from "react"
import Card from "src/components/common/Card"
import { NumberInput } from "src/components/common/Input"
import Select from "src/components/common/Select"
import { FEE_OPTIONS, getFee } from "src/utils/constants"
import "./Fee.m.scss"

const Fee: React.FC = () => {
  const [selectedFeeType, setSelectedFeeType] = useState("medium")
  const [fee, setFee] = useState(getFee(selectedFeeType))

  return (
    <Card title="Fee">
      <div className="fee-content">
        <div className="w-100">
          <Select
            title="Option"
            options={FEE_OPTIONS}
            value={selectedFeeType}
            onChange={e => {
              setSelectedFeeType(e.target.value)
              setFee(getFee(e.target.value))
            }}
            containerClass="fee-select-container"
          />
        </div>
        <div className="w-100">
          <NumberInput
            title="Fee"
            value={fee}
            onChange={e => {
              setFee(e.target.value)
            }}
            textAfter="BOA"
            containerClass="fee-input-container"
          />
        </div>
      </div>
    </Card>
  )
}

export default Fee
