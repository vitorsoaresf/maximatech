import { Routes, Route } from "@libs/reactRouterDom";
import { Home } from "@pages/Home";
import { ProductDetails } from "@pages/ProductDetails";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detailsproduct/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<div>Cart</div>}></Route>
    </Routes>
  );
};
