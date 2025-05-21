import React, { useState } from 'react';

function MotoForm({ onMotoCriada }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prontaParaUso, setProntaParaUso] = useState(false);
  const [semPlaca, setSemPlaca] = useState(false);
  const [chassi, setChassi] = useState('')
  const [motor, setMotor] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaMoto = { nome, descricao, prontaParaUso, semPlaca, chassi, motor };

    try {
      const res = await fetch('http://localhost:8080/motos/criar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaMoto),
      });

      if (!res.ok) throw new Error('Erro ao criar moto');

      const motoCriada = await res.json();
      onMotoCriada && onMotoCriada(motoCriada);
      alert('Moto criada com sucesso!');
      setNome('');
      setDescricao('');
      setProntaParaUso(false);
      setSemPlaca(false);
      setChassi('');
      setMotor('');
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar moto');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <div>
        <label>Nome:</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Descrição:</label>
        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={prontaParaUso}
            onChange={(e) => setProntaParaUso(e.target.checked)}
          />
          Pronta para uso
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={semPlaca}
            onChange={(e) => setSemPlaca(e.target.checked)}
          />
          Sem placa
        </label>
      </div>
      <div>
        <label>Chassi:</label>
        <input value={chassi} onChange={(e) => setChassi(e.target.value)} required />
      </div>
      <div>
        <label>motor:</label>
        <input value={motor} onChange={(e) => setMotor(e.target.value)} required />
      </div>
      <button type="submit">Cadastrar Moto</button>
    </form>
  );
}

export default MotoForm;
