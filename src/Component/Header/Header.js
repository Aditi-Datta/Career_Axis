import React from "react";
import "./Header-module.css";
import resume from '../../images/Pallavi-Resume_page-0001.jpg';
import { ArrowDown, ArrowRight } from "react-feather";


function Header() {
  return (
    <div className="container-top background"
    >
      <div className="left">
        <p className="heading-top">
        <span> CAREER AXIS!</span> <br></br>
          Build Your Own <br></br> <span> Resume !</span> 
        </p>
        {/*
        <p className="heading-top"  >
        Like this  <ArrowRight></ArrowRight>
  </p> */}

      <small>Get dream jobs with our resume builder.
      Build a professional and outstanding resume with our free builder and templates.
      </small>

      </div>
      
      

     <div className="right">
     <h3 className="rightText">Sample Resume  </h3> 
        <img src={resume} alt='resume'></img>
      </div>
  
    </div>
  );
}

export default Header;
