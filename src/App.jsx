import Navbar from "./components/Navbar";
import Annoucements from "./components/Annoucements";
import Slider from "./components/Slider";
import Categories from "./components/categories";
import Products from "./components/products";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";
import ProductList from "./pages/productlist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

          <Route path="/" element={<Navbar />}></Route>
          <Route path="/products" element={<ProductList />}>
            products
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
