import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrganizacaoPage from './pages/OrganizarPatio'; // Nova tela principal
import MotoPage from './pages/MotoPage';
import MotoDefeituosaPage from './pages/MotoDefeituosaPage';
import ModelosPatio from './pages/ModelosPatio';

function AppRoutes() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Organização</Link>
        <Link to="/modelos" style={{ marginRight: '10px' }}>Modelos</Link>
        <Link to="/motos" style={{ marginRight: '10px' }}>Motos</Link>
        <Link to="/motos-defeituosas">Motos Defeituosas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<OrganizacaoPage />} />
        <Route path="/motos" element={<MotoPage />} />
        <Route path="/motos-defeituosas" element={<MotoDefeituosaPage />} />
        <Route path="/modelos" element={<ModelosPatio />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
