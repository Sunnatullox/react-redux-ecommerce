import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ProductsPage,
  AboutPage,
  ContactPage,
  ProductInfoPage,
  CartPage,
  Page404,
  CheckOutpage,
  LoginPage,
  RegisterPage
} from "./pages";
import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// toastfy
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductInfoPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutpage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

