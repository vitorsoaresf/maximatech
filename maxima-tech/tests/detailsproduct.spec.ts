import { test, expect, chromium } from "@playwright/test";

test.describe("Detalhes dos produtos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/detailsproduct/1");

    const browser = await chromium.launch();
    const context = await browser.newContext();

    await context.route("**/detailsproduct/1", async (route) => {
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

  test("Deve ser capaz de verificar que ao clicar no item HOME do breadcrumber o usuário é redirecionado para a página HOME", async ({
    page,
  }) => {
    await page.locator('[data-test="home-redirect-product-details"]').click();

    expect(page.url()).toBe("http://localhost:5173/");
  });

  test("Deve ser capaz de verificar que o produto possui um preço maior que zero", async ({
    page,
  }) => {
    const price = await page.locator('[data-test="price-product-details"]');

    expect(
      Number((await price.innerText()).replace("R$ ", "").replace(",00", ""))
    ).toBeGreaterThan(0);
  });

  test("Deve ser capaz de verificar que ao clicar em 'adicionar ao carrinho' será exibido uma mensagem informando que o item foi adicionado", async ({
    page,
  }) => {
    await page.locator('[data-test="add-cart"]').click();

    const message = page.getByText(
      "Produto adicionado ao carrinho com sucesso!"
    );
    expect(message).toBeVisible();
    expect(message).toHaveText("Produto adicionado ao carrinho com sucesso!");
  });
});
