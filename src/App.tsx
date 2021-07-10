import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './profile';
import Home from "./home";
import Invite from "./invite";
function App() {
  return (

    <div className="App">





      <Route exact path="/" component={Home} />

      <Route exact path="/profile" component={Profile} />
      <Route exact path="/invite" component={Invite} />

    </div>



  );
}

export default App;
