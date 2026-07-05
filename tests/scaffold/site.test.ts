import { describe, expect, it } from "vitest";
import { DASHBOARD_TITLE, NAV_LINKS, SITE_NAME, TAGLINE } from "@/lib/site";

describe("site constants", () => {
  it("defines product name and tagline", () => {
    expect(SITE_NAME).toBe("AgentClinic");
    expect(TAGLINE.length).toBeGreaterThan(0);
  });

  it("defines home and dashboard nav routes", () => {
    expect(NAV_LINKS.map((link) => link.href)).toEqual(["/", "/dashboard"]);
    expect(NAV_LINKS.map((link) => link.label)).toEqual(["Home", "Dashboard"]);
  });

  it("uses a staff-facing dashboard title", () => {
    expect(DASHBOARD_TITLE.toLowerCase()).toContain("clinic");
  });
});
