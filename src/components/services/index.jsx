import React from 'react';
import { CheckIcon } from '../../assets/icons';
import './services.css';
export default function Services() {
  return (
    <section className="services">
      <div className="services-container container">
        <div className="services-details">
          <div className="service-detail-card">
            <h1>+3.500</h1>
            <p>Pacientes atendidos</p>
          </div>
          <div className="service-detail-card">
            <h1>+15</h1>
            <p>Especialistas disponíveis</p>
          </div>
          <div className="service-detail-card">
            <h1>+10</h1>
            <p>Anos no mercado</p>
          </div>
        </div>
        <p className="services-title">SERVIÇOS</p>
        <h1 className="services-subtitle">
          Como podemos ajudá-lo a se sentir melhor?
        </h1>
        <div className="services-wrapper">
          <article className="service-card">
            <CheckIcon />
            <h2 className="service-card-title">Problemas digestivos</h2>
            <p className="service-card-caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </article>
          <article className="service-card">
            <CheckIcon />
            <h2 className="service-card-title">Saúde Hormonal</h2>
            <p className="service-card-caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </article>
          <article className="service-card">
            <CheckIcon />
            <h2 className="service-card-title">Bem-estar mental</h2>
            <p className="service-card-caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </article>
          <article className="service-card">
            <CheckIcon />
            <h2 className="service-card-title">Cuidados Pediátricos</h2>
            <p className="service-card-caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </article>
          <article className="service-card">
            <CheckIcon />
            <h2 className="service-card-title">Autoimune e Inflamação</h2>
            <p className="service-card-caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </article>
          <article className="service-card">
            <CheckIcon />
            <h2 className="service-card-title">Saúde do Coração</h2>
            <p className="service-card-caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
