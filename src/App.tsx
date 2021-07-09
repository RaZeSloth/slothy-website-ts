import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import profile from './profile';
function App() {
  return (

    <div className="App">




      <header className="App-header">
        <Router>
          <Route path="/profile" component={profile} />

        </Router>
        <a href="/profile" className="log" >
          sussy
        </a>
        <img src="https://cdn.discordapp.com/avatars/826056261610373130/7898450388fd94cf5a442cf6e0d1ee13.webp?size=4096" className="App-logo" alt="sloth_here" />
        <a
          className="App-link"
          href="https://discord.com/api/oauth2/authorize?client_id=826056261610373130&permissions=3761564736&scope=bot%20applications.commands"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slothy!
        </a>
      </header>
    </div>
  );
}

export default App;
