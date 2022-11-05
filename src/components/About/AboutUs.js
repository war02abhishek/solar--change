import React, { useState } from 'react'
import './AboutUs.css'
import './ATeamCard.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ServiceCard from "../Home/ServiceHome/ServiceCard"
import { TeamInfo } from '../../assets/data/TeamInfo';
import ATeamCard from './ATeamCard';
const AboutUs = () => {

  const [counterOn,setCounterOn] = useState(false);

  return (
    <div className="AboutUs">
      <div className="AboutBanner">
        <img src="https://msolarpower.co.za/wp-content/uploads/2022/01/potential-banner-test.jpg" />
        <div className="info">
          <h1>WE ARE SOLARVERSE! </h1>
        </div>
      </div>

      <div className="AboutUsabout">
        <h1>ABOUT US</h1>
        <div></div>

        <p>
          Our unique values describe, at the most fundamental level, what we
          stand for. These five values shape our culture, ​influence who we are,
          what we do, and even who we hire. They're hard-wired into our DNA and
          will stay the same as we ​continue to grow Our unique values describe,
          at the most fundamental level, what we stand for. These five values
          shape our culture, ​influence who we are, what we do, and even who we
          hire. They're hard-wired into our DNA and will stay the same as we
          ​continue to grow
        </p>
      </div>

      <div className="figures">
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={32000} duration={2} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <span className="span2">Trained Professionals</span>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={50} duration={2} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <span className="span2">Happy Customers</span>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={65} duration={2} delay={0} />
              )}
            </span>
          </ScrollTrigger>
          <span className="span2">Cities</span>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <span className="span1">
              {counterOn && (
                <CountUp start={0} end={2} duration={2} delay={0} />
              )}
            </span>
          </ScrollTrigger>
          <span className="span2">Country</span>
        </div>
      </div>

      <div className="AboutUsabout">
        <h1>HOW WE DO IT</h1>
        <div></div>

        <p>
          Our unique values describe, at the most fundamental level, what we
          stand for. These five values shape our culture, ​influence who we are,
          what we do, and even who we hire. They're hard-wired into our DNA and
          will stay the same as we ​continue to grow Our unique values describe,
          at the most fundamental level, what we stand for. These five values
          shape our culture, ​influence who we are, what we do, and even who we
          hire. They're hard-wired into our DNA and will stay the same as we
          ​continue to grow
        </p>
      </div>
      <div className="AboutUsabout">
        <h1>OUR STORY SO FAR</h1>
        <div></div>

        <p>
          Our unique values describe, at the most fundamental level, what we
          stand for. These five values shape our culture, ​influence who we are,
          what we do, and even who we hire. They're hard-wired into our DNA and
          will stay the same as we ​continue to grow Our unique values describe,
          at the most fundamental level, what we stand for. These five values
          shape our culture, ​influence who we are, what we do, and even who we
          hire. They're hard-wired into our DNA and will stay the same as we
          ​continue to grow
        </p>
      </div>
     <div className='AOurTeam'>

        <h1 className='Teamoh1'>OUR TEAM</h1>
        <div className='Teamline'></div>

        <div className="AServiceCardContainer">
          {TeamInfo.map(({ name, id, description, image }) => {
            return (
              <ATeamCard
                name={name}
                id={id}
                description={description}
                image={image}
              />
            );
          })}
        </div>
     </div>
      
    </div>
  );
}

export default AboutUs