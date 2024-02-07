import React from "react";
import "./Home.css";

const Home = () => {


  return (
    <div>
      <div className="home_design">
        <div className="home_design-inside"> </div>
        <div className="home_design-inside1"> </div>
      </div>

      <div className="home_page">
        <div className="home_intro">
          hi, <div className="home_intro-name"> jaffer </div> here.
          <div className="home_intro-blinking"></div>
        </div>

        <h2 className="home_intro2"> I create stuff sometimes. </h2>

        <a href="mailto:marzelon44@gmail.com" className="home_mailme">
          Say hi! 
        </a>
      </div>
    </div>
  );
};

export default Home;
