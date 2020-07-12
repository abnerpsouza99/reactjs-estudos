import React from 'react';
import './style.css'
import reactJSImage from '../../assets/react.png'
import reactCSSImage from '../../assets/css.png'
import reactHTMLImage from '../../assets/html.png'
import jSImage from '../../assets/js.png'

export default function Technologies() {

  return (
    <section className="technologiesSection">
      <h2>Tecnologias</h2>
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
      <div className="backEnd">
        <ul className="backEndList">
          <li></li>
        </ul>
      </div>
    </section>
  );
}