import { render } from "@testing-library/react"
import Button from "./Button"

describe("button", () => {
  test("renders button with test hello world", () => {
    const { getByText } = render(<Button>Hello World</Button>)
    expect(getByText("Hello World")).toBeInTheDocument()
  })

  test("renders button with primary class", () => {
    const { container } = render(<Button variant="primary">Hello World</Button>)
    expect(container.getElementsByClassName("btn-primary").length).toBe(1)
  })

  test("renders button with custom class", () => {
    const { container } = render(<Button className="custom-class">Hello World</Button>)
    expect(container.getElementsByClassName("custom-class").length).toBe(1)
  })
})
