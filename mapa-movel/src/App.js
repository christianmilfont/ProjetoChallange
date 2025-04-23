import React, { useState } from 'react';
import './App.css';
import { atualizarPosicao } from '../src/actions/moverElementos.actions.ts'; // Importa a função de ação

function App() {
  // Estado para armazenar a posição e cor dos elementos
  const [elementos, setElementos] = useState([
    { id: 1, x: 150, y: 100, cor: 'red' },
    { id: 2, x: 300, y: 200, cor: 'blue' },
  ]);

  // Função para mover um elemento
  const moverElemento = async (id, novoX, novoY) => {
    // Atualiza a posição localmente
    setElementos((prevElementos) =>
      prevElementos.map((elemento) =>
        elemento.id === id ? { ...elemento, x: novoX, y: novoY } : elemento
      )
    );

    try {
      // Chama a função de ação para salvar a posição no backend
      await atualizarPosicao(id, novoX, novoY);
    } catch (error) {
      console.error('Falha ao atualizar posição:', error);
      alert('Houve um erro ao salvar a posição');
    }
  };

  return (
    <div className="map-container">
      <div className="map">
        {elementos.map((elemento) => (
          <Elemento
            key={elemento.id}
            id={elemento.id}
            x={elemento.x}
            y={elemento.y}
            cor={elemento.cor}
            moverElemento={moverElemento}
          />
        ))}
      </div>
    </div>
  );
}

const Elemento = ({ id, x, y, cor, moverElemento }) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [offsetX, setOffsetX] = React.useState(0);
  const [offsetY, setOffsetY] = React.useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setOffsetX(e.clientX - e.target.getBoundingClientRect().left);
    setOffsetY(e.clientY - e.target.getBoundingClientRect().top);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const novoX = e.clientX - offsetX;
      const novoY = e.clientY - offsetY;
      moverElemento(id, novoX, novoY); // Chama a função passada como prop
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="draggable"
      style={{ top: y, left: x }}
      onMouseDown={onMouseDown}
    >
      <div
        className="draggable-inner"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: cor, // Usa a cor passada como propriedade
          cursor: 'move',
        }}
      />
    </div>
  );
};

export default App;
