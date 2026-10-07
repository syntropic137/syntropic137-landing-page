import { test, expect } from "@playwright/test";

/**
 * The control-plane section must send visitors to the harness-agnostic
 * skills, not the Claude Code plugin it replaced. The commands are the ones
 * the syntropic137-skills README documents; a visitor copies them verbatim.
 */

const SKILLS_REPO = "https://github.com/syntropic137/syntropic137-skills";
const INSTALL_ALL =
  "npx skills add syntropic137/syntropic137-skills --skill '*' -a claude-code -a codex -y";
const LIST = "npx skills add syntropic137/syntropic137-skills -l";

test.describe("Control plane section", () => {
  test("links the skills repo and shows its install commands", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#orchestrator");

    await expect(section.locator(`a[href="${SKILLS_REPO}"]`)).toHaveCount(1);
    const code = section.locator("pre").first();
    await expect(code).toContainText(LIST);
    await expect(code).toContainText(INSTALL_ALL);
  });

  test("makes no plugin-only claims", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#orchestrator");

    await expect(section.locator('a[href*="claude-plugin"]')).toHaveCount(0);
    const text = (await section.textContent()) ?? "";
    expect(text).not.toMatch(/plugin/i);
    // Slash commands are Claude-only; skills have none.
    expect(text).not.toMatch(/(^|\s)\/syn-/);
  });

  test("install command scrolls rather than clipping on a phone", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const pre = page.locator("#orchestrator pre").first();
    const { overflowX, scrolls } = await pre.evaluate((el) => ({
      overflowX: getComputedStyle(el).overflowX,
      scrolls: el.scrollWidth > el.clientWidth,
    }));
    expect(scrolls).toBe(true);
    expect(overflowX).toBe("auto");
  });
});
