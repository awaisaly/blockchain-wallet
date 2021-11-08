import { render } from "@testing-library/react"
import Input from "./Input"

describe("input", () => {
  test("renders input with title option", () => {
    const { getByText } = render(<Input title="Option" />)
    expect(getByText("Option")).toBeInTheDocument()
  })
})
