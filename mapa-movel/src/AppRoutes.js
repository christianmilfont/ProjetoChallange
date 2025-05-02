import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App'; // Sua tela de movimentação atual
import MotoPage from './pages/MotoPage'; // A nova tela das motos

function AppRoutes() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Mapa</Link>
        <Link to="/motos">Motos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/motos" element={<MotoPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
