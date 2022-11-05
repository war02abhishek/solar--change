import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header/Header.js";
import MobileHeader from "./components/Layout/Header/MobileHeader";
import Footer from "./components/Layout/Footer/Footer";
import Top from "./components/Home/Top";
import AboutUs from "./components/About/AboutUs";
function App() {
  const user = "Yash";
  const login = true;

  return (
    <Router>
      <Header className="Navbar" data={{ User: { user }, Login: { login } }} />
      <MobileHeader
        className="MobileNavbar"
        data={{ User: { user }, Login: { login } }}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs/>} />
      </Routes>
      <Footer data={{ User: { user }, Login: { login } }} />
      <Top className="ScrollTop" />
    </Router>
  );
}

export default App;
