import { Routes, Route } from "@libs/reactRouterDom";
import { Home } from "@pages/Home";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detailscart" element={<div>Details Cart</div>}></Route>
      <Route path="/cart" element={<div>Cart</div>}></Route>
    </Routes>
  );
};
