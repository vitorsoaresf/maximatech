import { baseURL } from "@services/base/environment";

export const ProductService = {
  laodProducts: () =>
    fetch(`${baseURL}/user/login`, {
      method: "GET",
    }),
};
