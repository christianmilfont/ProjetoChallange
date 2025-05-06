import React, { useState, useEffect } from 'react';

function MotoDefeituosaForm() {
  const [formData, setFormData] = useState({
    nomeMarca: '',
    nomeMoto: '',
    placa: '',
    descricao: '',
    tipoDefeito: '',
  });
  const [tiposDefeito, setTiposDefeito] = useState([]);

  useEffect(() => {
    // Supondo que você tenha um endpoint que retorna os valores possíveis do enum
    fetch('http://localhost:8080/motos-defeituosas/tipos-defeito')
      .then((res) => res.json())
      .then(data => {
        setTiposDefeito(data);
        })
      .catch(error => {
        console.error('Erro ao buscar tipos de defeito:', error);
        alert('Não foi possível carregar os tipos de defeito');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    fetch('http://localhost:8080/motos-defeituosas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        alert('Moto defeituosa cadastrada com sucesso!');
        console.log('Resposta do servidor:', data);
      })
      .catch(err => {
        console.error('Erro ao cadastrar moto:', err);
      });
    };
  

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <label>Nome da Marca:</label>
        <input
          type="text"
          name="nomeMarca"
          value={formData.nomeMarca}
          onChange={handleChange}
          required
        />

        <label>Nome da Moto:</label>
        <input
          type="text"
          name="nomeMoto"
          value={formData.nomeMoto}
          onChange={handleChange}
          required
        />

        <label>Placa:</label>
        <input
          type="text"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          required
        />

        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          required
        />

        <label>Tipo de Defeito:</label>
        <select
        name="tipoDefeito"
        value={formData.tipoDefeito}
        onChange={handleChange}
        required
      >
          <option value="">Selecione</option>
          {tiposDefeito.map((defeito) => (
            <option key={defeito} value={defeito}>
              {defeito}
            </option>
          ))}
        </select>
      
      <button type="submit">Cadastrar Moto Defeituosa</button>
    </form>
  );
}

export default MotoDefeituosaForm;
