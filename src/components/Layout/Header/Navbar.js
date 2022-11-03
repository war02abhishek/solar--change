import React, { Component, useState } from "react";
import logo from "../../../assets/images/logo.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
    const animateFrom = { opacity: 0, y: 50 };
    const animateTo = { opacity: 1, y: 0 };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            className="Logo"
            src={logo}
            alt="SolarVerse Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="LogoText">SolarVersa</h1>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <motion.li className="li2" initial={animateFrom} animate={animateTo}>
            <Link to="./">Home</Link>
          </motion.li>

          <motion.li className="li2" initial={animateFrom} animate={animateTo}>
            <Link to="./services">Service</Link>
          </motion.li>
          <motion.li className="li2" initial={animateFrom} animate={animateTo}>
            <Link to="./about">About Us</Link>
          </motion.li>

          <motion.li className="li2" initial={animateFrom} animate={animateTo}>
            <Link to="./bookings">My Bookings</Link>
          </motion.li>



        </ul>
      </div>
    </nav>
  );
}
