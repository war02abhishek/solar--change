import React, { Fragment } from "react";
import Banner from "../../assets/images/banner.png";

import "./Home.css";

import ContentContainer from "./Content/ContentContainer";
import ServiceContainer from "./ServiceHome/ServiceContainer";

import Top from "./Top";

import Slider from "../Layout/Carousel/Slider";
import Footer from "../Layout/Footer/Footer";

const Home = () => {
  const user = "Yash";
  const login = true;
  return (
    <Fragment>
      <div className="Container" id="top">
        {/* <Header
          className="Navbar"
          data={{ User: { user }, Login: { login } }}
        /> */}
        {/* <MobileHeader
          className="MobileNavbar"
          data={{ User: { user }, Login: { login } }}
        /> */}
        <div className="MainContainer">
          <div className="BannerContainer">
            <Slider />
            <hr />
          </div>
          <ContentContainer />
          <ServiceContainer />
          <Footer data={{ User: { user }, Login: { login } }} />
          <Top className="ScrollTop" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
