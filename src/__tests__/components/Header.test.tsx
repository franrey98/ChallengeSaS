import { render, screen } from "@testing-library/react";
import Header from "../../components/header/Header";

describe("Header component", () => {
  beforeEach(() => {});
  test("renders Header component", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });
});
