import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { WishList } from "./pages/WishList";
import { Checkout } from "./pages/Checkout";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wish-list" element={<WishList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
