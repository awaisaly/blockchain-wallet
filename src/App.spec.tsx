import { render } from "@testing-library/react"
import App from "./App"

test("renders home page having classname home", () => {
  const { container } = render(<App />)
  expect(container.getElementsByClassName("home").length).toBe(1)
})
