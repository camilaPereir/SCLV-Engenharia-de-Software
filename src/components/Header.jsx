import { useContext } from "react";
//import classes from "./Header.module.css";
import AppContext from "./utils/AppContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { tema, setTema } = useContext(AppContext);

  function handleTemaClick(e) {
    e.preventDefault();
    if (tema === "light") {
      setTema("dark");
    } else {
      setTema("light")
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="fs-3">Lava Jato</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">Principal</NavLink>
              <NavLink to="/veiculos" className="nav-link">Veiculos</NavLink>
              <NavLink to="/clientes" className="nav-link">Clientes</NavLink>
              <NavLink to="/filiais" className="nav-link">Filiais</NavLink>
              <NavLink to="/funcionarios" className="nav-link">Funcionarios</NavLink>
              <NavLink to="/tiposervicos" className="nav-link">Tipos de Serviços</NavLink>
              <NavLink to="/agendamentos" className="nav-link">Agendamentos</NavLink>
              <NavLink to="/finalizacoes" className="nav-link">Finalizações</NavLink>
              <NavLink to="/sobre" className="nav-link">Sobre</NavLink>

              <a href="#" className="nav-link" onClick={handleTemaClick}>
                {tema === "dark" && (
                  <i className="bi bi-sun-fill" />
                )}
                {tema === "light" && (
                  <i className="bi bi-moon-fill" />
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;