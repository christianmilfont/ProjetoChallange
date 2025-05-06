import React, { useState } from 'react';
import MotoDropdown from '../components/MotoDropdown';
import MotoDetails from '../components/MotoDetails';
import MotoForm from '../components/MotoForm';

function MotoPage() {
  const [selectedMotoId, setSelectedMotoId] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Motos</h1>
      <MotoDropdown onSelectMoto={setSelectedMotoId} />
      <MotoDetails motoId={selectedMotoId} />
      <hr />
      <h2>Cadastrar nova moto</h2>
      <MotoForm onMotoCriada={() => window.location.reload()} />
    </div>
  );
}

export default MotoPage;
