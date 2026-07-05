import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { SITE_NAME, TAGLINE } from "@/lib/site";

describe("HomePage", () => {
  it("shows product name and tagline", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: SITE_NAME }),
    ).toBeInTheDocument();
    expect(screen.getByText(TAGLINE)).toBeInTheDocument();
  });

  it("includes placeholder body copy", () => {
    render(<HomePage />);

    expect(screen.getByText(/satirical wellness desk/i)).toBeInTheDocument();
  });

  it("links staff to the dashboard", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: /enter clinic/i })).toHaveAttribute(
      "href",
      "/dashboard",
    );
  });
});
