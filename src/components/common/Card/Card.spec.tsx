import { render, screen } from "@testing-library/react"
import Card from "./Card"

describe("card component", () => {
  test("renders card having title Sender", () => {
    render(<Card title="Sender" />)
    const cardWithTitleSender = screen.getByText("Sender")
    expect(cardWithTitleSender).toBeInTheDocument
  })

  test("renders card having custom classname custom-card", () => {
    const { container } = render(<Card className="custom-card" />)
    expect(container.getElementsByClassName("custom-card").length).toBe(1)
  })
})
