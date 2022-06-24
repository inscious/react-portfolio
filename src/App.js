import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
