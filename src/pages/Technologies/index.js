import React from 'react';
import './style.css'
import reactJSImage from '../../assets/react.png'
import reactCSSImage from '../../assets/css.png'
import reactHTMLImage from '../../assets/html.png'
import jSImage from '../../assets/js.png'
import nodeImage from '../../assets/node.png'
import sqlImage from '../../assets/sql.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Technologies() {

  return (
    <section className="technologiesSection">
      <h2>Tecnologias</h2>
      <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
        <div className="frontEnd">
          <h2>Front-End</h2>
          <ul className="frontEndList">
            <li>
              <img src={jSImage} alt="" />
              <h3>JavaScript</h3>
            </li>
            <li>
              <img src={reactHTMLImage} alt="" />
              <h3>HTML</h3>
            </li>
            <li>
              <img src={reactCSSImage} alt="" />
              <h3>CSS</h3>
            </li>
            <li>
              <img src={reactJSImage} alt="" />
              <h3>ReactJS</h3>
            </li>
          </ul>
        </div>

      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
        <div className="backEnd">
          <h2>Back-End</h2>
          <ul className="backEndList">
            <li>
              <img src={nodeImage} alt="" />
              <h3>node.js</h3>
            </li>
            <li>
              <img src={sqlImage} alt="" />
              <h3>SQL</h3>
            </li>
          </ul>
        </div>
      </ScrollAnimation>
    </section>

  );
}