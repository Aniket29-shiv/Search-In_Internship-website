import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import Steps from "./components/Steps";
import Internship from "./components/Internship";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg top">
                <Navbar />
                <Header />
            </div>
            <About />
            <Steps />
            <Internship />
            <Footer />
        </div>
    );
};

export default App;
