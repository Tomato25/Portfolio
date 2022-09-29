import React from "react";
import "./About.scss";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import SlidingText from "../components/SlidingText";
import Education from "./Education";

function About() {
  // const[ isHover, setIsHover]=useState(false);

  // const controls=useAnimationControls();

  // console.log(isHover);

  return (
    <div className="mainAbout">
      <div className="leftCol">
        <SlidingText />
        <Education />
      </div>
      <div className="rightCol">
        <SlidingText />
      </div>
    </div>
  );
}

export default About;
