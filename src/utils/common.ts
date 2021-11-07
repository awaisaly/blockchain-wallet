import { RowDataType } from "src/components/common/Table/Table.types"

export const calculateReceiving = (rowData: RowDataType, amount?: string | number): RowDataType => {
  const updatedAmount = Number(amount) || 0
  const balance = Number(rowData.balance) || 0
  const drawn = updatedAmount >= balance ? balance : updatedAmount
  const remaining = balance - updatedAmount
  return { ...rowData, drawn, remaining }
}
