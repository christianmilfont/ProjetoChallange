import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App'; // Tela de movimentação atual
import MotoPage from './pages/MotoPage'; // Tela das motos
import MotoDefeituosaPage from './pages/MotoDefeituosaPage'; // Nova tela para motos defeituosas

function AppRoutes() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Mapa</Link>
        <Link to="/motos" style={{ marginRight: '10px' }}>Motos</Link>
        <Link to="/motos-defeituosas">Motos Defeituosas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/motos" element={<MotoPage />} />
        <Route path="/motos-defeituosas" element={<MotoDefeituosaPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
