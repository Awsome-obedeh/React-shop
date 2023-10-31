import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import Products from "../components/products";

export default function Home(){
    return(
        <>
            <Annoucements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>

        </>
     
    )
}