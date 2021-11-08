import { render } from "@testing-library/react"
import { DEFAULT_ACCOUNT_ADDRESS } from "src/utils/constants"
import Receiver from "./Receiver"

describe("receiver", () => {
  test("renders receiver component to check if the option is rendered", () => {
    const { getByText } = render(<Receiver onAmountChange={() => {}} onAddressChange={() => {}} />)
    expect(getByText("Option")).toBeInTheDocument()
  })

  test("renders receiver component with default address", () => {
    const { getByText } = render(<Receiver onAmountChange={() => {}} onAddressChange={() => {}} />)
    expect(getByText(DEFAULT_ACCOUNT_ADDRESS)).toBeInTheDocument()
  })

  test("renders receiver component to check if the amount is rendered", () => {
    const { getByText } = render(<Receiver onAmountChange={() => {}} onAddressChange={() => {}} />)
    expect(getByText("Amount")).toBeInTheDocument()
  })

  test("renders receiver component to check if the BOA is rendered", () => {
    const { getByText } = render(<Receiver onAmountChange={() => {}} onAddressChange={() => {}} />)
    expect(getByText("BOA")).toBeInTheDocument()
  })
})
