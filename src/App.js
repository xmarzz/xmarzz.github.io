import React from "react";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About.js";
import MyWork from "./myWork/myWork.js";
import Navbar from "./Navbar/Navbar.js";
import Footer from "./Footer/Footer.js";
import Experience from "./Experience/Experience.js"; 

const App = () => {
  return (
    <div className="body">
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <section id="home">
        <Home />
      </section>


      <section id="about">
        <About />
      </section>
      
      <section id="experience">
        <Experience/> 
      </section>

      <section id="myWork">
        {" "}
        <MyWork />{" "}
      </section>
     
      <section id='footer'>
        <Footer/>
      </section>


    </div>
  );
};

export default App;
