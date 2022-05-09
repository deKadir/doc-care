import React from 'react';
import './about.css';
export default function About() {
  return (
    <section className="about">
      <div className="about-container container">
        <div className="about-img">
          <img
            src={require('../../assets/images/doctor.png')}
            alt="doctor care"
          />
        </div>
        <article className="about-article">
          <span className="about-article-tag">SOBRE NÓS</span>
          <h1 className="about-article-title">
            Entenda quem somos e por que existimos
          </h1>
          <p className="about-article-caption">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </article>
      </div>
    </section>
  );
}
