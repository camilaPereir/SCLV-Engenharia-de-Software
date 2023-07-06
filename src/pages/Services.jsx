import React from "react";
import { Link } from "react-router-dom";
// import "./Services.css";
import "../styles/Services.css";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";


const Services = () => {
  return (
    <div className="container-fluid">
    <div className="text-center">
      <p className="lead">Agende e finalize seus serviços conosco.</p>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="service-card">
          <img src={img4} alt="Agendamento" className="img-fluid" />
          <h3 className="text-primary">Agendamento</h3>
          <p>Agende o serviço desejado para o seu veículo e escolha a data e horário mais convenientes.</p>
          <Link to="/agendamentos" className="btn btn-primary">Agendar Serviço</Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-card">
          <img src={img5}alt="Finalização" className="img-fluid" />
          <h3 className="text-primary">Finalização</h3>
          <p>Finalize o serviço realizado no seu veículo, confirme o pagamento e aproveite o resultado impecável.</p>
          <Link to="/finalizacoes" className="btn btn-primary">Finalizar Serviço</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Services;
