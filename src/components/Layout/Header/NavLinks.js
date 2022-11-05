import React, { Fragment } from "react";
import "./NavLinks.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    // { name: "Services", url: "/services" },
    { name: "My Bookings", url: "/bookings" },
    {
      name: props.data.Login.login ? `Hello ${props.data.User.user}` : "Login",
      url: props.data.Login.login ? "/profile" : "/login",
    },
  ];

  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <motion.ul className="NavLinks">
        {links.map(({ name, url }) => {
          return (
            <motion.li
              className="li2"
              initial={animateFrom}
              animate={animateTo}
              key={name}
              onClick={() => props.isMobile && props.closeMobile()}
            >
              <Link to={url}>{name}</Link>
            </motion.li>
          );
        })}

        {/* Drop down for services */}
        {!props.isMobile && (
          <div className="dropdown">
            <motion.li
              onClick={() => props.isMobile && props.closeMobile()}
              className="dropbtn"
              initial={animateFrom}
              animate={animateTo}
            >
              SERVICES
            </motion.li>
            <div className="dropdown-content">
              <motion.ul className="">
                <motion.li
                  onClick={() => props.isMobile && props.closeMobile()}
                  className="li3"
                  initial={animateFrom}
                  animate={animateTo}
                >
                  <Link to="/domestic">Domestic</Link>
                </motion.li>
                <motion.li
                  onClick={() => props.isMobile && props.closeMobile()}
                  className="li3"
                  initial={animateFrom}
                  animate={animateTo}
                >
                  <Link to="/commercial">Commercial</Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        )}

        {props.isMobile && (
          <motion.li
            onClick={() => props.isMobile && props.closeMobile()}
            className="li4"
            initial={animateFrom}
            animate={animateTo}
          >
            <Link to="/domestic">Domestic Services</Link>
          </motion.li>
        )}
        {props.isMobile && (
          <motion.li
            onClick={() => props.isMobile && props.closeMobile()}
            className="li4"
            initial={animateFrom}
            animate={animateTo}
          >
            <Link to="/commercial">Commercial Services</Link>
          </motion.li>
        )}

        <motion.li initial={animateFrom} animate={animateTo} className="li">
          <Link to={props.data.Login.login ? "/profile" : "/login"}>
            {<FaUserAlt className="ProfileLogo" />}
          </Link>
        </motion.li>
      </motion.ul>
    </Fragment>
  );
};

export default NavLinks;
