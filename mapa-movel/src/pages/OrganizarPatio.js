import React, { useState } from 'react';
import { atualizarPosicao } from '../actions/moverElementos.actions.ts';  // Ação de atualizar a posição
import './OrganizacaoPage.css';

const OrganizacaoPage = () => {
  const [motos, setMotos] = useState([
    { id: 1, nome: 'Moto A', x: 0, y: 0 },
    { id: 2, nome: 'Moto B', x: 1, y: 1 },
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const [draggedMoto, setDraggedMoto] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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

      // Calculando a posição para garantir que a moto não saia da grid
      const gridSize = 50; // tamanho de cada célula na grid
      const newXGrid = Math.floor(newX / gridSize);
      const newYGrid = Math.floor(newY / gridSize);

      // Garantir que a moto não saia da grid de 10x10
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
          // Passando as posições inicial e final para a função de atualização
          await atualizarPosicao({
            inicialX: draggedMoto.x,
            inicialY: draggedMoto.y,
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

      <button
        onClick={() => console.log('Organização salva')}
        className="button"
      >
        Salvar organização
      </button>

      {/* Mapa */}
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

        {/* Motos */}
        {motos.map((moto) => (
          <div
            key={moto.id}
            onMouseDown={(e) => handleMouseDown(e, moto)}
            className="moto"
            style={{
              left: `${moto.x * 50}px`, // Ajusta a posição com base na grid
              top: `${moto.y * 50}px`,  // Ajusta a posição com base na grid
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
