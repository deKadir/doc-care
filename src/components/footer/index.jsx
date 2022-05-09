import React from 'react';
import * as Icons from '../../assets/icons';
import './footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-logo">
          Doctor<b>Care</b>
        </h1>
        <div className="footer-content">
          <span>©2022 - DoctorCare.</span>
          <div className="footer-icons">
            <Icons.InstagramIcon />
            <Icons.FacebookIcon />
            <Icons.YoutubeIcon />
          </div>
        </div>
        <span>Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
