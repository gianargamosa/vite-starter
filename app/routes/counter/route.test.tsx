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
      </BrowserRouter>,
    );

    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(
      screen.getByText("A simple counter using shadcn/ui"),
    ).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments the counter when + button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements the counter when - button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    );

    const decrementButton = screen.getByRole("button", { name: "-" });
    await user.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("resets the counter when Reset button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    );

    // First increment the counter
    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText("2")).toBeInTheDocument();

    // Then reset
    const resetButton = screen.getByRole("button", { name: "Reset" });
    await user.click(resetButton);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("handles multiple operations correctly", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });
    const resetButton = screen.getByRole("button", { name: "Reset" });

    // Increment twice
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    // Decrement once
    await user.click(decrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    // Reset
    await user.click(resetButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders the back to home link", () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    );

    const backLink = screen.getByText("Back to Home");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/");
  });
});
