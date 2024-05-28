import './App.css';
import React from 'react';
import Header from './Component/Header/Header';
import  Body  from './Component/Body/Body';
import backgroundHeader from '../src/images/header.jpg';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import NavBar from '../src/Component/Navbar/Navbar';
import Editor from './Component/Editor/Editor';

function App() {
  return (
    <div style={{background: 
      // "linear-gradient(#bdc3c7 ,#2c3e50)"
      "linear-gradient(#004953 ,#01c1f3)"
     }} >
    

   

    <Router>
    <div>
      <NavBar />

     
     
      {/*<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={About} />
        <Route path="/" component={Contact} />
  </Switch>*/}
    </div>
  </Router>

        <Header></Header>
        <Body></Body>
        <Footer></Footer>
       
    </div>
  );
}

export default App;
