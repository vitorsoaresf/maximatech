import { test, expect, chromium } from "@playwright/test";

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");

    const browser = await chromium.launch();
    const context = await browser.newContext();

    await context.route("**/api/products", async (route) => {
      const responseBody = {
        id: "1",
        name: "Tênis Futurista",
        category: "Tênis",
        price: 150,
        discount_percentage: 20,
        promotional_price: 120,
        image:
          "https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-1.jpg",
        description:
          "Tênis futurista com design inovador e confortável. Ideal para quem busca estilo e conforto.",
      };

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(responseBody),
      });
    });
  });

  test("Deve ser capaz de verificar se o título do documento HTML é MaximaTech", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/MaximaTech/);
  });

  test("Deve ser capaz de verificar se a logo do documento é 'ecommerce' e está visível", async ({
    page,
  }) => {
    expect(await page.locator('[data-test="ecommerce"]')).toHaveText(
      "ecommerce"
    );
  });
});
