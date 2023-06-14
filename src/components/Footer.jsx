import { useContext } from "react";
import AppContext from "./utils/AppContext";

const Footer = () => {
  const { tema, } = useContext(AppContext);
  return (
    <>
      <footer className={`fixed-bottom bg-body-tertiary ${tema === "dark" ? "text-light" : "text-dark"} text-center p-3`}>
        Copyright &copy; Camila Pereira 2023 <br />
        Todos os direitos reservados.
      </footer>
    </>
  )
}

export default Footer