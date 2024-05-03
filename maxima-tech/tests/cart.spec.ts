import { test, expect, chromium } from "@playwright/test";

test.describe("Carrinho sem itens", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/cart");
  });

  test("Deve ser capaz de verificar que o botão FINALIZAR COMPRA está desabilitado caso o carrinho não possua nenhum item", async ({
    page,
  }) => {
    expect(page.locator('[data-test="bt-finalize-buy"]')).toBeDisabled();
  });

  test("Deve ser capaz de verificar que o botão LIMPAR CARRINHO está desabilitado caso o carrinho não possua nenhum item", async ({
    page,
  }) => {
    expect(page.locator('[data-test="bt-clear-cart"]')).toBeDisabled();
  });

  test("Deve ser capaz de verificar que o label SUBTOTAL DE PRODUTOS  é igual a zero", async ({
    page,
  }) => {
    const subtotal = await page.locator('[data-test="subtotal-products"]');
    expect(subtotal).toHaveText("R$ 0,00");
  });

  test("Deve ser capaz de verificar que o label ENTREGA é igual a zero", async ({
    page,
  }) => {
    const deliveryPrice = await page.locator('[data-test="delivery-price"]');
    expect(deliveryPrice).toHaveText("R$ 0,00");
  });

  test("Deve ser capaz de verificar que o label TOTAL é igual a zero", async ({
    page,
  }) => {
    const total = await page.locator('[data-test="total-price"]');
    expect(total).toHaveText("R$ 0,00");
  });
});

test.describe("Carrinho com itens", () => {
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
  test("Deve ser capaz de verificar que ao clicar em 'adicionar ao carrinho' o produto visualizado em tela e depois ir para a página do carrinho, é possível visualizar um produto adicionado", async ({
    page,
  }) => {
    await page.locator('[data-test="add-cart"]').click();

    await page.locator('[data-test="icon-cart-redirect"]').click();

    const nameProduct = await page.locator('[data-test="name-product-cart"]');

    expect(nameProduct).toBeVisible();
    expect(nameProduct).toHaveText("Tênis Futurista");
  });

  test("Deve ser capaz de verificar que ao clicar em 'adicionar ao carrinho' o produto visualizado em tela e depois ir para a página do carrinho, é possível alterar a quantidade do produto no carrinho", async ({
    page,
  }) => {
    await page.locator('[data-test="add-cart"]').click();

    await page.locator('[data-test="icon-cart-redirect"]').click();

    const options = await page.locator('[data-test="quantity-selector"]');

    await options.selectOption({ value: "6" });

    expect(
      await page.locator('[data-test="quantity-selector"]').inputValue()
    ).toBe("6");
  });

  test("Deve ser capaz de verificar que ao alterar a quantidade de produtos o subtotal será o valor do produto vezes a quantidade selecionada", async ({
    page,
  }) => {
    const optionSelected = 6;
    await page.locator('[data-test="add-cart"]').click();

    await page.locator('[data-test="icon-cart-redirect"]').click();

    const options = await page.locator('[data-test="quantity-selector"]');

    await options.selectOption({ value: `${optionSelected}` });

    const price = await page
      .locator('[data-test="subtotal-products"]')
      .textContent();

    expect(price?.replace("R$ ", "").replace(",00", "")).toBe("720");
  });

  test("Deve ser capaz de verificar que ao existir produto adicionado ao carrinho, haverá a taxa de entrega", async ({
    page,
  }) => {
    await page.locator('[data-test="add-cart"]').click();

    await page.locator('[data-test="icon-cart-redirect"]').click();

    const price = await page
      .locator('[data-test="delivery-price"]')
      .textContent();

    expect(price).toBe("R$ 40,00");
  });

  test("Deve ser capaz de verificar que será somado o subtotal e a entrega do produto somando um valor total", async ({
    page,
  }) => {
    await page.locator('[data-test="add-cart"]').click();

    await page.locator('[data-test="icon-cart-redirect"]').click();

    const price = await page.locator('[data-test="total-price"]').textContent();

    expect(price).toBe("R$ 160,00");
  });
});
