import React, { useState, useEffect } from 'react';
import MotoDefeituosaForm from '../components/MotoDefeituosaForm';

function MotoDefeituosaPage() {
  const [motosDefeituosas, setMotosDefeituosas] = useState([]);

  const carregarMotos = () => {
    fetch('http://localhost:8080/motos-defeituosas/todasAsMotos')
      .then((res) => res.json())
      .then((data) => setMotosDefeituosas(data))
      .catch((err) => {
        console.error('Erro ao buscar motos defeituosas:', err);
        alert('Erro ao carregar motos defeituosas');
      });
  };

  useEffect(() => {
    carregarMotos();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Motos Defeituosas</h1>
      <MotoDefeituosaForm onDefeitoCriado={carregarMotos} />

      <h2 style={{ marginTop: '40px' }}>Lista de Motos Defeituosas</h2>
      {motosDefeituosas.length === 0 ? (
        <p>Nenhuma moto defeituosa cadastrada.</p>
      ) : (
        <ul>
          {motosDefeituosas.map((moto) => (
            <li key={moto.id}>
              ID: {moto.id} — Tipo de Defeito: {moto.tipoDefeito}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MotoDefeituosaPage;
