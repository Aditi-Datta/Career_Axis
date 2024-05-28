import React from 'react'
import "./Navbar-module.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo-new.png';

function Navbar() {
  return (
    <div>
    
    <nav>

    <ul>


    <img className='logoClass' src={logo} alt='resume'></img>
  
    <h3 className='headerName' style={{color:'white'}}>Career Axis</h3>






      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
  </li>*/}
    </ul>
  </nav>
    
    </div>
  )
}

export default Navbar