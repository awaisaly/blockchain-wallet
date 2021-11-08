import { render } from "@testing-library/react"
import Fee from "./Fee"

describe("fee", () => {
  test("renders fee component to check if the option is rendered", () => {
    const { getByText } = render(<Fee />)
    expect(getByText("Option")).toBeInTheDocument()
  })

  test("renders fee component to check if the medium option is available", () => {
    const { getByText } = render(<Fee />)
    expect(getByText("Medium")).toBeInTheDocument()
  })

  test("renders fee component to check if the BOA is rendered", () => {
    const { getByText } = render(<Fee />)
    expect(getByText("BOA")).toBeInTheDocument()
  })
})
