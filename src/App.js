import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
// import Header from "./components/Layout/Header/Header.js"
import Footer from "./components/Layout/Footer/Footer.js";
import Navbar from "./components/Layout/Header/Navbar";
const user="Abhi";
const login=true;
function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
      
      <Footer data={{ user , login }} />
    </Router>
  );
}

export default App;
