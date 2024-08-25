import "./index.css";
import Cart from "./components/Cart.jsx";
import CartPage from "./components/Cart.jsx";
import Context from "./Context.jsx";
import Home from "./components/Home.jsx";
import Layout from "./Layout.jsx";
import Page from "./components/Page.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<Page />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>
);
