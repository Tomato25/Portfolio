import React from "react";
import "./Home.scss";
// import { Link } from "react-scroll";
import ProfileCircle from "../components/ProfileCircle.jsx";
import NavBar from "../components/NavBar";
import IconsSocial from "../components/IconsSocial";
import Logo from "../components/Logo";
import InfoText from "../components/InfoText";

function Home() {
  return (
    <div className="mainHome">
      <div className="col1">
        <NavBar />
      </div>
      <div className="col2">
        <div id="top">
          <Logo />
        </div>
        <div>
          <ProfileCircle />
        </div>
        <IconsSocial />
      </div>
      <div className="col3">
        <InfoText />


      </div>
    </div>
  );
}

export default Home;
