import React from 'react'
import "./Footer-module.css";

function Footer() {
  return (
    <div>

    <footer className="footer">
      <div className="footer-content">
        <h4> Copyright &copy; aditidatta {new Date().getFullYear()} . All Rights Reserved.</h4>
        {/*<div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
  </div>*/}
      </div>
      <small >The information on this site is provided as a courtesy. Indeed is not a career or legal advisor and does not guarantee job interviews or offers.</small>
    </footer>
   
    </div>
  )
}

export default Footer