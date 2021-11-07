import { useEffect, useState } from "react"
import Card from "src/components/common/Card"
import Button from "src/components/common/Button/"
import { calculateReceiving } from "src/utils/common"
import { SenderProps } from "./Sender.types"
import Table from "../common/Table"
import { ColsDataType, RowDataType } from "../common/Table/Table.types"
import { SENDERS_DATA } from "./DummyData"
import "./Sender.m.scss"

const colsData: ColsDataType[] = [
  {
    title: "Address",
    key: "address",
    type: "address",
  },
  {
    title: "Drawn",
    key: "drawn",
    width: "150px",
  },
  {
    title: "Remaining",
    key: "remaining",
    type: "number",
    width: "150px",
  },
  {
    title: "Spendable Balance",
    key: "spendableBalance",
  },
  {
    title: "Balance",
    key: "balance",
  },
]

const Sender: React.FC<SenderProps> = ({ amount, address }) => {
  const [rowsData, setRowsData] = useState<RowDataType[]>(SENDERS_DATA)

  useEffect(() => {
    const updatedRowsData: RowDataType[] = [...rowsData].map(rowData => {
      if (rowData.address === address) {
        return calculateReceiving(rowData, amount)
      }
      return rowData
    })
    setRowsData(updatedRowsData)
  }, [amount, address])

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
      <Table colsData={colsData} rowsData={rowsData} showActions />
    </Card>
  )
}

export default Sender
