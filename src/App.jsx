import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/gallery";
import Navbar from "./pages/Navbar/Navbar";
import Foot from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Workshop/work";
import Corporate from "./pages/Corporate/Corporate";
import Public from "./pages/Publicwork/public";
import ScrollToTop from "./component/scrolltop";
import Privacy from "./component/privacy";
import Terms from "./component/terms";
import Profile from "./pages/Profile/Profile";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <div className="pagecontent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/public" element={<Public />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
      </div>
      <Foot />
    </Router>
   

  )
}

export default App;