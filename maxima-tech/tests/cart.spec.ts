import { test, expect } from "@playwright/test";

test.describe("Carrinho", () => {
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
