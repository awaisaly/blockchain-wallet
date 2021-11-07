export interface ColsDataType {
  title: string
  key: string
  type?: "text" | "number" | "address" | "amount"
  width?: string
}

export interface RowDataType {
  [key: string]: string | number | null | undefined
}

export type TableProps = {
  colsData: ColsDataType[]
  rowsData?: RowDataType[]
  showActions?: boolean
}

export type RowProps = {
  colsData: ColsDataType[]
  rowData: RowDataType
  showActions?: boolean
}
