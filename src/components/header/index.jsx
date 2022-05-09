import React from 'react';

import { WhatsappIcon } from './../../assets/icons';
import './header.css';
export default function Header() {
  return (
    <header className="header">
      <main className="header-container container">
        <aside className="header-content">
          <span>BOAS-VINDAS A DOCTORCARE 👋</span>
          <h1>Assistência médica simplificada para todos</h1>
          <p>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </p>
          <button className="btn btn-primary">
            {' '}
            <WhatsappIcon className="header-btn-whatsapp" /> Agende sua consulta
          </button>
        </aside>
        <aside className="header-img">
          <img
            src={require('../../assets/images/hero_img.png')}
            alt="doc_care"
          />
        </aside>
      </main>
    </header>
  );
}
