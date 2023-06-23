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

const App = () => {
  const [tema, setTema] = useState("light");
  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Leiaute />}>
              <Route index element={<Home />} />
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
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;