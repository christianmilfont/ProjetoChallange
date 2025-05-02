import React, { useEffect, useState } from 'react';

function MotoDropdown({ onSelectMoto }) {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/motos')
      .then((res) => res.json())
      .then((data) => setMotos(data));
  }, []);

  return (
    <select onChange={(e) => onSelectMoto(e.target.value)}>
      <option value="">Selecione uma moto</option>
      {motos.map((moto) => (
        <option key={moto.id} value={moto.id}>
          {moto.nome}
        </option>
      ))}
    </select>
  );
}

export default MotoDropdown;
