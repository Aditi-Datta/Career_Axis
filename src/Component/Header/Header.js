import React from "react";
import "./Header-module.css";
import resume from '../../images/resume.png';

function Header() {
  return (
    <div className="container-top">
      <div className="left">
        <p className="heading-top">
          A <span>Resume</span> that stands out!
        </p>
        <p className="heading-top">
        Make your own resume. <span>It's free</span>
      </p>
      </div>

      <div className="right">
        <img src={resume} alt='resume'></img>
      </div>
    </div>
  );
}

export default Header;
