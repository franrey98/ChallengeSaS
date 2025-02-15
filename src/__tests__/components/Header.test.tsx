// src/__tests__/components/Header.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/header/Header";
import { links } from "@/lib/data";

describe("Header", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 0,
    });
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should render correctly", () => {
    render(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    links.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  test("should hide the header when scrolling down", () => {
    render(<Header />);

    Object.defineProperty(window, "scrollY", { value: 600 });
    fireEvent.scroll(window);

    expect(screen.getByRole("banner")).toHaveClass("hidden");
  });

  test("should show the header when scrolling up", () => {
    render(<Header />);

    Object.defineProperty(window, "scrollY", { value: 600 });
    fireEvent.scroll(window);

    Object.defineProperty(window, "scrollY", { value: 100 });
    fireEvent.scroll(window);

    expect(screen.getByRole("banner")).not.toHaveClass("hidden");
  });

  test("should scroll smoothly to section when clicking a link", () => {
    render(
      <>
        <Header />
        {links.map((link) => (
          <div key={link.hash} id={link.hash} style={{ height: "100vh" }} />
        ))}
      </>
    );

    const link = screen.getByText(links[0].name);
    fireEvent.click(link);

    expect(link).toBeInTheDocument();
  });
});
