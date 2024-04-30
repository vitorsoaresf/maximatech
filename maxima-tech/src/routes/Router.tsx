import { Routes, Route } from "react-router-dom";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Dashboard</div>}></Route>
      <Route path="/detailsproduct" element={<div>Details Cart</div>}></Route>
      <Route path="/cart" element={<div>Cart</div>}></Route>
    </Routes>
  );
};
