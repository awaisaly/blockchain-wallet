import { render } from "@testing-library/react"
import Table from "./Table"
import { ColsDataType } from "./Table.types"

const testColsData: ColsDataType[] = [
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

const testRowsData = [
  {
    address: "hello",
    remaining: -1,
    spendableBalance: 100.9999999,
    balance: 100.9999999,
  },
]

describe("table", () => {
  test("renders table with cols data having column remaining", () => {
    const { getByText } = render(<Table colsData={testColsData} />)
    expect(getByText("Remaining")).toBeInTheDocument()
  })

  test("renders table with rows data having address hello", () => {
    const { getByText } = render(<Table colsData={testColsData} rowsData={testRowsData} />)
    expect(getByText("hello")).toBeInTheDocument()
  })

  test("renders table with adrress col with info class", () => {
    const { container } = render(<Table colsData={testColsData} rowsData={testRowsData} />)
    expect(container.getElementsByClassName("info").length).toBe(1)
  })

  test("renders table with remaining col with danger class", () => {
    const { container } = render(<Table colsData={testColsData} rowsData={testRowsData} />)
    expect(container.getElementsByClassName("danger").length).toBe(1)
  })
})
