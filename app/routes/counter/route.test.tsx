import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import Counter from "./route";

describe("Counter Component", () => {
  it("renders the counter with initial value of 0", () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    expect(screen.getByText("Counter Demo")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments the counter when + button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    const incrementButton = screen.getAllByRole("button")[2];

    await user.click(incrementButton);

    // The count display should now show 1
    const countDisplay = screen.getByText("Current Count").nextElementSibling;
    expect(countDisplay).toHaveTextContent("1");
  });

  it("decrements the counter when - button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    const decrementButton = screen.getAllByRole("button")[0];

    await user.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("resets the counter when Reset button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    // First increment the counter
    const incrementButton = screen.getAllByRole("button")[2];
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText("2")).toBeInTheDocument();

    // Then reset
    const resetButton = screen.getByText("Reset");
    await user.click(resetButton);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("decrements by 10 when -10 button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    const minus10Button = screen.getByRole("button", { name: "-10" });
    await user.click(minus10Button);

    // The count display should now show -10
    const countDisplay = screen.getByText("Current Count").nextElementSibling;
    expect(countDisplay).toHaveTextContent("-10");
  });

  it("increments by 10 when +10 button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    const plus10Button = screen.getByText("+10");
    await user.click(plus10Button);

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("handles multiple operations correctly", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    // +10
    await user.click(screen.getByText("+10"));
    expect(screen.getByText("10")).toBeInTheDocument();

    // +1
    const incrementButton = screen.getAllByRole("button")[2];
    await user.click(incrementButton);
    expect(screen.getByText("11")).toBeInTheDocument();

    // -10
    await user.click(screen.getByText("-10"));
    expect(screen.getByText("1")).toBeInTheDocument();

    // Reset
    await user.click(screen.getByText("Reset"));
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders the back to home link", () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>
    );

    const backLink = screen.getByText("Back to Home");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/");
  });
});
