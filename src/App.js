import React from "react";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About.js";
import MyWork from "./myWork/myWork.js";
import Navbar from "./Navbar/Navbar.js";
import Footer from "./Footer/Footer.js";
import Experience from "./Experience/Experience.js"; 
import FadeInSection from "./Components/FadeInSection/FadeInSection";

const App = () => {
  return (
    <div className="body">
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <section id="home">
        <FadeInSection>
             <Home />
        </FadeInSection>
      </section>

      <section id="about">
        <FadeInSection>
             <About />
        </FadeInSection>
      </section>
      
      <section id="experience">
         {/* Experience already implements FadeInSection internally for its items, 
             but wrapping the whole section ensures the title animates too if needed. 
             However, checking Experience.js, it uses FadeInSection internally. 
             Let's wrap it to be consistent with the user's request for smooth slide of SECTIONS. */}
        <FadeInSection>
            <Experience/> 
        </FadeInSection>
      </section>

      <section id="myWork">
        <FadeInSection>
             <MyWork />
        </FadeInSection>
      </section>
     
      <section id='footer'>
        <FadeInSection>
             <Footer/>
        </FadeInSection>
      </section>
    </div>
  );
};

export default App;
