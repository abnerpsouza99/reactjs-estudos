import React from 'react';
import Navigation from './pages/Navigation'
import AboutMe from './pages/AboutMe'
import Technologies from './pages/Technologies'
import Contact from './pages/Contact'
import './app.css'

function App() {
  return (
    <div>
      <h1>Bem vindo!</h1>
      <AboutMe/>
      <Technologies/>
      <Contact/>
    </div>
  );
}

export default App;
