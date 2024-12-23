import {Routes, Route} from "react-router";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import MainLayout from "../layouts/MainLayout";
function Router() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        </Route>
  </Routes>
  )
}

export default Router
