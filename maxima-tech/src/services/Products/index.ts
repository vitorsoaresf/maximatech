import { baseURL } from "@services/base/environment";

export const ProductService = {
  laodProducts: () =>
    fetch(`${baseURL}/products`, {
      method: "GET",
    }),
};
