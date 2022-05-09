import React from 'react';
import './navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">
          {' '}
          Doctor<b>Care</b>
        </h1>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a href="#">Início</a>
          </li>
          <li className="navbar-list-item">
            <a href="#">Sobre</a>
          </li>
          <li className="navbar-list-item">
            <a href="#">Serviços</a>
          </li>
          <li className="navbar-list-item">
            <a href="#">Depoimentos</a>
          </li>
        </ul>
        <button className="btn btn-outline">Agendar consulta</button>
      </div>
    </nav>
  );
}
