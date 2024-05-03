import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("Deve ser capaz de verificar se o título do documento HTML é MaximaTech", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/MaximaTech/);
  });

  test("Deve ser capaz de verificar se a logo do documento é 'ecommerce' e está visível", async ({
    page,
  }) => {
    expect(await page.locator('[data-test="ecommerce"]').textContent()).toBe(
      "ecommerce"
    );
  });

  test("Deve ser capaz de verificar que existe um input de busca por produtos na página", async ({
    page,
  }) => {
    expect(
      await page.locator('[data-test="input-search-product"]')
    ).toBeVisible();
  });

  test("Deve ser capaz de verificar que pode inserir termos de busca no input destinado a pesquisa", async ({
    page,
  }) => {
    await page.locator('[data-test="input-search-product"]').fill("Teste");

    expect(
      await page.locator('[data-test="input-search-product"]').inputValue()
    ).toBe("Teste");
  });

  test("Deve ser capaz de verificar que ao inserir um termo de busca por produtos, não encontrará produto algum com o termo pesquisado", async ({
    page,
  }) => {
    await page.locator('[data-test="input-search-product"]').fill("Teste");

    await page.evaluate(() => {
      window.scrollTo(0, 800);
    });

    expect(await page.locator('[data-test="not-found-products"]')).toHaveText(
      "Não foi possível encontrar nenhum produto."
    );
  });

  test("Deve ser capaz de visualizar um produto com o termo pesquisado e a mensagem de produto não encontrado não será visualizada", async ({
    page,
  }) => {
    await page.locator('[data-test="input-search-product"]').fill("Tênis");

    await page.evaluate(() => {
      window.scrollTo(0, 800);
    });

    expect(
      await page.locator('[data-test="not-found-products"]')
    ).not.toBeVisible();
  });
});
