import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Index from "./route";

describe("Index Component", () => {
  it("renders the main heading", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
    );

    expect(
      screen.getByText("Vite + React + Prisma Starter"),
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
    );

    expect(
      screen.getByText("A modern full-stack starter template with shadcn/ui"),
    ).toBeInTheDocument();
  });

  it("renders all feature list items", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
    );

    expect(
      screen.getByText("React Router 7 with file-based routing"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Prisma ORM for type-safe database access"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Vite for fast development experience"),
    ).toBeInTheDocument();
    expect(screen.getByText("shadcn/ui component library")).toBeInTheDocument();
  });

  it("renders the counter demo link", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
    );

    const counterLink = screen.getByText("Try Counter Demo");
    expect(counterLink).toBeInTheDocument();
    expect(counterLink.closest("a")).toHaveAttribute("href", "/counter");
  });

  it("counter demo link is styled as a button", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
    );

    const link = screen.getByRole("link", { name: "Try Counter Demo" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("data-slot", "button");
  });
});
