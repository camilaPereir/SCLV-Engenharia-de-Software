import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AppContext from "./components/AppContext";
import Leiaute from './pages/Leiaute.jsx';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import ListagemAluno from './pages/veiculos/Listagem';
import CadastroAluno from './pages/veiculos/Cadastro';
import AlteracaoAluno from './pages/veiculos/Alteracao';
import ExclusaoAluno from './pages/veiculos/Exclusao';

const App = () => {
  const [tema, setTema] = useState("light");
  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Leiaute />}>
              <Route index element={<Home />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="*" element={<NotFound />} />
              <Route path="veiculos">
                <Route index element={<ListagemAluno />} />
                <Route path="cadastrar" element={<CadastroAluno />} />
                <Route path="alterar/:id" element={<AlteracaoAluno />} />
                <Route path="excluir/:id" element={<ExclusaoAluno />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;