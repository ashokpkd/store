import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import CategoriesPage from "./Pages/CategoriesPage";
import CategoryItemPage from "./Pages/CategoryItemPage";
import UserListPage from "./Pages/UserListPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryItemPage />} />
        <Route path="/users" element={<UserListPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
