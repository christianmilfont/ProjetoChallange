import React, { useEffect, useState } from 'react';
import { atualizarPosicao } from '../actions/moverElementos.actions.ts';
import './OrganizacaoPage.css';

const OrganizacaoPage = () => {
  const [motos, setMotos] = useState([]);
  const [motosDisponiveis, setMotosDisponiveis] = useState([]);
  const [selectedMotoId, setSelectedMotoId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedMoto, setDraggedMoto] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 1. Buscar as motos cadastradas no banco de dados
  useEffect(() => {
    async function fetchMotos() {
      try {
        const response = await fetch('http://localhost:8080/motos');
        const data = await response.json();
        setMotosDisponiveis(data);
      } catch (error) {
        console.error('Erro ao buscar motos do banco:', error);
      }
    }

    fetchMotos();
  }, []);

  // 2. Adicionar moto ao grid quando o ID for selecionado
  useEffect(() => {
    if (selectedMotoId && !motos.find(m => m.id === selectedMotoId)) {
      const motoSelecionada = motosDisponiveis.find(m => m.id === selectedMotoId);
      if (motoSelecionada) {
        // Posiciona no canto superior esquerdo por padrão (0, 0)
        setMotos(prev => [...prev, { ...motoSelecionada, x: 0, y: 0 }]);
      }
    }
  }, [selectedMotoId]);

  const handleMouseDown = (e, moto) => {
    setIsDragging(true);
    setDraggedMoto(moto);

    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging && draggedMoto) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      const gridSize = 50;
      const newXGrid = Math.floor(newX / gridSize);
      const newYGrid = Math.floor(newY / gridSize);

      const clampedX = Math.min(Math.max(newXGrid, 0), 9);
      const clampedY = Math.min(Math.max(newYGrid, 0), 9);

      setMotos((prevMotos) =>
        prevMotos.map((moto) =>
          moto.id === draggedMoto.id
            ? { ...moto, x: clampedX, y: clampedY }
            : moto
        )
      );
    }
  };

  const handleMouseUp = async () => {
    setIsDragging(false);

    if (draggedMoto) {
      const finalMoto = motos.find((moto) => moto.id === draggedMoto.id);

      if (finalMoto) {
        try {
          await atualizarPosicao({
            inicialX: draggedMoto.x ?? 0,
            inicialY: draggedMoto.y ?? 0,
            finalX: finalMoto.x,
            finalY: finalMoto.y,
          });
          console.log('Movimento salvo com sucesso!');
        } catch (error) {
          console.error('Erro ao salvar no backend:', error);
        }
      }
    }

    setDraggedMoto(null);
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1 className="title">Organizar Pátio</h1>

      {/* Dropdown de seleção de moto do banco */}
      <label>
        Selecione uma moto:
        <select
          value={selectedMotoId || ''}
          onChange={(e) => setSelectedMotoId(Number(e.target.value))}
        >
          <option value="">-- Selecione --</option>
          {Array.isArray(motosDisponiveis) &&
            motosDisponiveis.map((moto) => (
              <option key={moto.id} value={moto.id}>
                {moto.nome} (ID {moto.id})
              </option>
            ))}

        </select>
      </label>

      <div className="map-container">
        {[...Array(100)].map((_, index) => {
          const x = index % 10;
          const y = Math.floor(index / 10);
          return (
            <div
              key={index}
              className="grid-item"
              style={{ width: '50px', height: '50px' }}
            >
              {x},{y}
            </div>
          );
        })}

        {/* Mostrar as motos posicionadas */}
        {motos.map((moto) => (
          <div
            key={moto.id}
            onMouseDown={(e) => handleMouseDown(e, moto)}
            className="moto"
            style={{
              left: `${moto.x * 50}px`,
              top: `${moto.y * 50}px`,
            }}
          >
            {moto.nome}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizacaoPage;
