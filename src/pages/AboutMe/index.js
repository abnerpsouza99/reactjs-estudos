import React from 'react';
import './style.css';
import AboutMeImage from '../AboutMeImage'
import AboutMeContent from '../AboutMeContent'

export default function AboutMe(){
  return (
    <section className="aboutMe">
      <AboutMeImage/>
      <AboutMeContent/>
    </section>
  );
}