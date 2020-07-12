import React from 'react';
import './style.css';
import imageBanao from '../../assets/perfil.jpeg'


export default function AboutMeImage(){
  return (
      <div className="image">
      <img src={imageBanao} alt=""/>
      <h1>Abner Pena de Souza</h1>
      <h2>Web Developer Enthusiast</h2>
      </div>
  );
}