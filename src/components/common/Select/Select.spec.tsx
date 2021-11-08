import { render } from "@testing-library/react"
import { FEE_OPTIONS } from "src/utils/constants"
import Select from "./Select"

describe("select", () => {
  test("renders select with options", () => {
    const { getByText } = render(<Select options={FEE_OPTIONS} />)
    expect(getByText("Medium")).toBeInTheDocument()
  })

  test("renders select with title option", () => {
    const { getByText } = render(<Select options={FEE_OPTIONS} title="Option" />)
    expect(getByText("Option")).toBeInTheDocument()
  })
})
