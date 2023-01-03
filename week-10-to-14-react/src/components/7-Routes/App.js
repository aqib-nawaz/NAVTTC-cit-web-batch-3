import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Product from "./Product";
import Products from "./Products";
import Error from "./Error";

const App = () => {
    return <Router>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/products">Products</Link>{" "}
        <Link to="/product">Product</Link>{" "}
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/products" element = {<Products/>}/>
            <Route path="/product/:pid" element = {<Product/>}/>
            <Route path="*" element = {<Error/>}/>
        </Routes>
    </Router>
};

export default App;
