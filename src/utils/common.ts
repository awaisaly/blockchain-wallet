import { RowDataType } from "src/components/common/Table/Table.types"

export const calculateReceiving = (rowData: RowDataType, amount?: string): RowDataType => {
  const updatedAmount = Number(amount) || 0
  const balance = Number(rowData.balance) || 0
  const drawn = updatedAmount >= balance ? balance : amount
  const remaining = balance - updatedAmount
  return { ...rowData, drawn, remaining }
}
