import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nav } from "@/components/nav";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

describe("Nav", () => {
  it("renders product name linking to home", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: SITE_NAME })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders nav links for home and dashboard", () => {
    render(<Nav />);

    for (const link of NAV_LINKS) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });
});
