import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Home from "./pages/Home";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route
                    path="/product/:categoryName/:productName"
                    element={<SingleProduct />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
