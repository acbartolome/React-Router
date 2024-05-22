import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom"; // Don't need
import Red from "./components/Red"; // Don't need
import Blue from "./components/Blue"; // Don't need
import Home from "./components/Home"; // Don't need
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div id="container">
        <NavBar />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default App;

{ // old code layout
  /* <div id="container">
  <div id="navbar">
    <Link to="/">Home</Link>
    <Link to="/blue">Blue</Link>
    <Link to="/red">Red</Link>
  </div>
  <div id="main-section">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blue" element={<Blue />} />
      <Route path="/red" element={<Red />} />
    </Routes>
  </div>
</div>;
*/
}
