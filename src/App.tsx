import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './profile';
import Main from "./home";

function App() {
  return (

    <div className="App">





      <Route exact path="/" component={Main} />

      <Route exact path="/profile" component={Profile} />


    </div>



  );
}

export default App;
