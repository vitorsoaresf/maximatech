import { Routes, Route } from "@libs/reactRouterDom";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Dashboard</div>}></Route>
      <Route path="/detailscart" element={<div>Details Cart</div>}></Route>
      <Route path="/cart" element={<div>Cart</div>}></Route>
    </Routes>
  );
};
