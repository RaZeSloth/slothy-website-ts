import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Profile from './pages/profile';
import Home from "./pages/home";
import Invite from "./pages/invite";
import NotFound from "./pages/error"
function App() {
  return (

    <div className="App">






      <Route exact path="/profile" component={Profile} />
      <Route exact path="/invite" component={Invite} />
      <Route exact path="/" component={Home} />
     
    </div>



  );
}

export default App;
