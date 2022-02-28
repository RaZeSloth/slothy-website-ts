import React from "react";
import '../App.css';

const Home = () => {
   return( 
   <div className="App-header">
      <a href="/profile" className="log purple" >
          Profile
        </a>
    
     
        
      <img src="slothy.png" className="App-logo" alt="sloth_here" />
        <a
          className="App-link App logo"
          href="https://discord.com/api/oauth2/authorize?client_id=826056261610373130&permissions=3761564736&scope=bot%20applications.commands"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slothy!
        </a>

      
    </div>
    )
}

export default Home;