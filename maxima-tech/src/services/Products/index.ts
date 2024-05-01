import { baseURL } from "@services/base/environment";

export const ProductService = {
  loadProducts: () =>
    fetch(`${baseURL}/products`, {
      method: "GET",
    }),
  loadSpecificProducts: (id: string) =>
    fetch(`${baseURL}/products/${id}`, {
      method: "GET",
    }),
};
