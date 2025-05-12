import React from 'react';
import ModelosCard from '../components/ModelosCard'; // ajuste esse caminho se for diferente

const ModelosPatio = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Modelos do Pátio</h1>
      <ModelosCard />
    </div>
  );
};

export default ModelosPatio;
