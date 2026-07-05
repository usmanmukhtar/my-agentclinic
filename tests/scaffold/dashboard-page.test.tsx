import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DashboardPage from "@/app/dashboard/page";
import { DASHBOARD_TITLE } from "@/lib/site";

describe("DashboardPage", () => {
  it("shows clinic floor heading", () => {
    render(<DashboardPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: DASHBOARD_TITLE }),
    ).toBeInTheDocument();
  });

  it("shows staff-facing placeholder", () => {
    render(<DashboardPage />);

    expect(screen.getByText(/staff dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/waiting room is empty/i)).toBeInTheDocument();
  });
});
