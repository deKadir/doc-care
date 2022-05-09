import React from 'react';
import { MailIcon, MapIcon, WhatsappIcon } from './../../assets/icons';
import './contact.css';
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container container">
        <div className="contact-content">
          <h3>Entre em contato com a gente!</h3>
          <div className="contact-info">
            <MapIcon />
            <span>R. Amauri Souza, 346</span>
          </div>
          <div className="contact-info">
            <MailIcon />
            <span>contato@doctorcare.com</span>
          </div>
          <button className="btn btn-primary">
            <WhatsappIcon />
            Agende sua consulta
          </button>
        </div>
        <div className="contact-img">
          <img
            src={require('../../assets/images/contact_img.png')}
            alt="Doccare contact"
          />
        </div>
      </div>
    </section>
  );
}
