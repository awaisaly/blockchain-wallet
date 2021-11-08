import { render } from "@testing-library/react"
import { DEFAULT_ACCOUNT_ADDRESS } from "src/utils/constants"
import Sender from "./Sender"

describe("sender", () => {
  test("renders sender component with red remaining column value", () => {
    const { container } = render(<Sender amount="200" address={DEFAULT_ACCOUNT_ADDRESS} />)
    expect(container.getElementsByClassName("danger").length).toBe(1)
  })

  test("renders sender component with positive remaining column value", () => {
    const { container } = render(<Sender amount="100" address={DEFAULT_ACCOUNT_ADDRESS} />)
    expect(container.getElementsByClassName("danger").length).toBe(0)
  })

  test("renders sender component with negative remaining column value", () => {
    const { getByText } = render(<Sender amount="200" address={DEFAULT_ACCOUNT_ADDRESS} />)
    expect(getByText("-99.0000001")).toBeInTheDocument()
  })

  test("renders sender component with positive remaining column value", () => {
    const { getByText } = render(<Sender amount="99.88888888888" address={DEFAULT_ACCOUNT_ADDRESS} />)
    expect(getByText("1.111111011120002")).toBeInTheDocument()
  })
})
