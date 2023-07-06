import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppContext from "./components/utils/AppContext";
import Home from './pages/Home';
import Leiaute from './pages/Leiaute.jsx';
import NotFound from './pages/NotFound';
import About from './pages/About';

import RegisterVehicle from './pages/vehicles/Register';
import DeleteVehicle from './pages/vehicles/Delete';
import ListVehicle from './pages/vehicles/List';
import UpdateVehicle from './pages/vehicles/Update';

import RegisterCliente from './pages/clientes/Register';
import DeleteCliente from './pages/clientes/Delete';
import ListCliente from './pages/clientes/List';
import UpdateCliente from './pages/clientes/Update';

import RegisterFilial from './pages/filiais/Register';
import DeleteFilial from './pages/filiais/Delete';
import ListFilial from './pages/filiais/List';
import UpdateFilial from './pages/filiais/Update';

import RegisterFuncionario from './pages/funcionarios/Register';
import DeleteFuncionario from './pages/funcionarios/Delete';
import ListFuncionario from './pages/funcionarios/List';
import UpdateFuncionario from './pages/funcionarios/Update';

import RegisterFinalizacao from './pages/finalizacoes/Register';
import DeleteFinalizacao from './pages/finalizacoes/Delete';
import ListFinalizacao from './pages/finalizacoes/List';
import UpdateFinalizacao from './pages/finalizacoes/Update';

import RegisterScheduling from './pages/scheduling/Register';
import DeleteScheduling from './pages/scheduling/Delete';
import ListScheduling from './pages/scheduling/List';
import UpdateScheduling from './pages/scheduling/Update';

import RegisterTypeService from "./pages/type service/Register";
import DeleteTypeService from "./pages/type service/Delete";
import ListTypeService from "./pages/type service/List";
import UpdateTypeService from "./pages/type service/Update";
import Services from "./pages/Services";

const App = () => {
  const [tema, setTema] = useState("light");
  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Leiaute />}>
              <Route index element={<Home />} />
              <Route path="servicos" element={<Services />} />
              <Route path="sobre" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route path="veiculos">
                <Route index element={<ListVehicle />} />
                <Route path="cadastrar" element={<RegisterVehicle />} />
                <Route path="alterar/:id" element={<UpdateVehicle />} />
                <Route path="excluir/:id" element={<DeleteVehicle />} />
              </Route>
              <Route path="clientes">
                <Route index element={<ListCliente />} />
                <Route path="cadastrar" element={<RegisterCliente />} />
                <Route path="alterar/:id" element={<UpdateCliente />} />
                <Route path="excluir/:id" element={<DeleteCliente />} />
              </Route>
              <Route path="filiais">
                <Route index element={<ListFilial />} />
                <Route path="cadastrar" element={<RegisterFilial />} />
                <Route path="alterar/:id" element={<UpdateFilial />} />
                <Route path="excluir/:id" element={<DeleteFilial />} />
              </Route>
              <Route path="funcionarios">
                <Route index element={<ListFuncionario />} />
                <Route path="cadastrar" element={<RegisterFuncionario />} />
                <Route path="alterar/:id" element={<UpdateFuncionario />} />
                <Route path="excluir/:id" element={<DeleteFuncionario />} />
              </Route>
              <Route path="finalizacoes">
                <Route index element={<ListFinalizacao />} />
                <Route path="cadastrar" element={<RegisterFinalizacao />} />
                <Route path="alterar/:id" element={<UpdateFinalizacao />} />
                <Route path="excluir/:id" element={<DeleteFinalizacao />} />
              </Route>
              <Route path="agendamentos">
                <Route index element={<ListScheduling />} />
                <Route path="cadastrar" element={<RegisterScheduling />} />
                <Route path="alterar/:id" element={<UpdateScheduling />} />
                <Route path="excluir/:id" element={<DeleteScheduling />} />
              </Route>
              <Route path="tiposervicos">
                <Route index element={<ListTypeService />} />
                <Route path="cadastrar" element={<RegisterTypeService />} />
                <Route path="alterar/:id" element={<UpdateTypeService />} />
                <Route path="excluir/:id" element={<DeleteTypeService />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;