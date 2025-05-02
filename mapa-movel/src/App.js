import React, { useState } from 'react';
import './App.css';
import { atualizarPosicao } from '../src/actions/moverElementos.actions.ts';

function App() {
  const [elementos, setElementos] = useState([
    { id: 1, x: 0, y: 0, nome: 'Objeto 1' },
    { id: 2, x: 0, y: 0, nome: 'Objeto 2' },
    { id: 3, x: 0, y: 0, nome: 'Objeto 3' },
    { id: 4, x: 0, y: 0, nome: 'Objeto 4' },
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const [draggedElement, setDraggedElement] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [posicaoInicial, setPosicaoInicial] = useState({ x: 0, y: 0 });

  const onMouseDown = (e, elemento) => {
    setIsDragging(true);
    setDraggedElement(elemento);

    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Salva a posição inicial ao clicar
    setPosicaoInicial({ x: elemento.x, y: elemento.y });
  };

  const onMouseMove = (e) => {
    if (isDragging && draggedElement) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      setElementos((prev) =>
        prev.map((el) =>
          el.id === draggedElement.id ? { ...el, x: newX, y: newY } : el
        )
      );
    }
  };

  const onMouseUp = async () => {
    setIsDragging(false);

    if (draggedElement) {
      const final = elementos.find((el) => el.id === draggedElement.id);

      if (final) {
        try {
          await atualizarPosicao({
            inicialX: posicaoInicial.x,
            inicialY: posicaoInicial.y,
            finalX: final.x,
            finalY: final.y,
          });
          console.log('Movimento salvo com sucesso!');
        } catch (error) {
          console.error('Erro ao salvar no backend:', error);
        }
      }
    }

    setDraggedElement(null);
  };

  return (
    <div className="App" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div className="container">
        {/* Mapa */}
        <div className="map" style={{ width: '600px', height: '400px', border: '2px solid #000', position: 'relative' }}>
          {elementos
            .filter((el) => el.x !== 0 || el.y !== 0)
            .map((elemento) => (
              <div
                key={elemento.id}
                className="draggable"
                style={{
                  position: 'absolute',
                  top: elemento.y,
                  left: elemento.x,
                  width: '80px',
                  height: '30px',
                  backgroundColor: 'blue',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '30px',
                  cursor: 'move',
                }}
                onMouseDown={(e) => onMouseDown(e, elemento)}
              >
                {elemento.nome}
              </div>
            ))}
        </div>

        {/* Lista lateral */}
        <div className="objects-list" style={{ marginLeft: '20px' }}>
          {elementos.map((elemento) => (
            <div
              key={elemento.id}
              className="object-item"
              style={{ marginBottom: '10px', cursor: 'pointer' }}
              onMouseDown={(e) => onMouseDown(e, elemento)}
            >
              <div
                className="object"
                style={{
                  width: '80px',
                  height: '30px',
                  backgroundColor: 'green',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '30px',
                }}
              >
                {elemento.nome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
