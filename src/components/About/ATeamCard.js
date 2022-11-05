import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ATeamCard.css";
import { motion } from "framer-motion";
import { GrMail, GrTwitter } from "react-icons/gr";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
const ATeamCard = ({ name, id, description, image }) => {
  const animateFrom = { opacity: 0, y: 50 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <Fragment>
      <div initial={animateFrom} animate={animateTo} className="AServiceCard">
        <div className="AImageContainer">
          <img className="AServiceImages" src={image} alt={name} />
        </div>
        <h1 className="AServiceName">{name}</h1>
        <p className="AServiceDescription">{description}</p>
        <div className="ASocialMedia">
          <a target="_blank" href="https://www.facebook.com/">
            <BsFacebook className="FacebookLogo" />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <BsInstagram className="InstagramLogo" />
          </a>
          <a target="_blank" href="https://www.twitter.com/">
            <GrTwitter className="TwitterLogo" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/">
            <BsLinkedin className="LinkedinLogo" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};


export default ATeamCard