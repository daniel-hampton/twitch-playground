import { render, screen } from "@testing-library/react";

describe("Example Button", () => {
  it("Should render text inside button", () => {
    const targetText = "Hello World";
    render(
      <div>
        <button>{targetText}</button>
      </div>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button.textContent).toMatch(targetText);
  });
});
