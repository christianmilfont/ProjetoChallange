import React, { useEffect, useState } from 'react';

function MotoDetails({ motoId }) {
  const [moto, setMoto] = useState(null);

  useEffect(() => {
    if (motoId) {
      fetch(`http://localhost:8080/motos/${motoId}`)
        .then((res) => res.json())
        .then((data) => setMoto(data));
    }
  }, [motoId]);

  if (!moto) return <div>Selecione uma moto para ver os detalhes.</div>;

  return (
    <div>
      <h2>{moto.nome}</h2>
      <p><strong>Descrição:</strong> {moto.descricao}</p>
      <p><strong>Status:</strong> {moto.prontaParaUso ? 'Pronta para uso' : 'Não pronta'}</p>
    </div>
  );
}

export default MotoDetails;
