import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='h1'>Tenzing Sherpa - <a href="https://github.com/TenzingS" target="_blank">My Github</a> | <a href="https://www.linkedin.com/in/tenzing-n-sherpa/" target="_blank">My Linkedin</a></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <nav>
        <Link to="/projects">Projects</Link>
      </nav>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}

function Projects() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>Projects that I have done and am working on currently</h2>

        <h3>NBA Today - <a href="https://github.com/TenzingS/nba-today-project" target="_blank">Github</a></h3>
        <p>App allows users to register and join a message board and interact with other NBA fans. 
          The app features the latest news, player stats, and allows users to stay up to date on all things NBA related.</p>

        <h3>Reciplease - <a href="https://github.com/TenzingS/reciplease" target="_blank">Github</a> | <a href="https://reciplease10.herokuapp.com/" target="_blank">Site</a></h3>
        <p>App allows users to register and join an online community where people can share their recipes with others</p>

        <h3>Cocktail Bar - <a href="https://github.com/TenzingS/cocktail-bar" target="_blank" >Github</a> | <a href="https://cheery-palmier-689150.netlify.app/" target="_blank">Site</a></h3>
        <p>A front-end app where users can search for every cocktail in the cocktail API database. Results also include images and recipes of the cocktails.</p>

        <h3>Weather App - <a href="https://github.com/TenzingS/weather-app" target="_blank">Github</a> | <a href="https://eloquent-moonbeam-9bb0af.netlify.app/" target="_blank">Site</a></h3>
        <p>Front-end app allows users to enter a location and receive current and forecast weather data for the location</p>

        <h3>Airlines Review - <a href="https://github.com/TenzingS/airlines-rails-react" target="_blank">Github</a></h3>
        <p>Front End app that allows users to leave reviews on major airlines.</p>
      </main>
    </>
  );
}

export default App;
