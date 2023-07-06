import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import img1 from "../assets/img1-polimento.jpg";
import img2 from "../assets/img2-lavagemExterna.jpg";
import img3 from "../assets/img3-interna.jpg";


const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bem-vindo ao Lava Jato SCLV</h1>
        <p>Deixe seu carro impecável com nossos serviços de lavagem e polimento.</p>
        <Link to="/servicos" className="cta-button">Ver Serviços</Link>
      </div>
      <div className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={img2} alt="Lavagem Externa" />
            <h3>Lavagem Externa</h3>
            <p>Remova a sujeira e deixe a pintura brilhante.</p>
          </div>
          <div className="service-card">
            <img src={img3} alt="Lavagem Interna" />
            <h3>Lavagem Interna</h3>
            <p>Limpeza completa do interior, incluindo estofamentos e painéis.</p>
          </div>
          <div className="service-card">
            <img src={img1} alt="Polimento" />
            <h3>Polimento</h3>
            <p>Restaure o brilho da pintura e remova pequenos riscos.</p>
          </div>
        </div>
      </div>
      <div className="testimonial-section">
        <h2>O que nossos clientes estão dizendo</h2>
        <div className="testimonial-card">
          <p>"Meu carro nunca ficou tão limpo e brilhante! Excelente serviço e atendimento."</p>
          <p className="client-name">- João Silva</p>
        </div>
      </div>
      <div className="contact-section">
        <h2>Saiba mais sobre nós</h2>
        <p>Tire suas dúvidas ou agende um serviço.</p>
        <Link to="/sobre" className="cta-button">Sobre</Link>
      </div>
    </div>
  );
}

export default Home;
