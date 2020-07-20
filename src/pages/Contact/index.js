import React from 'react'
import './style.css'
import instagramImg from '../../assets/instagramLogo.png'
import githubImg from '../../assets/logoGithub.svg'
import linkedinImg from '../../assets/linkedinLogo.png'
import whatsAppImg from '../../assets/whatsappLogo.png'


export default function Contact(){
  return (
    <section className="contactWrapper">
        <h2>Contato</h2>
        <div className="contactContent">
          <div className="socialMedias">
            <h3>Redes Sociais</h3>
            <ul className="socialMediaIcons">
              <li><a href="https://www.instagram.com/abnerpsouza/"><img src={instagramImg}/></a></li>
              <li><a href="https://github.com/abnerpsouza99"><img src={githubImg} alt=""/></a></li>
              <li><a href="https://www.linkedin.com/in/abnerpenadesouza/"><img src={linkedinImg} alt=""/></a></li>
            </ul>
          </div>
          <div className="contacts">
            <div className="whatsAppBox">
              <a href="https://wa.me/5551982853755">
                <p>WhatsApp</p>
                <img src={whatsAppImg} alt=""/>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}