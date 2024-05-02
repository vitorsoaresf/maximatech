import { test, expect } from "@playwright/test";

test.describe("home page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/cart");
  });

  test("Verifica se o título do documento HTML é MaximaTech", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/MaximaTech/);
  });

  test("Verifica se a logo do documento é 'ecommerce' e está visível", async ({
    page,
  }) => {
    expect(page.locator('[data-test="ecommerce"]')).toBeVisible();
  });
});
