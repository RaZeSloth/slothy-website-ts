import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Profile from './pages/profile';
import Home from "./pages/home";
import Invite from "./pages/invite";

function App() {
  return (
    <div className="App">
      <Route path="/profile" element={<Profile/>} />
      <Route path="/invite" element={<Invite/>} />
      <Route path="/" element={<Home/>} />
    </div>
  );
}

export default App;
