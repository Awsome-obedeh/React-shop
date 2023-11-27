import Navbar from "./components/Navbar";
import Annoucements from "./components/Annoucements";
import Slider from "./components/Slider";
import Categories from "./components/categories";
import Products from "./components/products";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import ProductList from "./pages/productlist";
import Product from "./pages/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Pay from "./pages/pay";
import Success from "./pages/sucess";


function App() {
  return (
    <>
      {/* <Link to='/products'><li>Awsome</li></Link> */}
      {/* <Link to='/proucts' ><li>products</li></Link> */}
      <BrowserRouter>
        <Routes>
          {/* <Annoucements />
          <Navbar />
          <Slider />
          <Categories />
          <Products />
          <Newsletter />
          <Footer /> */}
          <Route path="/single" element={<Product />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart/>}> </Route>
          <Route path="/product" element={<Product/>}></Route>
           <Route path="/pay" element={<Pay/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
